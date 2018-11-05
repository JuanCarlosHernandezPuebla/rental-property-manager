import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Create extends Component {

    render(){
        return (
            <div className="container">
                <form className="form-signup" method="POST">
                    <img className="mb-4" src="/images/rpm_logo.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>
                    <label htmlFor="inputUsername">Username</label>
                    <input type="text" id="inputUsername" name="username" className="form-control" placeholder="Username" required autoFocus />
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
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