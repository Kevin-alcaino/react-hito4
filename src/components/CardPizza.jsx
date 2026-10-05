function CardPizza({ img, name, description, price, onAddToCart }) {

  const formatCLP = (value) => value.toLocaleString('es-CL');
 
  
  return (
    <div className="producto">
      <img className="producto-img" src={img} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Precio: ${formatCLP(price)}</p>
      <button onClick={onAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default CardPizza;
