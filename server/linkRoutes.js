const express = require('express');
const linkRouter = express.Router();
const controllers = require('../controllers/linkControllers.js');

linkRouter.post('/create', controllers.createLink);

module.exports = linkRouter;
