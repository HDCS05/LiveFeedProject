import React from "react";

const Nav = () =>
<nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">LiveFeeds</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Contact</a></li>
        <li><a href="#">Georcery stores nearby</a></li>
        <li><a href="#">Sign-In</a></li>
      </ul>
    </div>
  </div>
</nav>;

export default Nav;
