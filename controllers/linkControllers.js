const models = require('../models/linkModels.js');

const makeId = (length) => {
    const result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
   }
   return result.join('');
}

const makeShortLink = async () => {
    try {
        const id = makeId(5);
        const short_link = `share.lgbt/${id}`;
        const data = await models.retrieveLink(short_link);
        if (!data) { return short_link }
        return await makeShortLink();
    } catch(err) {
        throw new Error(err);
    }
}

module.exports = {
    createLink: async (req, res) => {
        try {
            if (!req.body?.redirect_link || typeof req.body?.redirect_link !== 'string') {
                return res.status(400).send({ error: 'Request requires a redirect_link<String> on the request body.'});
            }

            const { redirect_link } = req.body;
            const short_link = await makeShortLink();
            const doc = await models.createLink(redirect_link, short_link);
            res.status(201).send(doc);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },

    retrieveLink: async (req, res) => {
        try {
            if (!req.body?.short_link || typeof req.body?.short_link !== 'string') {
                return res.status(400).send({ error: 'Request requires a short_link<String> on the request body.'});
            }

            const { short_link } = req.body;
            const data = await models.retrieveLink(short_link);
            console.log(short_link, data)

            if (!data) {
                return res.status(400).send({ error: 'Request failed, there is no link associated with that short url.'});
            }

            res.status(200).send(data);
        } catch(err) {
            throw new Error(err);
        }
    }
}
