import { Link } from "react-router-dom"
import "../styles/Shop.css"
import Button from "../components/Button"

const ProductCard = ({ product }) => (
  <article className="product-card">
    <Link to={`/products/${product.id}`} className="product-image-link">
      <img src="/placeholder.jpg" alt={product.title} className="product-image" />
    </Link>

    <h2 className="product-title">{product.title}</h2>
    <p className="product-price">€{product.price}</p>

    <Button btnLabel="Add to cart" />
  </article>
)

export default ProductCard
