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
const http = require('http');
const secure = require('express-force-https');

// Redirect controller
const {sendToRedirectPage} = require('../controllers/linkControllers.js');
app.use(secure);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api/links', linkRouter);
app.use('/api/users', userRouter);
app.get('/:hash', sendToRedirectPage);

// HTTPS + HTTP
const key = fs.readFileSync(__dirname + '/selfsigned.key');
const cert = fs.readFileSync(__dirname + '/selfsigned.crt');
const options = { key, cert };
const HttpsServer = https.createServer(options, app);
const HttpServer = http.createServer(app);

HttpServer.listen(PORT, () => console.log(`HTTP SERVER RUNNING ON ${PORT}`));
HttpsServer.listen(PORT + 1, () => console.log(`HTTPS SERVER RUNNING ON ${PORT + 1}`));
