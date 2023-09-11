import CartWidget from "../CartWidget";
import logo from "./asset/logo.png";
const NavBar = () => {
  return (
    <div>
      <header>
        <div className="d-flex align-items-center justify-content-center">
          <img
            src={logo}
            alt="img logo"
            className=" d-flex align-items-center"
          />
          <h1> HC BEBIDAS </h1>
        </div>
        <h3>Tu Tienda de Bebidas Preferida !! </h3>
      </header>
      <nav className="d-flex flex-row justify-content-around m-2 p-2 ">
        <div className="dropdown m-2 p-2">
          <button
            className="btn btn-primary dropdown-toggle btn-lg"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Acerca de Nosotros
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Quienes Somos
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Trabaja con Nosotros
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown m-2 p-2">
          <button
            className="btn btn-secondary dropdown-toggle btn-lg"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Nuestros Productos
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Cervezas
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Bebidas Blancas
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Gaseosas
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Aguas
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown m-2 p-2">
          <button
            className="btn btn-success dropdown-toggle btn-lg"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Contactanos
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Llena el formulario
              </button>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};
export default NavBar;
