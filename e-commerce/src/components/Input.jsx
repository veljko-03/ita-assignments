import "../styles/Forms.css"

const Input = ({ type, id, name, placeholder, label }) => (
  <>
    <label htmlFor={id} className="label">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="input"
    />
  </>
)

export default Input