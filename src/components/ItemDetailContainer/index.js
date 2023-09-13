import "./ItemDetailConteiner.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock/asyncMock";
import ItemDetail from "../ItemDetail/index";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);
  return (
    <div className="ItemDetailConteiner">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailConteiner;
