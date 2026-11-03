import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PizzaPages() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };
    fetchPizza();
  }, [id]);

  if (!pizza) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <>
      <Header />
      <div className="container mt-5" style={{ minHeight: "60vh" }}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={pizza.img} alt={pizza.name} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h2>{pizza.name}</h2>
            <p className="text-muted">{pizza.desc}</p>
            <h4>Ingredientes:</h4>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
            <h3 className="mt-3">Precio: ${pizza.price}</h3>
            <button className="btn btn-outline-dark mt-2">Añadir 🛒</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PizzaPages;