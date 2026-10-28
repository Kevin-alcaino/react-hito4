import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CartContext } from './context/CartContext.jsx'
import UserProvider from './context/UserContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContext.Provider>
      <UserProvider>
        <App />
      </UserProvider>
    </CartContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)