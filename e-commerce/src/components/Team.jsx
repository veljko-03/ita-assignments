import "../styles/About.css"
import Title from "../components/Title"
import Employee from "../components/Employee"

const employees = [
  {
    image: "team/chloe.avif",
    name: "Chloe Bennet",
    position: "Fashion Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "team/noah.webp",
    name: "Noah Schnapp",
    position: "Marketing Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "team/lana.jpg",
    name: "Lana Parilla",
    position: "Customer Support Lead",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const Team = () => {
  return (
    <section className="team-section">
      <Title title="Meet the Team" />

      <div className="team-grid">
        {employees.map((employee) => (
          <Employee
            key={employee.name}
            image={employee.image}
            name={employee.name}
            position={employee.position}
            description={employee.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Team