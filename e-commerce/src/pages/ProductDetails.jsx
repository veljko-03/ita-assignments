import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "../styles/ProductDetails.css"
import Button from "../components/Button"
import Title from "../components/Title"
import { getProductById } from "../services/productService"


const sizes = ["S", "M", "L", "XL"]

const ProductDetails = () => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true)
        setError("")

        const data = await getProductById(id)

        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)

        setError(
          error.message || "Failed to load product."
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      return
    }

    console.log("Add to cart:", {
      product,
      size: selectedSize,
    })
  }

  if (isLoading) {
    return <p>Loading product...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <main className="product-details">
      <div className="product-details-image">
        <img
          src="/placeholder.jpg"
          alt={product.title}
        />
      </div>

      <div className="product-details-info">
        <Title title={product.title} />

        <p className="product-details-price">
          €{product.price}
        </p>

        <p className="product-details-description">
          {product.description}
        </p>

        <div className="size-section">
          <h2>Size</h2>

          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`size-button ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <Button
          btnLabel="Add to Cart"
          onClick={handleAddToCart}
        />

        {!selectedSize && (
          <p className="size-message">
            Please select a size.
          </p>
        )}
      </div>
    </main>
  )
}

export default ProductDetails