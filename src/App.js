import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./components/Home";
import Products from "./components/Products";
import Logo from "./components/Logo";

class App extends Component {
  render() {
    return (
      <div>
        <Products />
        {/* 
        // <BrowserRouter>
      //   <Route exact path="/" component={Logo} />
      //   <Route exact path="/subir-product" component={Products} />;
      // </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
