import React, {Component} from 'react';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBook, faQuestionCircle, faSignInAlt, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faStar, faBook, faQuestionCircle, faSignInAlt);

class App extends Component {

    render() {
        return(
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;