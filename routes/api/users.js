const express = require('express');
const router = express.Router();

const validateSignup = require('../../validation/signup');

// @route POST api/users/signup
// @desc Route for user signup
// @access Public
router.post('/signup', (req, res) => {
  const {errors, isValid} = validateSignup(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    res.send("success");
  }
});

// @route POST api/users/login
// @desc Route for user login
// @access Public
router.post('/login', (req, res) => {

});

module.exports = router;
