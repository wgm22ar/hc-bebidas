import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/index";
import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import Cart from "../Cart";

const ItemDetail = ({
  id,
  nombre,
  img,
  categoria,
  precio,
  descripcion,
  stock,
}) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(false);
  const { addItem } = useContext(CartContext);
  const adicion = (cantidad) => {
    setCantidadAgregada(true);
    const item = {
      id,
      nombre,
      precio,
    };
    addItem(item, cantidad);
    console.log(`Compraste ${cantidad} de ${nombre}`);
  };
  return (
    <article className="Card">
      {/* <header className="Header"> */}
      <h2 className="ItemHeader">{nombre}</h2>
      {/* </header> */}
      {/* <picture> */}
      <img src={img} alt={nombre} className="ItemImg" />
      {/* </picture> */}
      {/* <section> */}
      <p className="InfoCard">Descripcion: {descripcion}</p>
      <p className="InfoCard">Categoria: {categoria}</p>
      <p className="InfoCard">Precio: ${precio}</p>
      <p className="InfoCard">SKU: {id}</p>
      {/* </section> */}
      {/* <footer className="CardFooter"> */}
      {cantidadAgregada ? (
        <ItemCount inicial={1} stock={stock} adicion={adicion} />
      ) : (
        <Link to="/cart" className="btn btn-primary">
          {" "}
          Ir al Carrito
        </Link>
      )}
      {/* </footer> */}
    </article>
  );
};

export default ItemDetail;
