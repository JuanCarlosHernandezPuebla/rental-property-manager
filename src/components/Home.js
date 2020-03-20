import React, { Component } from 'react';
import SearchForm from './Forms/SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends Component {

  render() {
    return (
      <div className="container main-content">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage your real estate portfolio</h2>
            <div className="feature-item">

              <FontAwesomeIcon icon="building" size="3x" className="mr-2 align-middle" />
              <span className="item-text">
                Central view of your current inventory.
              </span>
            </div>
            <div className="feature-item">

              <FontAwesomeIcon icon="receipt" size="3x" className="mr-3 align-middle" />
              <span className="item-text">
                Keep track of your real estate expenses.
              </span>
            </div>
            <div className="feature-item">

              <FontAwesomeIcon icon="search" size="3x" className="mr-1 align-middle" />
              <span className="item-text">
                Search for new potential properties.
              </span>
            </div>
          </div>
          <div className="col-sm-6">
            <h1>Home</h1>
            <p>Under Construction...</p>
            <div>
              <img className="img-fluid" src="/images/home-real-estate.jpg" alt="Home real estate" width="400" height="400" />
            </div>
            <div>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    );
  }

}