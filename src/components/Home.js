import React, { Component } from 'react';
import SearchForm from './Forms/SearchForm';

class Home extends Component {

  render() {
    return (
      <div className="container main-content">
        <h1>Home</h1>
        <p>Under Construction...</p>
        <div>
          <img className="img-fluid" src="/images/home-real-estate.jpg" alt="Home real estate" width="400" height="400" />
        </div>
        <div>
          <SearchForm />
        </div>
      </div>
    );
  }

}

export default Home;