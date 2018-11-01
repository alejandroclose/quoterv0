import React, { Component } from 'react';

import { Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Desk from './pages/Desk';
import ProductsList from './pages/Products-List';
import CreateQuote from './pages/Create-Quote';
import EditQuote from './pages/Edit-Quote';
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
          <PrivateRoute path="/products" component={ProductsList} />
          <PrivateRoute path="/quotes/new" component={CreateQuote} />
          <PrivateRoute path="/quotes/:id" component={EditQuote} />
          <PrivateRoute path="/quotes" component={Desk} />
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;
