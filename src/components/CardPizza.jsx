function CardPizza(props) {

  const formatCLP = (value) => value.toLocaleString('es-CL');
 
  
  return (
    <div className="producto">
      <img className="producto-img" src={props.img} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <p>Precio: ${formatCLP(props.price)}</p>
      <button onClick={props.onAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default CardPizza;
