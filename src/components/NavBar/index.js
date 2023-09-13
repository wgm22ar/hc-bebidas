import CartWidget from "../CartWidget/index";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className=" NavBar ">
      <Link to="/">
        <h3>Tu Tienda de Bebidas Preferida !! </h3>
      </Link>
      <div className="Categorias">
        <NavLink
          to={`/categorias/cervezas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          {" "}
          Cervezas
        </NavLink>
        <NavLink
          to={`/categorias/gaseosas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          {" "}
          Gaseosas
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
