import "../styles/About.css"
import Button from "./Button"

const Employee = ({ image, name, position, description }) => {
  return (
    <div className="employee-card">
      <img
        src={image}
        alt={name}
        className="employee-image"
      />

      <h3>{name}</h3>
      <h4>{position}</h4>

      <p>{description}</p>

      <Button
        btnLabel="Contact"
      />
    </div>
  )
}

export default Employee