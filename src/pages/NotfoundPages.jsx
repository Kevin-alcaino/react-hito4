import Header from "../components/Header";
import Footer from "../components/Footer";

function NotfoundPages() {
  return (
    <>
      <Header />
      <div className="notfound">
        <h2>404 - Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
      </div>
      <Footer />
    </>
  );
}

export default NotfoundPages;