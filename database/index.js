const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/share.lgbt');

const linkSchema = new mongoose.Schema({
    redirect_link: String,
    short_link: String,
    clicks: Number,
    // Also want to add traffic sources
});

const Links = mongoose.model('Links', linkSchema);

module.exports = { Links };
