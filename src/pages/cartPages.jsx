import { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";


function Cart() {
  
const { cart, sumar, restar, total } = useContext(CartContext);
const { token } = useContext(UserContext);
const navigate = useNavigate();
  const formatCLP = (value) => value?.toLocaleString() ?? '0';

  const handlePagar = () => {
    if (!token) {
      navigate("/login");
    }
    else {
      alert("¡Gracias por tu compra! 🍕");
    } 
  };

  return (
    <>
      <Header />
      <div className="carrito">
        <h2>Carrito de Compras</h2>

        {cart?.length === 0 ? (
          <p>Tu carrito está vacío 🛒</p>
        ) : (
          <>
            {cart?.map((pizza) => (
              <div key={pizza.id}>
                <img src={pizza.img} alt={pizza.name} width="250" />
                <div>
                  <h5>{pizza.name}</h5>
                  <p>${formatCLP(pizza.price)}</p>
                </div>

                <div>
                  <button className="btn" onClick={() => restar(pizza.id)}>-</button>
                  
                  <span>{pizza.quantity || 1}</span>
                  <button className="btn" onClick={() => sumar(pizza.id)}>+</button>
                </div>
              </div>
            ))}

            <div>
              <h3>Total: ${formatCLP(total)}</h3>
            </div>
          </>
        )}
        <button 
              className="btn mt-2" 
              style={{ backgroundColor: "#fa6540", color: "white" }}
              onClick={handlePagar}
              >
              {!token ? "Inicia sesión para pagar" : "Pagar"}
            
            </button>
      </div>
      <Footer />
    </>
  );
}

export default Cart;