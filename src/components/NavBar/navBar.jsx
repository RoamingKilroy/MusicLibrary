import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand">
            <h1>Music Library<span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;