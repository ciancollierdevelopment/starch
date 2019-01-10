import React, { Component } from 'react';
import './css/landing.css';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

class App extends Component {
  state = {
    loginOpen: false
  }

  loginOpenHandler = () => {
    this.setState({
      loginOpen: !this.state.loginOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar loginOpenHandler={this.loginOpenHandler} />
        <div className="row">
        <div className="container col-sm-12">
          <div className="about">

          </div>
          <div className="signup">
            <Login isOpen={this.state.loginOpen} />
            <Signup />
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
