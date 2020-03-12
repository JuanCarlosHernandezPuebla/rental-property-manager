import * as React from 'react';
import { Link } from 'react-router-dom';

const loginEndPoint = 'http://localhost:3000/users/login';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  login = (event) => {
    event.preventDefault();
    const { username, password } = this.state
    const data = {
      username,
      password
    }
    fetch(loginEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const { success } = data;
        success ? alert('Successfully authenticated user!') : alert('Failed to authenticate user!');
      })
      .catch(error => {
        console.error('Error: ', error)
      })
  }

  render() {
    const { username, password } = this.state

    return (
      <div className="container">
        <form className="form-login" method="POST" onSubmit={this.login}>
          <img className="mb-4" src="/images/rpm_logo.png" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>
          <label htmlFor="input_username" className="sr-only">Username</label>
          <input
            type="text"
            id="input_username"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
            value={username}
            onChange={event => this.setState({ username: event.target.value })} />
          <label htmlFor="input_password" className="sr-only">Password</label>
          <input
            type="password"
            id="input_password"
            className="form-control"
            placeholder="Password"
            required
            value={password}
            onChange={event => { this.setState({ password: event.target.value })}} />
          <button className="btn btn-lg btn-primary btn-block btn-login" type="submit">Log in</button>
          <div>
            <Link className="nav-link" to="/create">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }

}