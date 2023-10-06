import { useContext } from "react";
import IconCart from "./asset/IconCart.png";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-around aling-items-center">
      <Link to="/cart">
        <img src={IconCart} alt="Imagen del Carrito" className="ImgCart" />
        {cantidadEnCarrito}
      </Link>
    </div>
  );
};
export default CartWidget;
