import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"
import "../styles/Shop.css"
import Title from "../components/Title"
import ProductCard from "../components/ProductCard"

const ShopPage = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()

        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)

        setError(
          error.message || "Failed to load products."
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main>
      <Title title="Shop" />

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  )
}

export default ShopPage