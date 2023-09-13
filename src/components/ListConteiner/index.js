import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock/asyncMock";
import ItemList from "../ItemList/index";

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="alert alert-primary" role="alert">
      <h2 className="alert-heading">{mensaje}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
