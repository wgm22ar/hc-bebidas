import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/index";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import "../Item/Item.css";
const ItemDetail = ({ product }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState("");
  const { addItem } = useContext(CartContext);
  const adicion = (cantidad) => {
    setCantidadAgregada(cantidad);
    addItem(product, cantidad);
  };
  console.log(product);
  return (
    <div className="d-flex flex-column aling-item-center justify-content-center">
      <h2>{product.nombre}</h2>
      <img src={product.img} alt={product.nombre} className="ItemImg" />
      <p className="Infocard">Descripcion: {product.descripcion}</p>
      <p className="Infocard">Categoria: {product.categoria}</p>
      <p className="Infocard">Precio: ${product.precio}</p>
      <p className="Infocard">SKU: {product.id}</p>
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
