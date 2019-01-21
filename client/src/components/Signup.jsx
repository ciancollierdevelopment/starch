import React, {Component} from 'react';
import {Form, Input, Button, Label} from 'reactstrap';
import Switcher from './Switcher';
import ErrorMessage from './ErrorMessage';
const axios = require('axios');

class Signup extends Component {
  state = {
    managerOrGroupMember: 1,
    firstname: '',
    surname: '',
    email: '',
    password: '',
    confirmpassword: '',
    labcode: ''
  }

  toggleSwitcher = (optionClicked) => {
    if (optionClicked == 1) {
      this.setState({labgroupcode_errors: ''});
    }

    this.setState({managerOrGroupMember: optionClicked});
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();

    let isLabManager = (this.state.managerOrGroupMember == 1) ? true : false;

    axios.post('/api/users/signup', {
      firstname: this.state.firstname,
      lastname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
      labgroupcode: this.state.labcode,
      labmanager: isLabManager
    })
    .then (response => {
      if (response.data.hasErrors) {
        let {name, email, password, confirmpassword, labgroupcode} = response.data;

        this.setState({
          name_errors: name,
          email_errors: email,
          password_errors: password,
          confirmpassword_errors: confirmpassword,
          labgroupcode_errors: labgroupcode
        });
      } else {
        alert("No Errors");
      }
    })
    .catch (err => console.log(err));
  }

  render() {
    let hidden = (this.state.managerOrGroupMember === 1) ? "hidden-labcode" : "";

    return (
      <div className="signup-form-container">
        I am a:
        <Switcher firstoption="Lab Manager" secondoption="Group Member" selected={this.state.managerOrGroupMember} clickHandler={this.toggleSwitcher} />
        <Form name="signup">
          <div className="row">
            <div className="col-md-6">
              <Label for="firstname">First Name:</Label>
              <Input type="text" name="firstname" placeholder="First Name" onChange={this.changeHandler} value={this.state.firstname} />
            </div>
            <div className="col-md-6">
              <Label for="surname">Last Name:</Label>
              <Input type="text" name="surname" placeholder="Last Name" onChange={this.changeHandler} value={this.state.surname} />
            </div>
          </div>
          <ErrorMessage display={this.state.name_errors ? true : false} text={this.state.name_errors} />
          <div className="row">
            <div className="col-md-12">
              <Label for="email">Email:</Label>
              <Input type="text" name="email" placeholder="Email" onChange={this.changeHandler} value={this.state.email} />
              <ErrorMessage display={this.state.email_errors ? true : false} text={this.state.email_errors} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label for="password">Password:</Label>
              <Input type="password" name="password" placeholder="Password" onChange={this.changeHandler} value={this.state.password} />
              <ErrorMessage display={this.state.password_errors ? true : false} text={this.state.password_errors} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label for="confirmpassword">Confirm Password:</Label>
              <Input type="password" name="confirmpassword" placeholder="Password" onChange={this.changeHandler} value={this.state.confirmpassword} />
              <ErrorMessage display={this.state.confirmpassword_errors ? true : false} text={this.state.confirmpassword_errors} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label className={hidden} for="labcode">Lab Group Code:</Label>
              <Input className={hidden} type="text" name="labcode" placeholder="345a213" onChange={this.changeHandler} value={this.state.labcode} />
              <ErrorMessage display={this.state.labgroupcode_errors ? true : false} text={this.state.labgroupcode_errors} />
            </div>
          </div>
          <p>By signing up for Starch you agree to the <a href="#">Terms and Conditions</a> and
          the <a href="#">Privacy Policy</a>.</p>
          <Button color="danger" type="submit" onClick={this.submitHandler}>Signup Now</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
