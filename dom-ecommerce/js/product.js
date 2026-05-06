const product = {
  id: 1,
  name: "Classic T-Shirt",
  price: 25,
  description:
    "Comfortable and modern t-shirt made from premium cotton material.",

  // VARIANTS
  variants: [
    {
      color: "Black",
      sizes: ["S", "M", "L"]
    },
    {
      color: "White",
      sizes: ["M", "L", "XL"]
    },
    {
      color: "Blue",
      sizes: ["S", "XL"]
    }
  ]
};

const main = document.querySelector("main");
const cartCounter = document.querySelector(".cart-count");

let cartCount = 0;

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
addToCartBtn.className = "add-to-cart-btn";
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