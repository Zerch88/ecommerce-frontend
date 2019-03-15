import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      ingredientes: "",
      precio: 0,
      cantidad: 0,
      tiempo: 0,
      imagen: ""
    };
  }

  onInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div className="formGroup">
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            type="text"
            onChange={this.onInputChange}
            className="form-control"
            id="nombre"
            placeholder="Ingresa el nombre de tu producto"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="ingredientes">Ingredientes</label>
          <input
            type="text"
            onChange={this.onInputChange}
            className="form-control"
            id="ingredientes"
            placeholder="Indica los ingredientes principales"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="precio">Precio</label>
          <input
            type="text"
            onChange={this.onInputChange}
            className="form-control"
            id="precio"
            placeholder="Indica el precio de tu producto"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="cantidad">Cantidad del producto</label>
          <input
            type="number"
            onChange={this.onInputChange}
            className="form-control"
            id="cantidad"
            placeholder="Indica la cantidad"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="tiempo">Tiempo de entrega</label>
          <input
            type="number"
            onChange={this.onInputChange}
            className="form-control"
            id="tiempo"
            placeholder="Indica cual es tiempo de minimo entrega."
          />
        </div>
        <div className="formGroup">
          <label htmlFor="imagen">Selecciona la imagen de tu producto</label>
          <input
            type="file"
            onChange={this.onInputChange}
            className="form-control-file"
            id="imagen"
          />
        </div>
        <button type="submit" className="btnDefault">
          Subir producto
        </button>
      </form>
    );
  }
}

export default Form;
