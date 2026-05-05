const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 25,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 2,
    name: "Winter Jacket",
    price: 120,
    colors: ["Gray", "Black"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 3,
    name: "Elegant Dress",
    price: 80,
    colors: ["Red", "Pink", "White"],
    sizes: ["S", "M"]
  },
  {
    id: 4,
    name: "Blue Jeans",
    price: 60,
    colors: ["Blue", "Dark Blue"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 5,
    name: "Hoodie",
    price: 45,
    colors: ["Black", "Green", "Gray"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Summer Shorts",
    price: 35,
    colors: ["Yellow", "White"],
    sizes: ["S", "M", "L"]
  }
];

const main = document.querySelector("main");

let cartCount = 0;
const cartCounter = document.querySelector(".cart-count");

/* ==================
      PRODUCTS
================== */

const productsContainer = document.createElement("div");

productsContainer.style.display = "grid";
productsContainer.style.gridTemplateColumns =
  "repeat(auto-fit, minmax(250px, 1fr))";
productsContainer.style.gap = "20px";
productsContainer.style.padding = "40px";

products.forEach((product) => {
  // CARD
  const card = document.createElement("div");

  card.style.backgroundColor = "white";
  card.style.padding = "25px";
  card.style.borderRadius = "16px";
  card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.gap = "16px";
  card.style.transition = "0.3s";
  card.style.cursor = "pointer";

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

  productName.textContent = product.name;

  productName.style.fontSize = "24px";
  productName.style.color = "#111";

  // PRODUCT PRICE
  const productPrice = document.createElement("p");

  productPrice.textContent = `$${product.price}`;

  productPrice.style.fontSize = "18px";
  productPrice.style.fontWeight = "bold";
  productPrice.style.color = "#2563eb";

  // COLORS TITLE
  const colorsTitle = document.createElement("p");

  colorsTitle.textContent = "Colors:";
  colorsTitle.style.fontWeight = "bold";

  // COLORS CONTAINER
  const colorsContainer = document.createElement("div");

  colorsContainer.style.display = "flex";
  colorsContainer.style.flexWrap = "wrap";
  colorsContainer.style.gap = "8px";

  // CREATE COLORS
  product.colors.forEach((color) => {
    const colorItem = document.createElement("span");

    colorItem.textContent = color;

    colorItem.style.padding = "6px 10px";
    colorItem.style.backgroundColor = "#f1f1f1";
    colorItem.style.borderRadius = "8px";
    colorItem.style.fontSize = "14px";

    colorsContainer.appendChild(colorItem);
  });

  // SIZES TITLE
  const sizesTitle = document.createElement("p");

  sizesTitle.textContent = "Sizes:";
  sizesTitle.style.fontWeight = "bold";

  // SIZES CONTAINER
  const sizesContainer = document.createElement("div");

  sizesContainer.style.display = "flex";
  sizesContainer.style.flexWrap = "wrap";
  sizesContainer.style.gap = "8px";

  // CREATE SIZES
  product.sizes.forEach((size) => {
    const sizeItem = document.createElement("span");

    sizeItem.textContent = size;

    sizeItem.style.padding = "6px 10px";
    sizeItem.style.backgroundColor = "#e0e7ff";
    sizeItem.style.borderRadius = "8px";
    sizeItem.style.fontSize = "14px";

    sizesContainer.appendChild(sizeItem);
  });

  // ADD TO CART BUTTON
  const addToCartBtn = document.createElement("button");

  addToCartBtn.textContent = "Add to Cart";

  addToCartBtn.style.border = "none";
  addToCartBtn.style.padding = "12px";
  addToCartBtn.style.borderRadius = "10px";
  addToCartBtn.style.backgroundColor = "#111";
  addToCartBtn.style.color = "white";
  addToCartBtn.style.fontSize = "16px";
  addToCartBtn.style.cursor = "pointer";
  addToCartBtn.style.transition = "0.3s";

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