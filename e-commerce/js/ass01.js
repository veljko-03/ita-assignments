// =====================
// OBJEKTI
// =====================

// Proizvodi
const product1 = {
  id: 1,
  name: "Knjiga 1",
  price: 24,
  quantity: 7,
  category: "fantastika"
};

const product2 = {
  id: 2,
  name: "Knjiga 2",
  price: 20,
  quantity: 5,
  category: "triler"
};

const product3 = {
  id: 3,
  name: "Knjiga 3",
  price: 14,
  quantity: 9,
  category: "romansa"
};

const products = [product1, product2, product3];

// Korisnik
const user = {
  username: "janedoe",
  email: "janedoe@gmail.com",
  isLoggedIn: false
};


// Korpa
const cart = {
  items: [],
  totalPrice: 0
};

// =====================
// FUNKCIJE
// =====================

// Provera stanja
const isInStock = (product, qty) => {
  return product.quantity >= qty;
}


// =====================
// TESTS
// =====================

// Ispis objekata
console.log("Proizvodi:", products);
console.log("Korisnik:", user);
console.log("Korpa:", cart);

// Test isInStock
console.log("=== Test isInStock ===");

console.log("Knjiga 1 (traženo 3):", isInStock(product1, 3)); // true
console.log("Knjiga 2 (traženo 5):", isInStock(product2, 5)); // true
console.log("Knjiga 3 (traženo 10):", isInStock(product3, 10)); // false
console.log("Knjiga 1 (traženo 0):", isInStock(product1, 0)); // true