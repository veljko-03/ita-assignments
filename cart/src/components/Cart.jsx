import { useState, useEffect } from "react"
import "../styles/Cart.css"
import CartItem from "./CartItem"
import { apiRequest } from "../api/apiClient"

const Cart = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    )
  }

  const decreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product,
      ),
    )
  }

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  }

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  )

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await apiRequest("/carts/1")

        setProducts(response.products)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchCart()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Something went wrong.</h2>
  }

  return (
    <div className="cart">
      <h1>Cart</h1>

      {products.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeProduct={removeProduct}
        />
      ))}

      <h2 className="cart-total">${total}</h2>
    </div>
  )
}

export default Cart