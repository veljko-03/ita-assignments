import "../styles/Cart.css"

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeProduct }) => (
  <div className="cart-item">
    <img src={`/images/${item.id}.png`} alt={item.title} className="cart-item-image" />

    <div className="cart-item-details">
      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <div className="quantity-control">
        <button
          className="quantity-btn"
          onClick={() => decreaseQuantity(item.id)}>
          −
        </button>
        <span>{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => increaseQuantity(item.id)}>
          +
        </button>
      </div>
    </div>

    <div className="cart-item-actions">
      <p className="cart-item-price">${item.price}</p>
      <button className="remove-btn" onClick={() => removeProduct(item.id)}>Remove</button>
    </div>
  </div>
)

export default CartItem