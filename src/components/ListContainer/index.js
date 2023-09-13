import { useState, useEffect } from "react";
import { getProducts, getProductsByCategoria } from "../../asyncMock/asyncMock";
import ItemList from "../ItemList/index";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    asyncFunc = categoriaId ? getProductsByCategoria : getProducts;
    asyncFunc(categoriaId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoriaId]);

  return (
    <div className="alert alert-primary" role="alert">
      <h2 className="alert-heading">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
