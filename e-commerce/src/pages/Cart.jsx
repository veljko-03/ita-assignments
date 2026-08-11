import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import "../styles/Cart.css"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Button from "../components/Button"
import CartContent from "../components/CartContent"

import { CartContext } from "../store/context/CartContext"

const CartPage = () => {
  const navigate = useNavigate()
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext)

  // Total calculation functions
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  // Redirect functions
  const handleCheckoutRedirect = () => {
    navigate("/checkout")
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
        <CartContent
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />

        <aside className="cart-summary">
          <Subtitle subtitle="Order Summary" />

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
