import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="ltr">Experience</li>
          <li className="ltr">Skills</li>
          <li className="ltr">Projects</li>
          <li className="ltr">About</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
