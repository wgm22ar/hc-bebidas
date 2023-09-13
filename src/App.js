import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailConteiner />} />
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
