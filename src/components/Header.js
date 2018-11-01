import React, { Component } from 'react';
import logo from "../logo_1.png"
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div>
        <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
    <h1>Quoter</h1>
      <img src={logo} width="30" height="75" alt="quoter logo"/>
    </Link>

    <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">

    <div className="navbar-end">
      <div className="navbar-item">
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link">
          More
        </div>

        <div className="navbar-dropdown is-right">
          <div className="navbar-item">
            User Profile
          </div>
          <div className="navbar-item">
            Business Profile
          </div>
          <hr className="navbar-divider"/>
          <div className="navbar-item">
            Sign Out
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</nav>

        </div>
    )
  }
}

// const Header = (props) => {
//   console.log(props);
//   return <div>    
//         </div>

// }
export default Header