const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2/share-lgbt');

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
