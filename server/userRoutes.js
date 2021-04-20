const express = require('express');
const userRouter = express.Router();
const userControllers = require('../controllers/userControllers.js');

userRouter.post('/create', userControllers.createUser);
userRouter.get('/get/:searchItem', userControllers.getUser);
userRouter.post('/validate', userControllers.validateUser);

userRouter.post('/update/add-link', userControllers.addLinkToUser);
userRouter.post('/fetch/user-links', userControllers.fetchUsersLinks);

module.exports = userRouter;
