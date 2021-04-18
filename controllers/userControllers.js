const bcrypt = require('bcrypt');
const saltRounds = 10;
const userModels = require('../models/userModels.js');

// Helper functions
const getQueryObj = (str) => {
    if (str.indexOf('@') === -1) {
        return { username: str };
    }

    if (str.indexOf('@') > -1 && str.split('@')[1].indexOf('.') > -1) {
        return { email: str };
    }
}

module.exports = {
    createUser: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            // Hash password
            const hashed_password = await bcrypt.hash(password, saltRounds);
            // Format data
            const userData = { username, email, password: hashed_password };
            // Create user
            await userModels.createUser(userData);
            res.sendStatus(201);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },

    getUser: async (req, res) => {
        try {
            const { searchItem } = req.params;
            const query = getQueryObj(searchItem);
            const data = await userModels.getUser(query);
            res.status(200).send(data);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    },

    validateUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const query = { username };
            // Fetch hashed password
            const user = await userModels.getUser(query);
            if (!user) {
                res.status(200).send({ valid: false, data: false });
                return
            }
            const hashed = user?.password;
            const result = await bcrypt.compare(password, hashed);
            const response = { valid: result, data: user };
            res.status(200).send(response);
        } catch(err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}
