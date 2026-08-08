import { useNavigate } from "react-router-dom"
import "../styles/Home.css"
import CategoryCard from "../components/CategoryCard"
import Title from "../components/Title"
import Button from "../components/Button"

const brands = [
  { name: "Bershka", logo: "brands/bershka.png" },
  { name: "H&M", logo: "brands/hm.png" },
  { name: "Koton", logo: "brands/koton.png" },
  { name: "Zara", logo: "brands/zara.png" },
]

const categories = [
  {
    title: "Women",
    image: "categories/women.jpg",
    category: "Women Clothing"
  },
  {
    title: "Men",
    image: "categories/men.jpg",
    category: "Men Clothing"
  },
  {
    title: "Kids",
    image: "categories/kids.jpg",
    category: "Kid Clothing"
  }
]

const HomePage = () => {
  const navigate = useNavigate()

  const handleShopRedirect = () => {
    navigate("/shop");
  }

  return (
    <main className="home">
      <section className="hero">
        <Title title="Discover Brands" />

        <p>
          Discover a collection that blends style and comfort. Browse our
          carefully selected pieces of modern clothing that follow the latest
          trends while staying true to your unique style.
        </p>

        <div className="brands">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-card">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <Title title="New Arrivals" />

        <div className="categories">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
              category={category.category}
            />
          ))}
        </div>
      </section>

      <section className="promo-section">
        <img src="banner.png" className="banner" alt="Season promotion" />

        <div className="promo-content">
          <Title title="Enjoy 20% Off This Season's Styles" />
          <Button btnLabel="Show All" onClick={handleShopRedirect} />
        </div>
      </section>
    </main>
  )
}

export default HomePage