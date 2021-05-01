const { username, password } = require('../config/mongo.js');
const mongoose = require('mongoose');
const options = { user: username, pass: password };

mongoose.connect('mongodb://18.207.152.137/share-lgbt', options);

const linkSchema = new mongoose.Schema({
	redirect_link: String,
	short_link: String,
	clicks: Number
	// Also want to add traffic sources
});

const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
	links: []
});

const Links = mongoose.model('Links', linkSchema);
const Users = mongoose.model('Users', userSchema);

module.exports = {Links, Users};
