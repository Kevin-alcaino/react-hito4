import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FormularioPages() {
 const [email, setEmail] = useState("");
 const [contrasena,setContrasena] = useState ("");
 const [repContrasena, setRepContrasena] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();


   
    if ( !email || !contrasena || !repContrasena){
      alert("Por favor, ingresar todos los campos")
      return;
    }
    if (contrasena !== repContrasena){
      alert("Las contraseñas no coinciden")
      return;
    }
    if (contrasena.length < 6){
      alert("La contraseña debe tener al menos 6 carcteres")
      return;
    }
    alert("¡¡Registro Exitoso!!")
   
  };



  return (
    <>
  
      <Header />
      <div  className="formulario">
      <h1>Registro</h1>
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
        placeholder="Minimo 6 carcteres"
        required />
         
          {/* repContraseña */}

        <label className="formLabel" 
        htmlFor="repContrasena">Repetir contraseña  </label>
        <input 
        type="password" 
        id="repContrasena" 
        value={repContrasena} 
        onChange={(e) => setRepContrasena(e.target.value)} 
        placeholder="Repetir contraseña" 
        required />

        <button type="submit">Registrarse</button>

        </form>

      </div>
      </div>
      <Footer />
    </>
    
  );
}

export default FormularioPages;