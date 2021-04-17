const express = require('express');
const linkRouter = express.Router();
const controllers = require('../controllers/linkControllers.js');

linkRouter.get('/test', (req, res) => res.sendStatus(200));

module.exports = linkRouter;
