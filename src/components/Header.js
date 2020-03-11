import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-logo">
                        <a className="navbar-brand navbar-left" href="/home">
                            <img className="img-fluid" src="/images/rpm_logo.png" alt="logo" width="122" height="122"/>
                        </a>
                    </div>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/home'><FontAwesomeIcon icon="home" className="mr-2"/>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/features'><FontAwesomeIcon icon="star" className="mr-2"/>Features</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbar_dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon="book" className="mr-2"/>
                                Resources
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Resource #1</a>
                                <a className="dropdown-item" href="#">Resource #2</a>
                                <div className="dropdown-divider"></div>
                                <Link className="nav-link" to="/create">Create Account</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/help"><FontAwesomeIcon icon="question-circle" className="mr-2"/>Help</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-right">
                        <li className="bold">
                            <Link className="nav-link" to="/login">Log in<FontAwesomeIcon icon="sign-in-alt" className="ml-2"/></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}

export default Header;