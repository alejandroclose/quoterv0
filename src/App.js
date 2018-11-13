import React, { Component } from 'react';

import { Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductsList from './pages/Products-List';
import CreateProduct from './pages/Create-Product'
import Quotes from './pages/Quotes';
import CreateQuote from './pages/Create-Quote';
import EditQuote from './pages/Edit-Quote';
import PublicQuote from './pages/Public-Quote'
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
          <PrivateRoute path="/products/new" component={CreateProduct} />
          <PrivateRoute path="/products" component={ProductsList} />
          <PrivateRoute path="/quotes/new" component={CreateQuote} />
          <PrivateRoute path="/quotes/:id" component={EditQuote} />
          <PrivateRoute path="/quotes" component={Quotes} />
          <AnonRoute path="/quote/:id" component={PublicQuote} />
        </Switch>
      </AuthProvider>
    );
  }
}

export default App;
