import { useNavigate } from "react-router-dom"
import "../styles/Home.css"
import Button from "./Button"

const CategoryCard = ({ image, title, category }) => {
    const navigate = useNavigate()

  const handleClick = () => {
    if (category) {
      navigate(`/shop/${encodeURIComponent(category)}`)
    }
  }

  return (
    <div className="category-card">
      <img src={image} alt={title} />

      <div className="category-content">
        <Button btnLabel={title} onClick={handleClick} />
      </div>
    </div>
  )
}

export default CategoryCard