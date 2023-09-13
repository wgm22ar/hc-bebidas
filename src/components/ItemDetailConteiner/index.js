import "./ItemDetailConteiner.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock/asyncMock";
import ItemDetail from "../ItemDetail/index";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById("beb01")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <div className="ItemDetailConteiner">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailConteiner;
