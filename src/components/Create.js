import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const createAccountEndPoint = 'http://localhost:3000/users/create';

class Create extends Component {

  createAccount = (event) => {
    event.preventDefault()
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    fetch(createAccountEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const { success } = data
        success ? alert('Successfully created user account!') : alert('Failed to create user account!');
      })
      .catch(error => {
        console.error('Error: ', error);
      })

  }

  render() {
    return (
      <div className="container">
        <form className="form-signup" method="POST" onSubmit={this.createAccount}>
          <img className="mb-4" src="/images/rpm_logo.png" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
          <label htmlFor="input_username">Username</label>
          <input type="text" id="input_username" name="username" className="form-control" placeholder="Username" required autoFocus />
          <label htmlFor="input_password">Password</label>
          <input type="password" id="input_password" name="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block btn-login" type="submit">Create an account</button>
          <div>
            <Link className="nav-link" to="/login">Log Into Existing Account</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;