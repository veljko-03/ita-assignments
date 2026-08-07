import { Routes, Route } from "react-router-dom"
import "./styles/App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import CartPage from "./pages/Cart"
import AboutPage from "./pages/About"
import ShopPage from "./pages/Shop"

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>

    <Footer />
  </>
)

export default App
