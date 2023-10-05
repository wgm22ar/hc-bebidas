import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { getProducts, productos } from "./asyncMock/asyncMock";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./servicios/firebase";
function App() {
  useEffect(() => {
    const colectionProducts = collection(db, "productos");
    productos.map((item) => addDoc(colectionProducts, item));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categorias/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={<h1>La Pagina no se encuentra disponible</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
