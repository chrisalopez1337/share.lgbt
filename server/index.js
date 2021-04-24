const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const linkRouter = require('./linkRoutes.js');
const userRouter = require('./userRoutes.js');
const fs = require('fs');
const https = require('https');

// HTTPS
const key = fs.readFileSync(__dirname + '../selfsigned.key');
const cert = fs.readFileSync(__dirname + '../selfsigned.crt');
const options = { key, cert };
const server = https.createServer(options, app);
// Redirect controller
const {sendToRedirectPage} = require('../controllers/linkControllers.js');
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use('/', express.static(path.join(__dirname, '../client/dist')));

server.use('/api/links', linkRouter);
server.use('/api/users', userRouter);
server.get('/:hash', sendToRedirectPage);


server.listen(PORT, () => console.log(`App running on ${PORT}`));
