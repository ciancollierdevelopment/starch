const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateLogin = data => {
  let errors = {};
  
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email) || Validator.isEmpty(data.password)) {
    errors.login = "Please enter all required information.";
    errors.hasErrors = true;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
