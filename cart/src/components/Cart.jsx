import { useState } from "react"
import "../styles/Cart.css"
import CartItem from "./CartItem"

const initialProducts = [
  {
    id: 1,
    name: "Blazer",
    price: 95,
    color: "Beige",
    size: "S",
    quantity: 1,
    image: "products/blazer.png"
  },
  {
    id: 2,
    name: "Chunky Knit Sweater",
    price: 55,
    color: "Brown",
    size: "M",
    quantity: 1,
    image: "products/sweater.png"
  },
  {
    id: 3,
    name: "Mesh Sleeve Blouse",
    price: 32,
    color: "Yellow",
    size: "S",
    quantity: 1,
    image: "products/blouse.png"
  },
  {
    id: 4,
    name: "Retro Jeans",
    price: 70,
    color: "Black",
    size: "S",
    quantity: 1,
    image: "products/jeans.png"
  }
]

const Cart = () => {
  const [products, setProducts] = useState(initialProducts)

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

  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  )

  return (
    <div className="cart">
      <h1>Cart</h1>

      {products.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}

      <h2 className="cart-total">${total}</h2>
    </div>
  )
}

export default Cart