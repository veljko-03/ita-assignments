import { useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

const CART_STORAGE_KEY = "cart"

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)

    if (!savedCart) {
      return []
    }

    try {
      return JSON.parse(savedCart)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    )
  }, [cart])

  const addToCart = (product, size = null) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) =>
          item.product.id === product.id &&
          item.size === size
      )

      if (existingItem) {
        return currentCart.map((item) =>
          item.product.id === product.id &&
          item.size === size
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      }

      return [
        ...currentCart,
        {
          product,
          size,
          quantity: 1,
        },
      ]
    })
  }

  const removeFromCart = (productId, size = null) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.size === size
          )
      )
    )
  }

  const increaseQuantity = (productId, size = null) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === productId &&
        item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  const decreaseQuantity = (productId, size = null) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.product.id === productId &&
          item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider