const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateSignup = data => {
  let errors = {};
  errors.hasErrors = false;

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmpassword = !isEmpty(data.confirmpassword) ? data.confirmpassword : "";

  if(Validator.isEmpty(data.firstname) || Validator.isEmpty(data.lastname)) {
    errors.name = "Please enter your name.";
    errors.hasErrors = true;
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email.";
    errors.hasErrors = true;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter a password.";
    errors.hasErrors = true;
  }

  if (Validator.isEmpty(data.confirmpassword)) {
    errors.confirmpassword = "Please confirm your password.";
    errors.hasErrors = true;
  }

  if (!data.labmanager) {
    data.labgroupcode = !isEmpty(data.labgroupcode) ? data.labgroupcode : "";

    if (Validator.isEmpty(data.labgroupcode)) {
      errors.labgroupcode = "Please enter your lab group's code. You can get this from your lab manager.";
      errors.hasErrors = true;
    }
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "This email address is invalid.";
    errors.hasErrors = true;
  }

  if (!Validator.equals(data.password, data.confirmpassword)) {
    errors.confirmpassword = "These passwords don't match. Please try again.";
    errors.hasErrors = true;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
