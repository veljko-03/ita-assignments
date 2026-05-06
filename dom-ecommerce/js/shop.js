const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 25,
    variants: [
      {
        color: "Black",
        sizes: ["S", "M", "L"],
      },
      {
        color: "White",
        sizes: ["M", "L"],
      },
      {
        color: "Blue",
        sizes: ["S", "XL"],
      },
    ],
  },
  {
    id: 2,
    name: "Winter Jacket",
    price: 120,
    variants: [
      {
        color: "Gray",
        sizes: ["M", "L"],
      },
      {
        color: "Black",
        sizes: ["L", "XL"],
      },
    ],
  },
  {
    id: 3,
    name: "Elegant Dress",
    price: 80,
    variants: [
      {
        color: "Red",
        sizes: ["S", "M"],
      },
      {
        color: "Pink",
        sizes: ["M"],
      },
      {
        color: "White",
        sizes: ["S"],
      },
    ],
  },
  {
    id: 4,
    name: "Blue Jeans",
    price: 60,
    variants: [
      {
        color: "Blue",
        sizes: ["M", "L"],
      },
      {
        color: "Dark Blue",
        sizes: ["L", "XL"],
      },
    ],
  },
  {
    id: 5,
    name: "Hoodie",
    price: 45,
    variants: [
      {
        color: "Black",
        sizes: ["S", "M", "L"],
      },
      {
        color: "Green",
        sizes: ["M", "XL"],
      },
      {
        color: "Gray",
        sizes: ["S", "XL"],
      },
    ],
  },
  {
    id: 6,
    name: "Summer Shorts",
    price: 35,
    variants: [
      {
        color: "Yellow",
        sizes: ["S", "M"],
      },
      {
        color: "White",
        sizes: ["M", "L"],
      },
    ],
  },
];

const main = document.querySelector("main");

let cartCount = 0;
const cartCounter = document.querySelector(".cart-count");

/* ==================
      PRODUCTS
================== */

const productsContainer = document.createElement("div");
productsContainer.className = "products-container";

products.forEach((product) => {
  // CARD
  const card = document.createElement("div");
  card.className = "card";
  
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

  card.addEventListener("click", () => {
    window.location.href = "./product.html";
  });
  
  // PRODUCT NAME
  const productName = document.createElement("h2");
  productName.className = "card-product-name";
  productName.textContent = product.name;
  
  // PRODUCT PRICE
  const productPrice = document.createElement("p");
  productPrice.className = "card-product-price";
  productPrice.textContent = `$${product.price}`;
  
  // COLORS TITLE
  const colorsTitle = document.createElement("p");
  colorsTitle.className = "card-variant-title";
  colorsTitle.textContent = "Colors:";
  
  // COLORS CONTAINER
  const colorsContainer = document.createElement("div");
  colorsContainer.className = "card-variant-container";
  
  // SIZES TITLE
  const sizesTitle = document.createElement("p");
  sizesTitle.className = "card-variant-title";
  sizesTitle.textContent = "Sizes:";
  
  // SIZES CONTAINER
  const sizesContainer = document.createElement("div");
  sizesContainer.className = "card-variant-container";
  
  // RENDER SIZES
  const renderSizes = (sizes) => {
    sizesContainer.innerHTML = "";
    sizes.forEach((size) => {
      const sizeItem = document.createElement("span");
      sizeItem.textContent = size;
      sizeItem.className = "variant-item";
      sizeItem.style.backgroundColor = "#e0e7ff";

      sizesContainer.appendChild(sizeItem);
    });
  };

  // RENDER COLORS
  product.variants.forEach((variant, index) => {
    const colorItem = document.createElement("span");
    colorItem.textContent = variant.color;
    colorItem.className = "variant-item";
    colorItem.style.backgroundColor = "#f1f1f1";
    colorItem.style.cursor = "pointer";

    if (index === 0) {
      colorItem.style.border = "2px solid #111";

      renderSizes(variant.sizes);
    }

    // COLOR CLICK
    colorItem.addEventListener("click", (e) => {
      e.stopPropagation();

      const allColors = colorsContainer.querySelectorAll("span");
      allColors.forEach((item) => {
        item.style.border = "none";
      });
      colorItem.style.border = "2px solid #111";

      renderSizes(variant.sizes);
    });

    colorsContainer.appendChild(colorItem);
  });

  // ADD TO CART BUTTON
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.className = "card-btn";

  addToCartBtn.addEventListener("mouseenter", () => {
    addToCartBtn.style.backgroundColor = "#333";
  });

  addToCartBtn.addEventListener("mouseleave", () => {
    addToCartBtn.style.backgroundColor = "#111";
  });

  addToCartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cartCount++;
    cartCounter.textContent = cartCount;
  });

  // APPEND ELEMENTS
  card.appendChild(productName);
  card.appendChild(productPrice);

  card.appendChild(colorsTitle);
  card.appendChild(colorsContainer);

  card.appendChild(sizesTitle);
  card.appendChild(sizesContainer);

  card.appendChild(addToCartBtn);

  productsContainer.appendChild(card);
});

main.appendChild(productsContainer);
