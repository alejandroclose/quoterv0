import React, { Component } from "react";
import logo from "../logo_1.png";
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
            <Link className="navbar-item" to="/quotes">
              <h1>Quoter</h1>
              <img src={logo} width="30" height="75" alt="quoter logo" />
            </Link>

            <div
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <a href="/quotes" className="navbar-item">
              Quotes
            </a>
            <a href="/products" className="navbar-item">
              Products
            </a>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">

                  </div>

                  <div className="navbar-dropdown is-right">
                    <div className="navbar-item">User Profile</div>
                    <div className="navbar-item">Business Profile</div>
                    <hr className="navbar-divider" />
                    <div className="navbar-item">Logout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
