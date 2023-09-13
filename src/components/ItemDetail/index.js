import ItemCount from "../ItemCount/index";

const ItemDetail = ({
  id,
  nombre,
  img,
  categoria,
  precio,
  descripcion,
  stock,
}) => {
  return (
    <article className="Card">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="InfoCard">Descricion: {descripcion}</p>
        <p className="InfoCard">Categoria: {categoria}</p>
        <p className="InfoCard">Precio: ${precio}</p>
      </section>
      <footer className="CardFooter">
        <ItemCount
          inicial={1}
          stock={stock}
          adicion={(cantidad) =>
            console.log(
              "Se agrego al carrito: ",
              cantidad,
              "Unidades de",
              nombre
            )
          }
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
