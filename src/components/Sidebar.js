import React from 'react';
import "bulma-start/css/main.css";


const Sidebar = (props) => {
return <div>

<section className="main-content columns is-fullheight">
  
  <aside className="column is-2 is-narrow-mobile is-fullheight section">
    <ul className="menu-list">
      <li>
        <a href="/" className="is-active">
          <span className="icon"><i className="fa fa-home"></i></span> Desk
        </a>
      </li>
      <li>
        <a href="/" className="">
          <span className="icon"><i className="fa fa-table"></i></span> Links
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

export default Sidebar
