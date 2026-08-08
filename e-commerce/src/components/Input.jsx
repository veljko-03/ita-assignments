import "../styles/Forms.css"

const Input = ({ type, id, name, placeholder, label }) => (
  <div className="input-container">
    <label htmlFor={id} className="label">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="input"
    />
  </div>
)

export default Input