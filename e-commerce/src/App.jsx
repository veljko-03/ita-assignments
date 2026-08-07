import { Routes, Route } from "react-router-dom"
import "./styles/App.css"
import Navbar from "./components/Navbar"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import CartPage from "./pages/Cart"
import AboutPage from "./pages/About"

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </>
)

export default App
