import React from 'react';
import "bulma-start/css/main.css";
import logo from "../logo_1.png"


const Header = (props) => {
  return <div>    
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
    <h1>Quoter</h1>
      <img src={logo} width="30" height="75"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div class="navbar-end">
      <div class="navbar-item">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown is-right">
          <a class="navbar-item">
            User Profile
          </a>
          <a class="navbar-item">
            Business Profile
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Sign Out
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
</nav>
        </div>

}
export default Header