import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Navbar.css"
import Button from "./Button"
import { AuthContext } from "../store/context/AuthContext"

const Navbar = () => {
  const navigate = useNavigate()
  const { isAuthenticated, logout } = useContext(AuthContext)

  // Redirect functions
  const handleLoginRedirect = () => {
    navigate("/login")
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo">
          Shop
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </div>

      <nav className="nav">
        <Link to="/cart" className="cart-btn">
          <img src="cart-icon.svg" alt="Cart" />
        </Link>

        {isAuthenticated ? (
          <Button btnLabel="Log out" onClick={handleLogout} />
        ) : (
          <Button btnLabel="Log in" onClick={handleLoginRedirect} />
        )}
      </nav>
    </header>
  )
}

export default Navbar
