import { Link } from "react-router-dom"
import "../styles/Cart.css"

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const { product, size, quantity } = item

  // Cart item actions
  const handleIncreaseQuantity = () => {
    increaseQuantity(product.id, size)
  }

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.id, size)
  }

  const handleRemove = () => {
    removeFromCart(product.id, size)
  }

  return (
    <article className="cart-item" key={`${product.id}-${size}`}>
      <Link to={`/products/${product.id}`} className="cart-item-image">
        <img src="/placeholder.jpg" alt={product.title} />
      </Link>

      <div className="cart-item-info">
        <Link to={`/products/${product.id}`} className="cart-item-title">
          {product.title}
        </Link>

        <p className="cart-item-price">€{product.price.toFixed(2)}</p>

        {size && <p className="cart-item-size">Size: {size}</p>}

        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button onClick={handleDecreaseQuantity}>-</button>

            <span>{quantity}</span>

            <button onClick={handleIncreaseQuantity}>+</button>
          </div>

          <button className="remove-button" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>

      <p className="cart-item-total">
        €{(product.price * quantity).toFixed(2)}
      </p>
    </article>
  )
}

export default CartItem
