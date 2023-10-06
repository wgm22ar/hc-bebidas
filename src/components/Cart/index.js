import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";

const Cart = () => {
  const { cart, clear, total } = useContext(CartContext);

  return (
    <div>
      {cart.length ? (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p> Total a Pagar: ${total()}</p>
          <div className="m-2 p-1">
            <button onClick={() => clear()} className="btn btn-primary m-2 p-1">
              Limpiar Carrito
            </button>
            <Link to="/checkout" className="btn btn-secondary m-2 p-1">
              Finalizar Compra
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h3>Tu Carrito esta Vacio</h3>
          <Link to="/" className="btn btn-danger">
            Ir a Comprar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
