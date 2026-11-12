import {  useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginPages() {   
   const { email, setEmail, password, setPassword, Login } = useContext(UserContext);
   const navigate = useNavigate();
 
   // 1. La lógica va dentro de una función asíncrona handleSubmit
   const handleSubmit = async (e) => {
     e.preventDefault();

     // Validar campos vacíos
     if (!email || !password) {
       alert("Por favor, ingresar todos los campos");
       return;
     }

     // Validar longitud de la contraseña
     if (password.length < 6) {
       alert("La contraseña debe tener al menos 6 caracteres");
       return;
     }

     try { 
       // Llamamos a la función Login del contexto que conecta con tu backend (puerto 5000)
       await Login(email, password);

       setEmail("");
       setPassword("");
       alert("¡¡Inicio de Sesión Exitoso!!");
       navigate("/");
     } catch (error) {
       console.error("Error al iniciar sesión:", error);
     }
   };

   return (
      <>
       <Header />
       <div className="login">
       <h1>Iniciar sesión</h1>
       <div className="casillas">
         
         <form onSubmit={handleSubmit}>
           
           {/* email */}
           <label className="formLabel" htmlFor="email">Email</label>
           <input 
             type="email"
             id="email" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)} 
             placeholder="email@correo.com"
             required 
           />

           {/* contraseña */}
           <label className="formLabel" htmlFor="password">Contraseña</label>
           <input 
             type="password" 
             id="password" 
             value={password} 
             onChange={(e) => setPassword(e.target.value)} 
             placeholder="Ingrese su contraseña"
             required 
           />
          
           <button type="submit" className="boton">Iniciar Sesión</button>

         </form>

       </div>
       </div>
       <Footer />
     </>
   );
}

export default LoginPages;