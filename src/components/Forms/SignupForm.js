import React, { useState } from 'react';
import { config } from '../../config'

const base = config['base'];
const createAccountEndPoint = config['endpoints']['createAccount'];

export default function SignupForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = event => {
    event.preventDefault();
    const { setModal } = props;
    const data = {
      username: username,
      password: password
    }
    fetch(`${base}${createAccountEndPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const { success } = data
        // TODO: Replace
        success ? setModal({
          show: true,
          icon: 'check-circle',
          title: 'Success',
          body: 'Successfully created user account!'
        }) :
          setModal({
            show: true,
            icon: 'exclamation-circle',
            title: 'Failure',
            body: 'Failed to create user account!'
          });
      })
      .catch(error => {
        console.error('Error: ', error);
      })
  }

  return (
    <form className="form-signup" method="POST" onSubmit={createAccount}>
      <img className="mb-4" src="/images/rpm_logo.png" alt="logo" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
      <label htmlFor="input_username">Username</label>
      <input
        type="text"
        id="input_username"
        className="form-control"
        placeholder="Username"
        name="username"
        required
        autoFocus
        value={username}
        onChange={event => setUsername(event.target.value)} />
      <label htmlFor="input_password">Password</label>
      <input
        type="password"
        id="input_password"
        className="form-control"
        placeholder="Password"
        name="password"
        required
        value={password}
        onChange={event => setPassword(event.target.value)} />
      <button
        className="btn btn-lg btn-primary btn-block btn-login"
        type="submit">
        Create an account
      </button>
    </form>
  )
}