import React, { Component } from "react";
import Log from "../Logo.png";
import { Link } from "react-router-dom";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="principalContainerLogo">
        <h1>Bienvenidos a eweed!!!</h1>
        <Link className="loginLink" to="/login">
          Ingresa.
        </Link>
        <img className="Logo" src={Log} alt="Logo" />
      </div>
    );
  }
}

export default Logo;
