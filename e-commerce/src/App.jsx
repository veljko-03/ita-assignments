import { Routes, Route } from "react-router-dom"
import "./styles/App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import CartPage from "./pages/Cart"
import AboutPage from "./pages/About"
import ShopPage from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:category" element={<ShopPage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>

    <Footer />
  </>
)

export default App