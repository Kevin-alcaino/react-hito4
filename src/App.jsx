import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePages from './pages/HomePages';
import FormularioPages from './pages/FormularioPages';
import LoginPages from "./pages/LoginPages";
import Cart from "./pages/cartPages";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<HomePages addToCart={addToCart} />} />
        <Route path="/formulario" element={<FormularioPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/carrito" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;