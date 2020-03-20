import React, { useState } from 'react';

export default function SignupForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { onSubmit } = props;

  return (
    <form className="form-signup" method="POST" onSubmit={onSubmit}>
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