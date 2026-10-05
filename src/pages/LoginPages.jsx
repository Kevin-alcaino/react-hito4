import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


 function LoginPages() {
   const [email, setEmail] = useState("");
   const [contrasena, setContrasena] = useState("");
  
   const handleSubmit = (e) => {
    e.preventDefault();

     if ( !email || !contrasena ){
      alert("Por favor, ingresar todos los campos")
      return;
    }
    
    
    if (contrasena.length < 6){
      alert("La contraseña debe tener al menos 6 carcteres")
      return;
    }
    alert("¡¡Inicio de Sesión Exitoso!!")
   
  };

  return (
     <>
  
      <Header />
      <div  className="login">
      <h1>Iniciar sesión</h1>
      <div className="casillas">
        
        <form onSubmit={handleSubmit}>
          
          {/* email */}

        <label className="formLabel" 
        htmlFor="email">Email</label>
        <input 
         type="email"
         id="email" 
         value={email} 
         onChange={(e) => setEmail(e.target.value)} 
         placeholder="email@correo.com"
         required />

         {/* contraseña */}

        <label className="formLabel" 
        htmlFor="contrasena">Contraseña</label>
        <input type="password" 
        id="contrasena" 
        value={contrasena} 
        onChange={(e) => setContrasena(e.target.value)} 
        placeholder="Ingrese su contraseña"
        required />
         
        <button type="submit" className="boton">Iniciar Sesión</button>

        </form>

      </div>
      </div>
      <Footer />
    </>
  );
}
export default LoginPages;
