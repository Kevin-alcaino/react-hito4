import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardPizza from "../components/CardPizza";
import Footer from "../components/Footer";

import { pizzas } from "../assets/pizzas";

function HomePages({ addToCart }) {
  return (
    <>
      <Header />
      <Hero />
      <div className="cont-producto">
        {pizzas.map((pizza) => (
      <CardPizza
      key= {pizza.id}
      img={pizza.img}
      name={pizza.name}
      description={pizza.description}
      price={pizza.price}
      onAddToCart={() => addToCart(pizza)}
      />
      ))}
      </div>
      <Footer />
    </>
  );
}

export default HomePages;