import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false)
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
    alert("¡¡Inicio de Sesión Exitoso!!")
    navigate("/")
                                              
  }
  const Logtout = () => {
    setToken(false)
  } 
  return (
    <UserContext.Provider value={{ token, setToken, Login, Logtout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider