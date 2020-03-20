import React, { Component } from 'react';
import LoginForm from './Forms/LoginForm';
import { Link } from 'react-router-dom';

export default class Login extends Component {

  render() {
    return (
      <div className="container">
        <div className="login-form-content">
          <LoginForm />
          <div className="text-center">
            <Link className="nav-link" to="/create">Create an account</Link>
          </div>
        </div>
      </div>
    );
  }

}
