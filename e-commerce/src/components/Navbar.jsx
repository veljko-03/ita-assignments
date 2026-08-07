import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => (
  <header className="header">
    <div className="logo">
      <Link to="/" className="logo">
        Shop
      </Link>
    </div>

    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/shop" className="nav-link">Shop</Link>
      <Link to="/about" className="nav-link">About Us</Link>
    </div>

    <nav className="nav">
      <Link to="/cart" className="cart-btn">
        <img src="cart-icon.svg" alt="Cart" />
      </Link>

      <Link to="/login" className="login-btn">
        Login
      </Link>
    </nav>
  </header>
)

export default Navbar;
