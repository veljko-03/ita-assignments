import { useContext } from "react"

import CartContent from "../components/CartContent"
import Title from "../components/Title"

import { CartContext } from "../store/context/CartContext"

const CheckoutPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext)

  return (
    <>
      <Title title="Checkout" />
      <CartContent
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  )
}
export default CheckoutPage
