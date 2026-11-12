import { useEffect, useContext, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePages = () => {
  const {validarUsuario, user, Logout } = useContext(UserContext);

  const validar = useCallback(() => {
    validarUsuario();
  }, [validarUsuario]);

  useEffect(() => {
    validar();
  }, [validar]);

  return (
    <>
      <Header />
      <div className="profile" style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Bienvenido, {user?.email}!</h1>
        <h5>Obten tu 35% de descuento en tu primera compra.</h5>
        <hr />
        {user ? (
          <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
            <p><strong>Email:</strong> {user.email || "usuario@correo.com"}</p>
            <button className="btn btn-danger mt-3" onClick={Logout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <p> ¡Bienvenido, a la pizzería Il Tomaco!, 
            <br/>canjea el 35% de descuento en tu primera compra.</p>
            
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePages;