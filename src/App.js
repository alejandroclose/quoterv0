import React, { Component } from 'react';
import './App.css';
import "bulma-start/css/main.css";
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Footer from '../src/components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Sidebar/>
      <Footer/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
