import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardPizza from "../components/CardPizza";
import Footer from "../components/Footer";



function HomePages({ addToCart }) {
  return (
    <div>
      <Header />
      <Hero />      
      <CardPizza onAddToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default HomePages;