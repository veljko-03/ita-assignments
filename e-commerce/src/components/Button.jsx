import "../styles/App.css"

const Button = ({ onClick, btnLabel, type = "button", disabled = false }) => (
  <button className="btn" onClick={onClick} type={type} disabled={disabled}>
    {btnLabel}
  </button>
)

export default Button