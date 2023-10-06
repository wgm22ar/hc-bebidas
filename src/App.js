import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, { useEffect } from "react";
import { getProducts, productos } from "./asyncMock/asyncMock";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./servicios/firebase";
import { CartProvider } from "./Context/CartContext";
import Cart from "./components/Cart/index";
import CheckOut from "./components/CheckOut";
function App() {
  //CARGA DINAMICA EN FIREBASE

  // useEffect(() => {
  //   const colectionProducts = collection(db, "productos");
  //   productos.map((item) => addDoc(colectionProducts, item));
  // }, []);

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categorias/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route
              path="*"
              element={<h1>La Pagina no se encuentra disponible</h1>}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
