import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = (item) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <div className="d-flex justify-content-around aling-items-center">
      <img src={item.img} alt="Imagen producto" width={"150rem"} />
      <p>{item.nombre}</p>
      <p>Precio: ${item.precio}</p>
      <p>Cantidad : {item.cantidad}</p>
      <p>Subtotal : $ {item.cantidad * item.precio}</p>
      <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
        {" "}
        X{" "}
      </button>
    </div>
  );
};

export default CartItem;
