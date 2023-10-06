import { createContext, useState } from "react";
import { productos } from "../asyncMock/asyncMock";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isIncart(item.id)) {
      setCart(
        cart.map((productos) => {
          if (productos.id === item.id) {
            return { ...productos, cantidad: productos.cantidad + cantidad };
          } else {
            return productos;
          }
        })
      );
      console.log("El articulo ya se encuentra en el carrito de compras");
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isIncart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const cantidadEnCarrito = () => {
    return cart.reduce((acumulador, item) => acumulador + item.cantidad, 0);
  };

  const total = () => {
    return cart.reduce(
      (acumulador, item) => acumulador + item.cantidad * item.precio,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        isIncart,
        deleteItem,
        cantidadEnCarrito,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
