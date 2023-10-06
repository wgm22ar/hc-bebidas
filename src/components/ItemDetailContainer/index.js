import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock/asyncMock";
import ItemDetail from "../ItemDetail/index";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../servicios/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { itemId } = useParams();

  useEffect(() => {
    const collectionProduct = collection(db, "productos");
    const referenciaDoc = doc(collectionProduct, itemId);
    getDoc(referenciaDoc)
      .then((res) => setProduct({ id: res.id, ...res.data() }))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="ItemDetailContainer">
      <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer;
