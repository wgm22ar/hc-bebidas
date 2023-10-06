import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/index";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
const ItemDetail = ({ product }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState("");
  const { addItem } = useContext(CartContext);
  const adicion = (cantidad) => {
    setCantidadAgregada(cantidad);
    addItem(product, cantidad);
  };
  console.log(product);
  return (
    <div className="d-flex flex-column aling-item-center">
      <h2>{product.nombre}</h2>
      <img src={product.img} alt={product.nombre} />
      <p>Descripcion: {product.descripcion}</p>
      <p>Categoria: {product.categoria}</p>
      <p>Precio: ${product.precio}</p>
      <p>SKU: {product.id}</p>
      {cantidadAgregada ? (
        <Link to="/cart" className="btn btn-primary">
          {" "}
          Ir al Carrito
        </Link>
      ) : (
        <ItemCount inicial={1} stock={product.stock} adicion={adicion} />
      )}
    </div>
  );
};

export default ItemDetail;
