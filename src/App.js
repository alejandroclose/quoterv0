import React, { Component } from 'react';

import { Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductsList from './pages/Products-List';
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
          <PrivateRoute path="/products" component={ProductsList} />
          {/* <Route path="/quotes" component={Desk} /> */}
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;
