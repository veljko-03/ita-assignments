import "../styles/Home.css"
import Button from "./Button"

const CategoryCard = ({ image, title }) => (
  <div className="category-card">
    <img src={image} alt={title} />

    <div className="category-content">
      <Button btnLabel={title} />
    </div>
  </div>
)

export default CategoryCard
