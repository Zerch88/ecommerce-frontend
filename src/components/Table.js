import React, { Component } from "react";
import Icon1 from "../Icon1.png";
import Icon2 from "../Icon2.png";
import Delete from "../Delete.png";
import Edit from "../Edit.png";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre del producto</th>
            <th scope="col">Ingredientes</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad del producto</th>
            <th scope="col">Tiempo de entrega</th>
            {/* <th scope="col">Imagen</th> */}
            <th scope="col">
              <img src={Icon1} width="40" alt="eliminar" />
            </th>
            <th scope="col">
              <img src={Icon2} width="40" alt="actualizar" />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.nombre}</td>
              <td>{product.ingredientes}</td>
              <td>{product.precio}</td>
              <td>{product.cantidad}</td>
              <td>{product.tiempo}</td>
              {/* <td>{product.imagen}</td> */}
              <td
                onClick={() => {
                  this.props.onDelete(product._id);
                }}
              >
                <img src={Delete} width="40" alt="actualizar" />
              </td>
              <td>
                <img src={Edit} width="40" alt="actualizar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
