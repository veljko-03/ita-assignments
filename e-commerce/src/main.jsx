import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import App from "./App.jsx"
import CartProvider from "./store/providers/CartProvider.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
)
