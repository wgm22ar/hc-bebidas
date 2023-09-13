import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ nombre, id, img, precio, stock }) => {
  return (
    <div className="ContainerCard">
      <article className="Card">
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <picture>
          <img src={img} alt={nombre} className="ItemImg" />
        </picture>
        <section>
          <p className="InfoCard">SKU: {id}</p>
          <p className="InfoCard">Precio: ${precio}</p>
          <p className="InfoCard">Stock Disponible: {stock}</p>
        </section>
        <footer className="CardFooter">
          <Link to={`/item/${id}`} className="Option">
            Ver Mas{" "}
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default Item;
