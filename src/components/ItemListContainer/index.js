import { useState, useEffect } from "react";
import { getProducts, getProductsByCategoria } from "../../asyncMock/asyncMock";
import ItemList from "../ItemList/index";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../servicios/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProduct] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const coleccionProductos = categoriaId
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoriaId)
        )
      : collection(db, "productos");
    getDocs(coleccionProductos)
      .then((res) => {
        const lista = res.docs.map((producto) => {
          return {
            id: producto.id,
            ...producto.data(),
          };
        });
        setProduct(lista);
      })
      .catch((error) => console.log(error));
  }, [categoriaId]);

  return (
    <div className="ContainerCard">
      <h2 className="ItemCard">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
