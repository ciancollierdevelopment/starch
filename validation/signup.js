const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateSignup = data => {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmpassword = !isEmpty(data.confirmpassword) ? data.confirmpassword : "";

  if(Validator.isEmpty(data.firstname) || Validator.isEmpty(data.lastname)) {
    errors.name = "Please enter your name.";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email.";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter a password.";
  }

  if (Validator.isEmpty(data.confirmpassword)) {
    errors.confirmpassword = "Please confirm your password.";
  }

  if (data.labmanager == "false") {
    data.labgroupcode = !isEmpty(data.labgroupcode) ? data.labgroupcode : "";

    if (Validator.isEmpty(data.labgroupcode)) {
      errors.labgroupcode = "Please enter your lab group's code. You can get this from your lab manager.";
    }
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "This email address is invalid.";
  }

  if (!Validator.equals(data.password, data.confirmpassword)) {
    errors.confirmpassword = "These passwords don't match. Please try again.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
