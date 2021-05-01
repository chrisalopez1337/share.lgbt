const { Client, Environment } = require('square');
const token = require('../config/square.js');

function getClient() {
    return new Client({ environment: Environment.Sandbox, accessToken: token });
}ZZ

module.exports = {
    makePayment: async (req, res) => {
        try {

        } catch(err) {

        }
    }
}
