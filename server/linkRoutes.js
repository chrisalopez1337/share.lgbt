const express = require('express');
const linkRouter = express.Router();
const controllers = require('../controllers/linkControllers.js');

linkRouter.post('/create', controllers.createLink);
linkRouter.post('/retrieve', controllers.retrieveLink);
linkRouter.get('/:hash', controllers.redirectAndUpdate);
linkRouter.post('/redirect', controllers.redirectToLink);

module.exports = linkRouter;
