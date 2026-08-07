import "../styles/Home.css"

const brands = [
  { name: "Bershka", logo: "brands/bershka.png" },
  { name: "H&M", logo: "brands/hm.png" },
  { name: "Koton", logo: "brands/koton.png" },
  { name: "Zara", logo: "brands/zara.png" },
]

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
  </main>
)

export default HomePage
