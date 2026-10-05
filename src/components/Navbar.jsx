import { Link } from "react-router-dom";

function Navbar({ cart = [] }) {
  const token = false; 

  const total = cart.reduce((acc, item) => acc + (item.price || 0), 0);
  const formatCLP = (value) => value.toLocaleString("es-CL");

  return (
   <nav className="navbar">
  <Link to="/" className="btn btn-outline-light btn-sm">🍕 Inicio</Link>
  <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Ingresar</Link>
  <Link to="/formulario" className="btn btn-outline-light btn-sm">📝 Registro</Link>
  <Link to="/carrito" className="btn btn-outline-light btn-sm">🛒 Total: ${formatCLP(total)}</Link>
</nav>
  );
}

export default Navbar;