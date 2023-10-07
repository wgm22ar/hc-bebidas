import { useContext } from "react";
import IconCart from "./asset/IconCart.png";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link
        to="/cart"
        className="d-flex flex-row justify-content-around aling-items-center m-1 p-1"
      >
        <img src={IconCart} alt="Imagen del Carrito" className="ImgCart" />
        <p>{cantidadEnCarrito()}</p>
      </Link>
    </div>
  );
};
export default CartWidget;
