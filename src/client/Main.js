import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Features from './components/Features';
import Home from './components/Home';
import Help from './components/Help';
import Login from './components/Login';
import Create from './components/Create';
import Overview from './components/Overview';

const loggedIn = false;


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
                    <Route exact={true} path='/create' component={Create}/>
                </Switch>
            </main>
        );
    }

}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        loggedIn ?
            <Component {...props} /> :
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}
            />
    )}
    />
);

export default Main;