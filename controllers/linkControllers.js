const models = require('../models/linkModels.js');

const makeId = (length) => {
	const result = [];
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result.push(
			characters.charAt(Math.floor(Math.random() * charactersLength))
		);
	}

	return result.join('');
};

const makeShortLink = async () => {
	try {
		const id = makeId(5);
		const short_link = `share.lgbt/${id}`;
		const data = await models.retrieveLink(short_link);
		if (!data) {
			return short_link;
		}

		return await makeShortLink();
	} catch (error) {
		throw new Error(error);
	}
};

const formatRedirectLink = (link) => {
	if (!link.includes('https://') && !link.includes('http://')) {
		link = 'https://' + link;
	}

	return link;
};

module.exports = {
	createLink: async (request, res) => {
		try {
			if (
				!request.body?.redirect_link ||
				typeof request.body?.redirect_link !== 'string'
			) {
				return res.status(400).send({
					error: 'Request requires a redirect_link<String> on the request body.'
				});
			}

			const {redirect_link} = request.body;
			const formattedLink = formatRedirectLink(redirect_link);
			const short_link = await makeShortLink();
			const doc = await models.createLink(formattedLink, short_link);
			res.status(201).send(doc);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	},

	retrieveLink: async (request, res) => {
		try {
			if (
				!request.body?.short_link ||
				typeof request.body?.short_link !== 'string'
			) {
				return res.status(400).send({
					error: 'Request requires a short_link<String> on the request body.'
				});
			}

			const {short_link} = request.body;
			const data = await models.retrieveLink(short_link);

			if (!data) {
				return res.status(400).send({
					error:
						'Request failed, there is no link associated with that short url.'
				});
			}

			res.status(200).send(data);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	},

    sendToRedirectPage: async (request, res) => {
        try {
            const {hash} = request.params;
            const short_link = `share.lgbt/${hash}`;
            const data = await models.retrieveLink(short_link);

            if (!data) {
                return res.status(400).send({
                    error:
                        'Request failed, there is no link associated with that short url.'
                });
            }

            const {redirect_link, clicks} = data;
            await models.addClick(short_link, clicks);
            res.redirect(`http://localhost:1337/?url=${redirect_link}`);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },

    redirectToLink: async (request, res) => {
        try {
            const {url} = request.body;
            if (typeof url !== 'string' || !url) {
                return res.status(400).send({
                    error:
                        'No URL passed or it was not a String.'
                });
            }

            res.redirect(url);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },

	redirectAndUpdate: async (request, res) => {
		try {
			const {hash} = request.params;
			const short_link = `share.lgbt/${hash}`;
			const data = await models.retrieveLink(short_link);

			if (!data) {
				return res.status(400).send({
					error:
						'Request failed, there is no link associated with that short url.'
				});
			}

			const {redirect_link, clicks} = data;
			await models.addClick(short_link, clicks);
			res.redirect(redirect_link);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	}
};
