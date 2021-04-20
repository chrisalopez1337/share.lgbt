const {Users} = require('../database');

module.exports = {
	createUser: async (userData) => {
		try {
			await Users.create(userData);
			return 'OK';
		} catch (error) {
			throw new Error(error);
		}
	},

	getUser: async (query) => {
		try {
			const user = await Users.find(query);
			return user[0];
		} catch (error) {
			throw new Error(error);
		}
	},

	addLinkToUser: async (query, newArray) => {
		try {
			const data = await Users.findOneAndUpdate(
				query,
				{links: newArray},
				{new: true}
			);
			return data;
		} catch (error) {
			throw new Error(error);
		}
	}
};
