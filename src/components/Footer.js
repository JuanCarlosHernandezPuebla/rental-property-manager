import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <footer>
                <div className="container text-center">

                    <div className="row text-center">

                        <div className="col-md-3">
                            <h3>Features</h3>
                            <p>A paragraph</p>
                        </div>

                        <div className="col-md-3">
                            <h3>Resources</h3>
                        </div>

                        <div className="col-md-3">
                            <h3>Create Account</h3>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
    
}

export default Footer;