import { createContext, useState,} from "react";
import { useNavigate } from "react-router-dom";



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim() || !password.trim()) {
      alert("Por favor, ingresar todos los campos");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

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

    if (data?.error) {
      alert(data.error);
      return;
    }

    
    setToken(true);
    alert("¡¡Inicio de Sesión Exitoso!!")
    navigate ("/")
                                              
  }
  const Logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };
  return (
    <UserContext.Provider value={{ email, setEmail, password, setPassword, token, handleSubmit, Logout}}>
      {children}
    </UserContext.Provider>
  )

}
export default UserProvider