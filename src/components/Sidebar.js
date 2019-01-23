import React, {Component} from 'react';
import "bulma-start/css/main.css";
import { Link } from "react-router-dom";


class Sidebar extends Component {
  state = {
    url: window.location.href
  }

  
render(){
  
return <div>

<section className="main-content columns is-fullheight box">
  
  <aside className="is-fullheight section sidebar">
    <ul className="menu-list">
      <li>
        <Link to="/quotes" className="sb-home">
          <span className="icon"><i className="fa fa-money-check"></i></span> Quotes
        </Link>
        <ul>
            <li>All</li>
            <li>Customers</li>
        </ul>
      </li>
      <li>
        <Link to="/products">
          <span className="icon"><i className="fa fa-industry"></i></span>Products
        </Link>
      </li>
      <li>
        <Link to="/services" className="">
          <span className="icon"><i className="fa fa-briefcase"></i></span>Services
        </Link>
      </li>
    </ul>
  </aside>
  
</section>
</div>
}
}

export default Sidebar
