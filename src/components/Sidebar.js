import React, {Component} from 'react';
import "bulma-start/css/main.css";


class Sidebar extends Component {
  state = {
    url: window.location.href
  }

  
render(){
  
return <div>

<section className="main-content columns is-fullheight">
  
  <aside className="column is-2 is-narrow-mobile is-fullheight section">
    <ul className="menu-list">
      <li>
        <a href="/" className="sb-home">
          <span className="icon"><i className="fa fa-home"></i></span> Quotes
        </a>
      </li>
      <li>
        <a href="/products" className="is-active">
          <span className="icon"><i className="fa fa-table"></i></span> <p>Products</p>
        </a>

        <ul>
          <li>
            <a href="/">
              <span className="icon is-small"><i className="fa fa-link"></i></span> Link1
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon is-small"><i className="fa fa-link"></i></span> Link2
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/" className="">
          <span className="icon"><i className="fa fa-info"></i></span> About
        </a>
      </li>
    </ul>
  </aside>
  
</section>
</div>
}
}

export default Sidebar
