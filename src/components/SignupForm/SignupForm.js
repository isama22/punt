import React, { Component } from 'react';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
      </div>
    );
  }
}

export default SignupForm;
