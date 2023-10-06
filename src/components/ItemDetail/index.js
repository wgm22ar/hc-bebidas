import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/index";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Cart from "../Cart";
import { productos } from "../../asyncMock/asyncMock";
import Item from "../Item";

const ItemDetail = ({ productos }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState("");
  const { addItem } = useContext(CartContext);
  const adicion = (cantidad) => {
    setCantidadAgregada(cantidad);
    addItem(Item, cantidad);
  };
  return (
    <div className="d-flex flex-column aling-item-center">
      <h2>{productos.nombre}</h2>
      <img src={productos.img} alt={productos.nombre} />
      <p>Descripcion: {productos.descripcion}</p>
      <p>Categoria: {productos.categoria}</p>
      <p>Precio: ${productos.precio}</p>
      <p>SKU: {productos.id}</p>
      {cantidadAgregada ? (
        <Link to="/cart" className="btn btn-primary">
          {" "}
          Ir al Carrito
        </Link>
      ) : (
        <ItemCount inicial={1} stock={productos.stock} adicion={adicion} />
      )}
    </div>
  );
};

export default ItemDetail;
