const productsSection = document.getElementById("productsContainer");

// Kategorija iz query string-a
const getCategoryFromQueryString = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
};

const selectedCategory = getCategoryFromQueryString();

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://api.advanziaeducation.com/api/products",
      {
        method: "GET",
        headers: {
          "X-API-Key":
            "05bce3c3b87a319f44cdd405aa1e03019f41d38c49c64436a82198a6a36daf51",
        },
      },
    );

    const data = await response.json();

    renderProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Filter + Render
const renderProducts = (products) => {
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().startsWith(selectedCategory.toLowerCase()),
  );

  if (filteredProducts.length === 0) {
    productsSection.innerHTML = `
      <p class="empty-message">
        No products found for this category
      </p>
    `;
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.dataset.id = product.id;

    const productImg = document.createElement("img");
    productImg.classList.add("product-img");
    productImg.src = `./images/${product.id}.png`;
    productImg.alt = product.title;

    const productTitle = document.createElement("p");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    const priceRow = document.createElement("div");
    priceRow.classList.add("price-row");

    const price = document.createElement("span");
    price.classList.add("product-price");
    price.textContent = `$${product.price}`;

    const button = document.createElement("button");
    button.classList.add("btn", "add-to-cart");
    button.textContent = "Add to Cart";
    button.dataset.id = product.id;

    priceRow.appendChild(price);

    productCard.appendChild(productImg);
    productCard.appendChild(productTitle);
    productCard.appendChild(priceRow);
    productCard.appendChild(button);

    productsSection.appendChild(productCard);
  });
};

fetchProducts();