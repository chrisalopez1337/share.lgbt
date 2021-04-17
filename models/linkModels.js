const { Links } = require('../database');

module.exports = {
    createLink: async (redirect_link, short_link, clicks = 0) => {
        try {
            const doc = await Links.create({ redirect_link, short_link, clicks });
            return doc;
        } catch(err) {
            throw new Error(err);
        }
    },

    retrieveLink: async (short_url) => {
        try {
            const doc = await Links.find({ short_url });
            return doc[0];
        } catch(err) {
            throw new Error(err);
        }
    }
}


