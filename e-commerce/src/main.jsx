import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import App from "./App.jsx"
import AuthProvider from "./store/providers/AuthProvider.jsx"
import CartProvider from "./store/providers/CartProvider.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
)
