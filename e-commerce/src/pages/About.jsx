import "../styles/About.css"
import Title from "../components/Title"
import Team from "../components/Team"

const AboutPage = () => (
  <main className="about-page">
    <section className="about-section">
      <div className="about-image">
        <img src="about-us.jpg" alt="About us" />
      </div>

      <div className="about-content">
        <Title title="So, who are we?" />

        <p>
          Welcome to Shop, your destination for modern fashion and timeless
          styles. We carefully select quality clothing from popular brands to
          bring you collections that match every personality and occasion.
        </p>

        <p>
          Our goal is to make shopping simple, enjoyable, and inspiring. Whether
          you are looking for everyday essentials or the latest trends, we are
          here to help you find pieces that express your unique style.
        </p>

        <p>Thank you for choosing us as part of your fashion journey.</p>
      </div>
    </section>

    <Team />
  </main>
)

export default AboutPage