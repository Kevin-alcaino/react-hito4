import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart({ cart = [], setCart }) {
  

  // Incrementar la cantidad de una pizza
  const sumar = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, count: (item.count || 1) + 1 } : item));
  };

  // Quitar la cantidad de una pizza, quitar si llega a 0
  const restar = (id) => {
    setCart(
      cart
        .map(item => item.id === id ? { ...item, count: (item.count || 1) - 1 } : item));
  };

  // Total de la compra
  const total = cart.reduce((acc, item) => acc + (item.price * (item.count || 1)), 0);
  const formatCLP = (val) => val.toLocaleString("es-CL");

  return (
    <>
      <Header />
      <div className="carrito">
        <h2>Carrito de Compras</h2>

        {cart.map((pizza) => (
          <div key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} width="250" />
            <div>
              <h5>{pizza.name}</h5>
              <p>${formatCLP(pizza.price)}</p>
            </div>

            <div>
              <button className= "btn" onClick={() => restar(pizza.id)}>-</button>
              <span>{pizza.count || 1}</span>
              <button className= "btn" onClick={() => sumar(pizza.id)}>+</button>
            </div>
          </div>
        ))}

        <div>
          <h3>Total: ${formatCLP(total)}</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;