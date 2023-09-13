import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ inicial, stock, adicion }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const suma = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="Padre">
      <div className="Controles d-flex flex-row">
        <button className="btn btn-primary Boton" onClick={resta}>
          -
        </button>
        <h3 className="Titulo">{cantidad}</h3>
        <button className="btn btn-primary Boton" onClick={suma}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={() => adicion(cantidad)}
          disable={!stock}
        >
          {" "}
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
