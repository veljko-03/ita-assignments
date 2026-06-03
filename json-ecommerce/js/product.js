const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 25,
    description: "Comfortable and modern t-shirt made from premium cotton material.",
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
    description: "Warm winter jacket for cold days.",
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
    description: "Elegant dress for special occasions.",
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
    description: "Blue ripped jeans for every occasion.",
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
    description: "Hoodie for every occasion.",
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
    description: "Enjoy summer with perfect shorts.",
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
const cartCounter = document.querySelector(".cart-count");

let cartCount = 0;

/* ======================
    PRODUCT TO DISPLAY
====================== */

// GET PRODUCT ID FROM URL
const params =
  new URLSearchParams(window.location.search);

const productId =
  Number(params.get("id"));

// FIND PRODUCT
const product =
  products.find((item) => item.id === productId);

/* ================
     PRODUCT
================ */

const productContainer = document.createElement("div");
productContainer.className = "product-container";

// PRODUCT TITLE
const productTitle = document.createElement("h1");
productTitle.className = "product-title";
productTitle.textContent = product.name;

// PRODUCT PRICE
const productPrice = document.createElement("p");
productPrice.className = "product-price";
productPrice.textContent = `$${product.price}`;

// PRODUCT DESCRIPTION
const productDescription = document.createElement("p");
productDescription.className = "product-description";
productDescription.textContent = product.description;

// COLORS SECTION
const colorsTitle = document.createElement("h3");
colorsTitle.className = "variants-title";
colorsTitle.textContent = "Available Colors";

const colorsContainer = document.createElement("div");
colorsContainer.className = "variants-container";

// SIZES SECTION
const sizesTitle = document.createElement("h3");
sizesTitle.className = "variants-title";
sizesTitle.textContent = "Available Sizes";

const sizesContainer = document.createElement("div");
sizesContainer.className = "variants-container";

// RENDER SIZES
const renderSizes = (sizes) => {
  sizesContainer.innerHTML = "";
  
  sizes.forEach((size) => {
    const sizeBox = document.createElement("span");
    sizeBox.textContent = size;
    sizeBox.className = "variant-box";
    sizeBox.style.backgroundColor = "#e0e7ff";

    sizeBox.addEventListener("mouseenter", () => {
      sizeBox.style.backgroundColor = "#c7d2fe";
    });

    sizeBox.addEventListener("mouseleave", () => {
      sizeBox.style.backgroundColor = "#e0e7ff";
    });

    sizesContainer.appendChild(sizeBox);
  });
};

// RENDER COLORS
product.variants.forEach((variant) => {
  const colorBox = document.createElement("span");
  colorBox.textContent = variant.color;
  colorBox.className = "variant-box";
  colorBox.style.backgroundColor = "#f1f1f1";

  colorBox.addEventListener("mouseenter", () => {
    colorBox.style.backgroundColor = "#ddd";
  });

  colorBox.addEventListener("mouseleave", () => {
    colorBox.style.backgroundColor = "#f1f1f1";
  });

  colorBox.addEventListener("click", () => {
    const allColors = colorsContainer.querySelectorAll("span");
    allColors.forEach((item) => {
      item.style.border = "none";
    });
    colorBox.style.border = "2px solid #111";

    renderSizes(variant.sizes);
  });

  colorsContainer.appendChild(colorBox);
});

renderSizes(product.variants[0].sizes);

// ADD TO CART BUTTON
const addToCartBtn = document.createElement("button");
addToCartBtn.classList.add(
  "btn",
  "add-to-cart-btn"
);
addToCartBtn.textContent = "Add to Cart";

addToCartBtn.addEventListener("mouseenter", () => {
  addToCartBtn.style.backgroundColor = "#333";
});

addToCartBtn.addEventListener("mouseleave", () => {
  addToCartBtn.style.backgroundColor = "#111";
});

addToCartBtn.addEventListener("click", () => {
  cartCount++;
  cartCounter.textContent = cartCount;
});

// APPEND ELEMENTS
productContainer.appendChild(productTitle);
productContainer.appendChild(productPrice);
productContainer.appendChild(productDescription);

productContainer.appendChild(colorsTitle);
productContainer.appendChild(colorsContainer);

productContainer.appendChild(sizesTitle);
productContainer.appendChild(sizesContainer);

productContainer.appendChild(addToCartBtn);

main.appendChild(productContainer);