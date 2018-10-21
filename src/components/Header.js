import React from 'react';
import logo from '../logo.svg';

const Header = (props) => {
  return <div>
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{props.children}</h1>
        </header>
        </div>

}
export default Header