const { Users } = require('../database');

module.exports = {
    createUser: async (userData) => {
        try {
            await Users.create(userData);
            return 'OK';
        } catch(err) {
            throw new Error(err);
        }
    },

    getUser: async (query) => {
        try {
            const user = await Users.find(query);
            return user[0];
        } catch(err) {
            throw new Error(err);
        }
    }
}
