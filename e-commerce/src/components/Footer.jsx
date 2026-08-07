import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h2 className="footer-logo">Shop</h2>
        <p>Your one-stop destination for quality products.</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: support@shop.com</p>
        <p>Phone: +381 0 00 00 000</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Veljko. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
