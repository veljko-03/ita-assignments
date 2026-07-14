import "../styles/Cart.css"

const CartItem = ({ item }) => (
  <div className="cart-item">
    <img
      src={item.image}
      alt={item.name}
      className="cart-item-image"
    />

    <div className="cart-item-details">
      <h3>{item.name}</h3>
      <p>Color: {item.color}</p>
      <p>Size: {item.size}</p>

      <div className="quantity-control">
        <button className="quantity-btn">−</button>
        <span>{item.quantity}</span>
        <button className="quantity-btn">+</button>
      </div>
    </div>

    <div className="cart-item-actions">
      <p className="cart-item-price">${item.price}</p>
      <button className="remove-btn">Remove</button>
    </div>
  </div>
)

export default CartItem