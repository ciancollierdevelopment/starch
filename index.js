const express = require('express');
// const bodyParser = require('body-parser');
const {body} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(5000);
