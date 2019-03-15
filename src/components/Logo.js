import React, { Component } from "react";
import Log from "../Logo.png";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Logo">
        <img src={Log} alt="Logo" />
      </div>
    );
  }
}

export default Logo;
