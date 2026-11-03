import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";


function Navbar() {
  const { total = 0 } = useContext(CartContext);
  const { token, Logout } = useContext(UserContext);
  const formatCLP = (value) => value.toLocaleString("es-CL");

  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "link-no-activo"}>
        🍕 Inicio
      </NavLink>

      {token ? (
        <>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "text-white" : "link-no-activo       "}>
            🔒 Perfil
          </NavLink>
          <button onClick={Logout} className="btn btn-outline-light btn-sm">
            🔒 Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-white" : "link-no-activo"}>
            🔐 Ingresar
          </NavLink>
          <NavLink to="/formulario" className={({ isActive }) => isActive ? "text-white" : "link-no-activo"}                >
            📝 Registro
              </NavLink>
        </>
      )}

      <NavLink to="/carrito" className={({ isActive }) => isActive ? "text-white" : "link-no-activo"}>
        🛒 Total: ${formatCLP(total)}
      </NavLink>
    </nav>
  );
}

export default Navbar;