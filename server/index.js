const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const linkRouter = require('./linkRoutes.js');
const userRouter = require('./userRoutes.js');
// Redirect controller
const {sendToRedirectPage} = require('../controllers/linkControllers.js');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/api/links', linkRouter);
app.use('/api/users', userRouter);
app.get('/:hash', sendToRedirectPage);


app.listen(PORT, () => console.log(`App running on ${PORT}`));
