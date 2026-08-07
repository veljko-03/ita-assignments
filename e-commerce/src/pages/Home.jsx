import "../styles/Home.css"
import CategoryCard from "../components/CategoryCard"

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
  },
  {
    title: "Men",
    image: "categories/men.jpg",
  },
  {
    title: "Kids",
    image: "categories/kids.jpg",
  },
];

const HomePage = () => (
  <main className="home">
    <section className="hero">
      <h1>Discover Brands</h1>

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
      <h2>New Arrivals</h2>
      
        <div className="categories">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </section>
  </main>
)

export default HomePage
