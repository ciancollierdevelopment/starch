import React, {Component} from 'react';
import {Form,
        FormGroup,
        Label,
        Input,
        FormText,
        Button} from 'reactstrap';
import ErrorMessage from './ErrorMessage';
const axios = require('axios');

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  constructor(props) {
    super(props);
  }

  submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      console.log(response.data);
      if (response.data.hasErrors) {
        this.setState({
          loginErrors: response.data.login
        });
      }
    })
    .catch(err => console.log(err));
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  }

  render() {
    return (
      <div id="login" className={this.props.isOpen ? "show" : ""}>
        <Form name="login">
          <Input type="text" name="email" placeholder="you@example.ac.uk" onChange={this.changeHandler} value={this.state.email} />
          <Input type="password" name="password" placeholder="password" onChange={this.changeHandler} value={this.state.password} />
          <Button type="submit" color="secondary" onClick={this.submitHandler}>Login</Button>
        </Form>
        <ErrorMessage display={this.state.loginErrors} text={this.state.loginErrors} />
      </div>
    );
  }
}

export default Login;
