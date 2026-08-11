import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import "../styles/Cart.css"
import Title from "../components/Title"
import Button from "../components/Button"
import CartItem from "../components/CartItem"

import { CartContext } from "../store/context/CartContext"

const CartPage = () => {
  const navigate = useNavigate()
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext)

  // Total calculation functions
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  // Redirect functions
  const handleCheckoutRedirect = () => {
    navigate("/")
  }

  const handleEmptyCartRedirect = () => {
    navigate("/shop")
  }

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <Title title="Your Cart" />

        <div className="empty-cart">
          <p>Your cart is empty.</p>

          <Button
            btnLabel="Continue Shopping"
            onClick={handleEmptyCartRedirect}
          />
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <Title title="Your Cart" />

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={`${item.product.id}-${item.size}`}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="cart-summary-row">
            <span>Items</span>

            <span>{totalItems}</span>
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
