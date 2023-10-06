import { useContext } from "react";
import IconCart from "./asset/IconCart.png";
// import "./cart.css";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  return (
    <Link to="/cart" className="conteinerCart">
      <img src={IconCart} alt="Imagen del Carrito" className="ImgCart" />{" "}
      {cantidadTotal}
    </Link>
  );
};
export default CartWidget;
