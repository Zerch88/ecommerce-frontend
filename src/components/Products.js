import React, { Component } from "react";
import Axios from "axios";
import Table from "./Table";
import Form from "./Form";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fecthProducts();
  }

  fecthProducts = () => {
    const url = "http://localhost:3001/weeds/v1/product";
    Axios.get(url)
      .then(product => {
        this.setState({ products: product.data });
      })
      .catch(err => console.log("fallo: ", err));
  };

  subirDatos = newProduct => {
    const url = "http://localhost:3001/weeds/v1/product";

    Axios.post(url, newProduct)
      .then(res => {
        this.fecthProducts();
      })
      .catch(err => console.log("hubo un error: ", err));
  };

  deleteProduct = id => {
    const url = `http://localhost:3001/weeds/v1/product/${id}`;
    Axios.delete(url)
      .then(res => {
        this.fecthProducts();
      })
      .catch(err => console.log("hubo un error: ", err));
  };

  render() {
    return (
      <div className="principalContainer">
        <Form onSubmit={this.subirDatos} />

        {this.state.products && (
          <Table products={this.state.products} onDelete={this.deleteProduct} />
        )}
      </div>
    );
  }
}

export default Products;
