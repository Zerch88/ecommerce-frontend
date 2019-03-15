import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./components/Products";
import Logo from "./components/Logo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/subir-product" component={Products} />;
          <Route exact path="/home" component={Logo} />;
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
