import React, { Component } from "react";
import Axios from "axios";
import Table from "./Table";
import Form from "./Form";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selected: {}
    };
  }

  componentDidMount() {
    this.fecthProducts();
  }

  fecthProducts = () => {
    const url = "https://weedcommerce.herokuapp.com/weeds/v1/product";
    Axios.get(url)
      .then(product => {
        this.setState({ products: product.data });
      })
      .catch(err => console.log("fallo: ", err));
  };

  subirDatos = newProduct => {
    const url = "https://weedcommerce.herokuapp.com/weeds/v1/product";

    if (newProduct._id) {
      // actaluzando 2am..
      Axios.put(url + `/${newProduct._id}`, newProduct)
        .then(res => {
          this.fecthProducts();
          this.setState({
            selected: {
              _id: null,
              nombre: "",
              ingredientes: "",
              precio: "",
              cantidad: "",
              tiempo: "",
              imagen: ""
            }
          });
        })
        .catch(err => {
          console.log(`La regaste Ale :(`, err);
        });
    } else {
      Axios.post(url, newProduct)
        .then(res => {
          this.fecthProducts();
        })
        .catch(err => console.log("hubo un error: ", err));
    }
  };

  deleteProduct = id => {
    const url = `https://weedcommerce.herokuapp.com/weeds/v1/product/${id}`;
    Axios.delete(url)
      .then(res => {
        this.fecthProducts();
      })
      .catch(err => console.log("hubo un error: ", err));
  };

  selectProduct = product => {
    console.log("seleccionado: ", product);
    this.setState({
      selected: product
    });
  };

  render() {
    return (
      <div className="principalContainer">
        <Form onSubmit={this.subirDatos} selected={this.state.selected} />

        {this.state.products && (
          <Table
            products={this.state.products}
            onDelete={this.deleteProduct}
            onSelect={this.selectProduct}
          />
        )}
      </div>
    );
  }
}

export default Products;
