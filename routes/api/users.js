const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

const validateSignup = require('../../validation/signup');
const validateLogin = require('../../validation/login');

const generateLabGroupCode = () => {
  const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let code = '';

  for (let i = 0; i < 7; i++) {
    code = code + ALPHABET[Math.floor(Math.random() * Math.floor(25))];
  }

  return code;
}

// @route POST api/users/signup
// @desc Route for user signup
// @access Public
router.post('/signup', (req, res) => {
  const {errors, isValid} = validateSignup(req.body);

  if (!isValid) {
    res.json(errors);
  } else {
     User.findOne({email: req.body.email})
      .exec((err, result) => {
        console.log(result);
        if (!result) {
        let new_user = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email
        });

        if (req.body.labmanager) {
          new_user.labGroup = generateLabGroupCode();
        } else {
          new_user.labGroup = req.body.labgroupcode;
          new_user.isManager = false;
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            new_user.password = hash;

            new_user.save()
              .then(user => res.json({hasErrors: false, message: "Success It Works"}))
              .catch(err => console.log(err));
          });
      });
    } else {
      errors.email = "This email is already in use.";
      errors.hasErrors = true;
      res.json(errors);
    }
  });
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
