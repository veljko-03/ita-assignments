import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../services/product"
import "../styles/Shop.css"
import Title from "../components/Title"
import ProductCard from "../components/ProductCard"

const ShopPage = () => {
  const { category } = useParams()

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

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      )
    : products

  if (isLoading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main>
      <Title title={category || "Shop"} />

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>No products found in this category.</p>
      )}
    </main>
  )
}

export default ShopPage