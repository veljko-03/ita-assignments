const products = [
  {
    id: 1,
    name: "Blazer",
    price: 95,
    currency: "$",
    category: "Jackets",
    image: "images/blazer.png",
    inStock: true,
  },
  {
    id: 2,
    name: "Elegant A-line trousers",
    price: 72,
    currency: "$",
    category: "Trousers",
    image: "images/aline-trousers.png",
    inStock: true,
  },
  {
    id: 3,
    name: "Midi Coat",
    price: 105,
    currency: "$",
    category: "Coats",
    image: "images/midi-coat.png",
    inStock: true,
  },
  {
    id: 4,
    name: "Wool Blazer",
    price: 55,
    currency: "$",
    category: "Jackets",
    image: "images/wool-blazer.png",
    inStock: true,
  },
  {
    id: 5,
    name: "Wool Pink Blazer",
    price: 75,
    currency: "$",
    category: "Jackets",
    image: "images/pink-wool-blazer.png",
    inStock: false,
  },
  {
    id: 6,
    name: "Retro Jeans",
    price: 77,
    currency: "$",
    category: "Jeans",
    image: "images/retro-jeans.png",
    inStock: true,
  },
  {
    id: 7,
    name: "Belted Coat",
    price: 95,
    currency: "$",
    category: "Coats",
    image: "images/belted-coat.png",
    inStock: true,
  },
  {
    id: 8,
    name: "Elegant Trousers",
    price: 28,
    currency: "$",
    category: "Trousers",
    image: "images/elegant-trousers.png",
    inStock: false,
  },
  {
    id: 9,
    name: "High-Waist Trousers",
    price: 30,
    currency: "$",
    category: "Trousers",
    image: "images/high-waist-trousers.png",
    inStock: true,
  },
  {
    id: 10,
    name: "High-Waist Black Trousers",
    price: 30,
    currency: "$",
    category: "Trousers",
    image: "images/black-trousers.png",
    inStock: false,
  },
  {
    id: 11,
    name: "Chunky Knit Sweater",
    price: 55,
    currency: "$",
    category: "Sweater",
    image: "images/knit-sweater.png",
    inStock: true,
  },
];

const productsSection = document.getElementById("products");

products.forEach((product) => {
  if (!product.inStock) {
    return;
  }

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.classList.add("product-img");
  productImg.src = product.image;
  productImg.alt = product.name;

  const productTitle = document.createElement("p");
  productTitle.classList.add("product-title");
  productTitle.textContent = product.name;

  const priceRow = document.createElement("div");
  priceRow.classList.add("price-row");

  const price = document.createElement("span");
  price.classList.add("price");
  price.textContent = `${product.currency}${product.price}`;

  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Add to Cart";

  priceRow.appendChild(price);

  productCard.appendChild(productImg);
  productCard.appendChild(productTitle);
  productCard.appendChild(priceRow);
  productCard.appendChild(button);

  productsSection.appendChild(productCard);
});
