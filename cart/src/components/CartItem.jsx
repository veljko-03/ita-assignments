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
      <p>Boja: {item.color}</p>
      <p>Veličina: {item.size}</p>
      <p>Cena: {item.price} $</p>
      <p>Količina: {item.quantity}</p>
    </div>
  </div>
)

export default CartItem