import React from 'react';
import logo from "../logo_1.png"


const Header = (props) => {
  return <div>    
<nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
    <h1>Quoter</h1>
      <img src={logo} width="30" height="75" alt="quoter logo"/>
    </a>

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

}
export default Header