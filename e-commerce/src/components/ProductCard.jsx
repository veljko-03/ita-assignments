import { useContext } from "react"
import { Link } from "react-router-dom"
import "../styles/Shop.css"
import Button from "../components/Button"
import { CartContext } from "../store/context/CartContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    console.log("Add to cart:", { product })
    addToCart(product)
  }

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <img
          src="/placeholder.jpg"
          alt={product.title}
          className="product-image"
        />
      </Link>

      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">€{product.price}</p>

      <Button btnLabel="Add to cart" onClick={handleAddToCart} />
    </article>
  )
}

export default ProductCard
