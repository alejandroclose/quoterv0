import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import AuthProvider from './components/AuthProvider';

import './App.css';
import "bulma-start/css/main.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Switch>
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <Route path="/" component={Home} />
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;
