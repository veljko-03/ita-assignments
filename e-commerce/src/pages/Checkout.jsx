import { useContext, useState } from "react"

import "../styles/Checkout.css"

import CartContent from "../components/CartContent"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Input from "../components/Input"
import Button from "../components/Button"

import { CartContext } from "../store/context/CartContext"

const CheckoutPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext)

  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    country: "",
    city: "",
    zipCode: "",
  })

  const [paymentData, setPaymentData] = useState({
    cardholderName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  })

  const handleShippingChange = (event) => {
    const { name, value } = event.target

    setShippingData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handlePaymentChange = (event) => {
    const { name, value } = event.target

    setPaymentData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handlePay = (event) => {
    event.preventDefault()
  }

  return (
    <main className="checkout-page">
      <Title title="Checkout" />

      <div className="checkout-content">
        <div className="checkout-forms">
          <Subtitle subtitle="Shipping Information" />
          <section className="checkout-section">
            <form className="checkout-form">
              <div className="form-row">
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  label="First name"
                  value={shippingData.firstName}
                  onChange={handleShippingChange}
                />

                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  label="Last name"
                  value={shippingData.lastName}
                  onChange={handleShippingChange}
                />
              </div>

              <Input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                label="Address"
                value={shippingData.address}
                onChange={handleShippingChange}
              />

              <Input
                type="text"
                id="apartment"
                name="apartment"
                placeholder="Apartment, suite, etc. (optional)"
                label="Apartment"
                value={shippingData.apartment}
                onChange={handleShippingChange}
              />

              <div className="form-row form-row-three">
                <Input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  label="Country"
                  value={shippingData.country}
                  onChange={handleShippingChange}
                />

                <Input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  label="City"
                  value={shippingData.city}
                  onChange={handleShippingChange}
                />

                <Input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip code"
                  label="Zip code"
                  value={shippingData.zipCode}
                  onChange={handleShippingChange}
                />
              </div>
            </form>
          </section>

          <Subtitle subtitle="Payment Information" />
          <section className="checkout-section">
            <form className="checkout-form" onSubmit={handlePay}>
              <Input
                type="text"
                id="cardholderName"
                name="cardholderName"
                placeholder="Enter cardholder name"
                label="Cardholder name"
                value={paymentData.cardholderName}
                onChange={handlePaymentChange}
              />

              <Input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                label="Card number"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
              />

              <div className="form-row form-row-three">
                <Input
                  type="text"
                  id="month"
                  name="month"
                  placeholder="MM"
                  label="Month"
                  value={paymentData.month}
                  onChange={handlePaymentChange}
                />

                <Input
                  type="text"
                  id="year"
                  name="year"
                  placeholder="YYYY"
                  label="Year"
                  value={paymentData.year}
                  onChange={handlePaymentChange}
                />

                <Input
                  type="text"
                  id="cvc"
                  name="cvc"
                  placeholder="CVC"
                  label="CVC"
                  value={paymentData.cvc}
                  onChange={handlePaymentChange}
                />
              </div>

              <Button btnLabel="Pay" type="submit" />
            </form>
          </section>
        </div>

        <aside className="checkout-cart">
          <Subtitle subtitle="Review your Cart" />
          <CartContent
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        </aside>
      </div>
    </main>
  )
}

export default CheckoutPage
