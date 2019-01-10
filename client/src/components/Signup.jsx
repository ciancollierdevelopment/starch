import React, {Component} from 'react';
import {Form, Input, Button, Label} from 'reactstrap';
import Switcher from './Switcher';

class Signup extends Component {
  state = {
    managerOrGroupMember: 1
  }

  toggleSwitcher = (optionClicked) => {
    this.setState({managerOrGroupMember: optionClicked});
  }

  render() {
    let hidden = (this.state.managerOrGroupMember === 2) ? "hidden-labcode" : "";

    return (
      <div className="signup-form-container">
        I am a:
        <Switcher firstoption="Lab Manager" secondoption="Group Member" selected={this.state.managerOrGroupMember} clickHandler={this.toggleSwitcher} />
        <Form name="signup">
          <div className="row">
            <div className="col-md-6">
              <Label for="firstname">First Name:</Label>
              <Input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="col-md-6">
              <Label for="surname">Last Name:</Label>
              <Input type="text" name="surname" placeholder="Last Name" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label for="email">Email:</Label>
              <Input type="text" name="email" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label for="password">Password:</Label>
              <Input type="password" name="password" placeholder="password" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label for="confirmpassword">Confirm Password:</Label>
              <Input type="password" name="confirmpassword" placeholder="password" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Label className={hidden} for="labcode">Lab Group Code:</Label>
              <Input className={hidden} type="text" name="labcode" placeholder="345a213" />
            </div>
          </div>
          <p>By signing up for Starch you agree to the <a href="#">Terms and Conditions</a> and
          the <a href="#">Privacy Policy</a>.</p>
          <Button color="danger" type="submit">Signup Now</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
