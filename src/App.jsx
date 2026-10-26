
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePages from './pages/HomePages';
import FormularioPages from './pages/FormularioPages';
import LoginPages from "./pages/LoginPages";
import Cart from './pages/CartPages';
import NotfoundPages from './pages/NotfoundPages';
import { CartProvider } from './context/CartContext'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <CartProvider>     
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/formulario" element={<FormularioPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotfoundPages/>} />
      </Routes>
    </CartProvider>
  );
}

export default App;