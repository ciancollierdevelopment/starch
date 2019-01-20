const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require('./routes/api/users');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config').mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port " + port));
