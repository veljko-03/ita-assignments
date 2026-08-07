import "../styles/Home.css"

const CategoryCard = ({ image, title }) => (
  <div className="category-card">
    <img src={image} alt={title} />

    <div className="category-content">
      <button>{title}</button>
    </div>
  </div>
)

export default CategoryCard
