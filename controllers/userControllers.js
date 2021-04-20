const bcrypt = require('bcrypt');
const saltRounds = 10;
const userModels = require('../models/userModels.js');

// Helper functions
const getQueryObject = (string) => {
	if (!string.includes('@')) {
		return {username: string};
	}

	if (string.includes('@') && string.split('@')[1].includes('.')) {
		return {email: string};
	}
};

module.exports = {
	createUser: async (request, res) => {
		try {
			const {username, email, password} = request.body;
			// Hash password
			const hashed_password = await bcrypt.hash(password, saltRounds);
			// Format data
			const userData = {username, email, password: hashed_password};
			// Create user
			await userModels.createUser(userData);
			res.sendStatus(201);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	},

	getUser: async (request, res) => {
		try {
			const {searchItem} = request.params;
			const query = getQueryObject(searchItem);
			const data = await userModels.getUser(query);
			res.status(200).send(data);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	},

	validateUser: async (request, res) => {
		try {
			const {username, password} = request.body;
			const query = {username};
			// Fetch hashed password
			const user = await userModels.getUser(query);
			if (!user) {
				res.status(200).send({valid: false, data: false});
				return;
			}

			const hashed = user?.password;
			const result = await bcrypt.compare(password, hashed);
			const response = {valid: result, data: user};
			res.status(200).send(response);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	},

	addLinkToUser: async (request, res) => {
		try {
			const {linkData, userData} = request.body;
			const {links, username} = userData;
			const newArray = links;
			newArray.unshift(linkData);
			const newUserData = await userModels.addLinkToUser({username}, newArray);
			res.status(200).send(newUserData);
		} catch (error) {
			console.log(error);
			res.sendStatus(500);
		}
	}
};
