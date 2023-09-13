import { useState, useEffect } from "react";
import { getProducts, getProductsByCategoria } from "../../asyncMock/asyncMock";
import ItemList from "../ItemList/index";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProduct] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductsByCategoria : getProducts;
    asyncFunc(categoriaId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoriaId]);

  return (
    <div className="ContainerCard">
      <h2 className="ItemCard">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
