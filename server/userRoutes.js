const express = require('express');
const userRouter = express.Router();
const userControllers = require('../controllers/userControllers.js');

userRouter.post('/create', userControllers.createUser);
userRouter.get('/get/:searchItem', userControllers.getUser);
userRouter.post('/validate', userControllers.validateUser);

module.exports = userRouter;
