import "../styles/App.css"

const Button = ({ onClick, btnLabel }) => (
  <button className="btn" onClick={onClick}>
    {btnLabel}
  </button>
)

export default Button