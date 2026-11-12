import { createContext, useState,} from "react";
import { useNavigate } from "react-router-dom";


// Crear el contexto
export const UserContext = createContext();

// obtener el token del localStorage
const validarToken = localStorage.getItem("token") || null;

// Crear el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(validarToken);
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  const Login = async (emailUser, passwordUser) => {
    try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailUser,
        password: passwordUser,
      }),
    });

      const data = await response.json();

      if (data?.error) {
        alert(data.error);
        return;
      }

      setToken(true);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

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
    
    // Manejar errores de inicio de sesión
    if (data?.error) {
      alert(data.error);
      return;
    }

    // Guardar el token en el estado y en el localStorage
    setToken(true);
    alert("¡¡Inicio de Sesión Exitoso!!");
    localStorage.setItem("token", data.token);
    navigate ("/")
                                              
  }
  // Función para validar el usuario con el token almacenado
  const validarUsuario = async () => {
    const currentToken = localStorage.getItem("token") || null;
    if (currentToken) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error al validar usuario:", error);
      }
    }
  };
  // Función para cerrar sesión
  const Logout = () => {
    setToken(null);
    localStorage.clear();
  };
  return (
    <UserContext.Provider value={{ email, setEmail, password, setPassword, token, user, handleSubmit, Login, validarUsuario, Logout}}>
      {children}
    </UserContext.Provider>
  )

}
export default UserProvider