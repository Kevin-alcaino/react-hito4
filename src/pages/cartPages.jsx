import { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";


function Cart() {
  
const { cart, sumar, restar, total } = useContext(CartContext);
  
  const formatCLP = (value) => value?.toLocaleString() ?? '0';

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
      </div>
      <Footer />
    </>
  );
}

export default Cart;