import "./Item.css";
const Item = ({ nombre, id, img, precio, stock }) => {
  return (
    <article className="Card">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className="ItemImg" />
      </picture>
      <div>
        <p className="InfoCard">Precio: ${precio}</p>
        <p className="InfoCard">Stock Disponible: {stock}</p>
      </div>
      <footer className="CardFooter">
        <button className="BotonFooter">Ver Mas </button>
      </footer>
    </article>
  );
};

export default Item;
