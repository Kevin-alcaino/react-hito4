import { useState, useEffect } from 'react';

function CardPizza(props) {
  const formatCLP = (value) => (value ? value.toLocaleString('es-CL') : '0');
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas');
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    getPizzas();
  }, []);

  return (
    <div className="container my-4">
      <div className="row g-4">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-4">
              <div className="card h-100 shadow-sm text-center">
                <img
                  className="card-img-top"
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=Pizza";
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-capitalize fs-4">{pizza.name}</h5>
                    <hr />
                    <p className="card-text text-muted small">{pizza.desc}</p>
                    <p className="card-text">
                      <strong>🍕 Ingredientes:</strong>
                    </p>
                    <p className="text-secondary small">
                      {Array.isArray(pizza.ingredients)
                        ? pizza.ingredients.join(', ')
                        : pizza.ingredients}
                    </p>
                  </div>
                  <div>
                    <hr />
                    <h4 className="fw-bold my-3">
                      Precio: ${formatCLP(pizza.price)}
                    </h4>
                    <button
                      className="btn-orange w-100 fw-bold"
                      onClick={() => props.onAddToCart && props.onAddToCart(pizza)}
                    >
                      Añadir 🛒
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center my-5">
            <p className="fs-5">Cargando o no hay pizzas disponibles...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardPizza;