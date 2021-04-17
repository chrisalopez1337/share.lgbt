const express = require('express');
const app = express();
const PORT = 1337;
const bodyParser = require('body-parser');
const path = require('path');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve react code
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`App listening @ localhost:${PORT}`));