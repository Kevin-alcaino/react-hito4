import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function Navbar() {


  const { total = 0 } = useContext(CartContext);
  const formatCLP = (value) => value.toLocaleString("es-CL")

  return (
   <nav className="navbar">
  <NavLink to="/" className="btn btn-outline-light btn-sm">🍕 Inicio</NavLink>
  <NavLink to="/login" className="btn btn-outline-light btn-sm">🔐 Ingresar</NavLink>
  <NavLink to="/formulario" className="btn btn-outline-light btn-sm">📝 Registro</NavLink>
  <NavLink to="/carrito" className="btn btn-outline-light btn-sm">🛒 Total: ${formatCLP(total)}</NavLink>
</nav>
  );
}

export default Navbar;