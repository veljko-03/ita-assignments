import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

import "../styles/Cart.css"
import Title from "../components/Title"
import Button from "../components/Button"
import { CartContext } from "../store/context/CartContext"

const CartPage = () => {
  const navigate = useNavigate()
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext)

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  const handleCheckoutRedirect = () => {
    navigate("/")
  }

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <Title title="Your Cart" />

        <div className="empty-cart">
          <p>Your cart is empty.</p>

          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <Title title="Your Cart" />

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => {
            const { product, size, quantity } = item

            return (
              <article key={`${product.id}-${size}`} className="cart-item">
                <Link
                  to={`/products/${product.id}`}
                  className="cart-item-image"
                >
                  <img src="/placeholder.jpg" alt={product.title} />
                </Link>

                <div className="cart-item-info">
                  <Link
                    to={`/products/${product.id}`}
                    className="cart-item-title"
                  >
                    {product.title}
                  </Link>

                  <p className="cart-item-price">€{product.price.toFixed(2)}</p>

                  {size && <p className="cart-item-size">Size: {size}</p>}

                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(product.id, size)}
                      >
                        −
                      </button>

                      <span>{quantity}</span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(product.id, size)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => removeFromCart(product.id, size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="cart-item-total">
                  €{(product.price * quantity).toFixed(2)}
                </p>
              </article>
            )
          })}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="cart-summary-row">
            <span>Items</span>
            <span>
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>

          <div className="cart-summary-row cart-total">
            <span>Total</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>

          <Button btnLabel="Checkout" onClick={handleCheckoutRedirect} />
        </aside>
      </div>
    </main>
  )
}

export default CartPage
