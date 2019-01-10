import React, {Component} from 'react';
import {Form,
        FormGroup,
        Label,
        Input,
        FormText,
        Button} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="login" className={this.props.isOpen ? "show" : ""}>
        <Form name="login">
          <Input type="text" name="email" placeholder="you@example.ac.uk" />
          <Input type="password" name="password" placeholder="password" />
          <Button type="submit" color="secondary">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
