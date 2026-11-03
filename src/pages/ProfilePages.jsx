import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePages = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <Header />
      <div className="container mt-5 text-center" style={{ minHeight: "60vh" }}>
        <h1>Perfil de Usuario</h1>
        <hr />
        {user ? (
          <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
            <p><strong>Email:</strong> {user.email || "usuario@correo.com"}</p>
            <button className="btn btn-danger mt-3" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <p>No hay ningún usuario conectado actualmente.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePages;