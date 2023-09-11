const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="alert alert-primary" role="alert">
      <h2 className="alert-heading">{mensaje}</h2>
      You successfully read this important alert message.
      <a href="#!" className="alert-link">
        It contains a link and heading.
      </a>
    </div>
  );
};
export default ItemListContainer;
