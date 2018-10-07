import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Features from './components/Features';
import Home from './components/Home';
import Help from './components/Help';
import Login from './components/Login';

class Main extends Component {

    render() {
        return(
            <main>
                <Switch>
                    <Route exact={true} path='/' component={Home}/>
                    <Route exact={true} path='/home' component={Home}/>
                    <Route exact={true} path='/features' component={Features}/>
                    <Route exact={true} path='/help' component={Help}/>                    
                    <Route exact={true} path='/login' component={Login}/>
                </Switch>
            </main>
        );
    }

}

export default Main;