const API_URL = import.meta.env.VITE_PRODUCTS_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const getProducts = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "X-API-Key": API_KEY,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || data?.error || "Failed to fetch products.")
  }

  return data
}

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      "X-API-Key": API_KEY,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || data?.error || "Failed to fetch product.")
  }

  return data
}
