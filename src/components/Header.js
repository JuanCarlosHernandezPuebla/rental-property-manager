import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-logo">
                        <a className="navbar-brand navbar-left" href="/home">
                            <img className="img-fluid" src="/images/rpm_logo.png" width="25%" alt="logo" />
                        </a>
                    </div>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/features'>Features</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Resources
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Resource #1</a>
                                <a className="dropdown-item" href="#">Resource #2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Sign Up</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/help">Help</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-right">
                        <li className="bold">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}

export default Header;