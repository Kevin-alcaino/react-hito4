import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";



export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  
  const [token, setToken] = useState(false)
  const handleSubmit = async (e) => {
   e.preventDefault();
   const response = await fetch("http://localhost:5000/api/auth/login", {
   method: "POST",
   headers: {
   "Content-Type": "application/json",
   },
   body: JSON.stringify({
   email,
   password,
   }),
   });
const data = await response.json();
alert(data?.error || "Authentication successful!");
localStorage.setItem("token", data.token);
};
  const navigate = useNavigate()

  const Login = (email, password) => {
    if (!email.trim() || !password.trim())  {   
      alert("Por favor, ingresar todos los campos")
      return;
    }

    if (password.length < 6){
        alert("La contraseña debe tener al menos 6 carcteres")
        return;
    }

    setToken(true);
    alert("¡¡Inicio de Sesión Exitoso!!")
    navigate ("/")
                                              
  }
  const Logout = () => {
    setToken(false);
  };
  
  return (
    <UserContext.Provider value={{ token, setToken, Login, Logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider