import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";

class Nav extends React.Component {
  // define an event
  constructor(props) {

    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this
      .handleClick
      .bind(this);
  }

  handleClick() {
    var rightDrawer = document.getElementById("rightDrawer");

    rightDrawer
      .classList
      .add("open");

  }
  render() {

    return (
      <header id="main-header">
        <div className="container">
          <div id="branding">
            <img src="../img/log.png" alt="The DailiesTech"/>
            <h1 className="title">DailiesTech</h1>
          </div>
          <nav id="main-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add/">Add</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
            <i
              onClick={this.handleClick}
              styles="color: white;"
              className="fa fa-bars"
              aria-hidden="true"
              id="hamburger-btn"></i>
          </nav>
        </div>
      </header>

    )

  }

}
export default Nav;