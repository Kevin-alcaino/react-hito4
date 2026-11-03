
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePages from './pages/HomePages';
import FormularioPages from './pages/FormularioPages';
import LoginPages from "./pages/LoginPages";
import ProfilePages from './pages/ProfilePages';
import Cart from './pages/CartPages';
import PizzaPages from './pages/PizzaPages';
import NotfoundPages from './pages/NotfoundPages';
import UserProvider from './context/UserContext';
import { CartProvider } from './context/CartContext'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <UserProvider>
    <CartProvider>     
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/pizza/:id" element={<PizzaPages />} />
        <Route path="/formulario" element={<FormularioPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/profile" element={<ProfilePages />} />
        <Route path="*" element={<NotfoundPages/>} />
      </Routes>
    </CartProvider>
    </UserProvider>
  );
}

export default App;