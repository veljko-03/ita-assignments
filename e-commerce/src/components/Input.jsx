import "../styles/Forms.css"

const Input = ({
  type,
  id,
  name,
  placeholder,
  label,
  value,
  onChange,
  error,
}) => (
  <div className="input-container">
    <label htmlFor={id} className="label">
      {label}
    </label>

    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />

    {error && <p className="input-error">{error}</p>}
  </div>
)

export default Input