import CartWidget from "../CartWidget/index";
import { NavLink, Link } from "react-router-dom";
import logo from "./asset/logo.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className=" NavBar d-flex flex-row align-items-center justify-content-around">
      <Link to="/">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img
            src={logo}
            alt="img logo"
            className=" align-items-center justify-content-center"
          />
          <h1> HC BEBIDAS </h1>
        </div>
      </Link>
      <div className="d-flex flex-column">
        <h2>Tu Tienda de Bebidas Preferida !! </h2>
        <div className="d-flex flex-row align-items-center justify-content-around btn btn-danger m-2 categorias">
          <NavLink
            to={`/categorias/cervezas`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            {" "}
            Cervezas
          </NavLink>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-around btn btn-danger m-2 categorias">
          <NavLink
            to={`/categorias/gaseosas`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            {" "}
            Gaseosas
          </NavLink>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
