import IconCart from "./asset/IconCart.png";
import "./cart.css";
const CartWidget = () => {
  return (
    <div className="conteinerCart">
      <img src={IconCart} alt="Imagen del Carrito" className="ImgCart" /> 0
    </div>
  );
};
export default CartWidget;
