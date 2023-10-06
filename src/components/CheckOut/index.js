import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../../servicios/firebase";
import { CartContext } from "../../Context/CartContext";

const CheckOut = () => {
  const [user, setUser] = useState({});
  const [validarEmail, setValidarEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, addItem, deleteItem, clearCart, total } =
    useContext(CartContext);

  const datosCompra = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (user.name && user.phone) {
      let order = {
        user,
        item: cart,
        // total: total(),
        // date: serverTimestamp,
      };
      const finalizarOrden = collection(db, "ordenes");
      addDoc(finalizarOrden, order)
        .then((res) => {
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => console.log(error));
    } else {
      alert("No se puede dejar campos vacios");
    }
  };

  return (
    <div>
      {orderId !== "" ? (
        <div>
          <h2>
            <i>
              <b>Felicitaciones!! Su orden ha sido generada exitosamente</b>
            </i>
          </h2>
          <h4> El Id de su compra es: {orderId}</h4>
        </div>
      ) : (
        <div>
          <h2>Terminar Compra</h2>
          <h4>Por Favor completar sus datos</h4>
          <br></br>
          <form onSubmit={finalizarCompra}>
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input
                className="form-control"
                onChange={datosCompra}
                type="text"
                placeholder="Nombre y Apellido"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input
                className="form-control"
                onChange={datosCompra}
                type="number"
                placeholder="Telefono"
                name="phone"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                className="form-control"
                onChange={datosCompra}
                type="email"
                placeholder="1323456@mail.com"
                name="mail"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Repetir su E-mail</label>
              <input
                className="form-control"
                type="email"
                placeholder="1323456@mail.com"
                name="mail"
                onChange={(e) => setValidarEmail(e.target.value)}
              />
            </div>
            <button
              className="btn btn-danger"
              type="submit"
              disabled={validarEmail !== user.mail}
            >
              Generar Orden
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
