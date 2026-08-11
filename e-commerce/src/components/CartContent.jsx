import "../styles/Cart.css"
import CartItem from "./CartItem"

const CartContent = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className="cart-items-container">
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

      <div className="cart-content-total">
        <span>Total</span>

        <span>€{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartContent
