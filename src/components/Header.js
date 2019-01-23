import React, { Component } from "react";
import logo from "../pointer_logo.png";
import { Link } from "react-router-dom";

class Header extends Component {

  handleLogout = () => {
    console.log('logout')
  }
  render() {

    return (
      <div>
        <nav
          className="navbar has-shadow is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item navbar-item-logo" to="/quotes">
              <img className="navbar-logo" src={logo} alt="quoter logo" />
            </Link>

            {/* <div
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div> */}
          </div>

          
        </nav>
      </div>
    );
  }
}
export default Header;
