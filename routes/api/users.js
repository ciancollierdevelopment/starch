const express = require('express');
const router = express.Router();

const validateSignup = require('../../validation/signup');
const validateLogin = require('../../validation/login');

// @route POST api/users/signup
// @desc Route for user signup
// @access Public
router.post('/signup', (req, res) => {
  const {errors, isValid} = validateSignup(req.body);

  if (!isValid) {
    res.json(errors);
  } else {
    res.json({hasErrors: false});
  }
});

// @route POST api/users/login
// @desc Route for user login
// @access Public
router.post('/login', (req, res) => {
  const {errors, isValid} = validateLogin(req.body);

  if (!isValid) {
    res.json(errors);
  } else {
    res.json({hasErrors: false});
  }
});

module.exports = router;
