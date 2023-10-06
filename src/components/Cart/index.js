import { useContext } from "react";
import { CartContext } from "../CartContext";
import Item from "../Item/index";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, cantidadTotal, total } = useContext(CartContext);
  return (
    <div>
      {cart.length ? (
        <div>
          {cart.map((ItemCount) => (
            <ItemCount key={Item.id} item={Item} />
          ))}
          <p> Total a Pagar: ${total()}</p>
          <div>
            <button onClick={() => clearCart()} className="btn btn-primary">
              Limpiar Carrito
            </button>
            <Link to="/checkout" className="btn btn-success">
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
