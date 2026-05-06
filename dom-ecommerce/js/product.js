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

productContainer.style.maxWidth = "1100px";
productContainer.style.margin = "40px auto";
productContainer.style.padding = "30px";
productContainer.style.backgroundColor = "white";
productContainer.style.borderRadius = "20px";
productContainer.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
productContainer.style.display = "flex";
productContainer.style.flexDirection = "column";
productContainer.style.gap = "25px";

// PRODUCT TITLE
const productTitle = document.createElement("h1");
productTitle.textContent = product.name;

productTitle.style.fontSize = "42px";
productTitle.style.color = "#111";

// PRODUCT PRICE
const productPrice = document.createElement("p");
productPrice.textContent = `$${product.price}`;

productPrice.style.fontSize = "28px";
productPrice.style.fontWeight = "bold";
productPrice.style.color = "#2563eb";

// PRODUCT DESCRIPTION
const productDescription = document.createElement("p");
productDescription.textContent = product.description;

productDescription.style.fontSize = "18px";
productDescription.style.lineHeight = "1.7";
productDescription.style.color = "#555";

// COLORS SECTION
const colorsTitle = document.createElement("h3");
colorsTitle.textContent = "Available Colors";
colorsTitle.style.fontSize = "22px";

const colorsContainer = document.createElement("div");
colorsContainer.style.display = "flex";
colorsContainer.style.flexWrap = "wrap";
colorsContainer.style.gap = "12px";

// SIZES SECTION
const sizesTitle = document.createElement("h3");
sizesTitle.textContent = "Available Sizes";
sizesTitle.style.fontSize = "22px";

const sizesContainer = document.createElement("div");
sizesContainer.style.display = "flex";
sizesContainer.style.flexWrap = "wrap";
sizesContainer.style.gap = "12px";

// RENDER SIZES
const renderSizes = (sizes) => {
  sizesContainer.innerHTML = "";

  sizes.forEach((size) => {
    const sizeBox = document.createElement("span");
    sizeBox.textContent = size;

    sizeBox.style.padding = "10px 16px";
    sizeBox.style.backgroundColor = "#e0e7ff";
    sizeBox.style.borderRadius = "10px";
    sizeBox.style.fontSize = "15px";
    sizeBox.style.cursor = "pointer";
    sizeBox.style.transition = "0.3s";

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

  colorBox.style.padding = "10px 16px";
  colorBox.style.backgroundColor = "#f1f1f1";
  colorBox.style.borderRadius = "10px";
  colorBox.style.fontSize = "15px";
  colorBox.style.cursor = "pointer";
  colorBox.style.transition = "0.3s";

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

addToCartBtn.textContent = "Add to Cart";
addToCartBtn.style.width = "220px";
addToCartBtn.style.padding = "16px";
addToCartBtn.style.border = "none";
addToCartBtn.style.borderRadius = "14px";
addToCartBtn.style.backgroundColor = "#111";
addToCartBtn.style.color = "white";
addToCartBtn.style.fontSize = "18px";
addToCartBtn.style.cursor = "pointer";
addToCartBtn.style.transition = "0.3s";

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

/* ==================
     RESPONSIVNESS
================== */

const handleResponsiveDesign = () => {
  if (window.innerWidth < 768) {
    productContainer.style.margin = "20px";
    productContainer.style.padding = "20px";
    productTitle.style.fontSize = "32px";
    productPrice.style.fontSize = "24px";
    productDescription.style.fontSize = "16px";
    addToCartBtn.style.width = "100%";
  }
};

handleResponsiveDesign();

window.addEventListener("resize", handleResponsiveDesign);
