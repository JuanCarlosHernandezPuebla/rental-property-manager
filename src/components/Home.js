import React, { Component } from 'react';
import SearchForm from './Forms/SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropertMap from './PropertyMap';

export default class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>Home</h1>
            <div>
              <img className="img-fluid mt-2" src="/images/home-real-estate.jpg" alt="Home real estate" width="700" height="600" />
            </div>
            <div>
              <h2 className="feature-title">Manage your real estate portfolio</h2>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon="building" color="#585f6d" size="3x" className="mr-2 align-middle" />
              <span className="item-text">
                Central view of your current inventory.
              </span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon="receipt" color="#585f6d" size="3x" className="mr-3 align-middle" />
              <span className="item-text">
                Keep track of your real estate expenses.
              </span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon="search" color="#585f6d" size="3x" className="mr-1 align-middle" />
              <span className="item-text">
                Search for new potential properties.
              </span>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="search-form-content">
              <h2>Search Property</h2>
              <SearchForm />
            </div>
            <div className="home-map">
              <PropertMap />
            </div>
          </div>
        </div>
      </div>
    );
  }

}