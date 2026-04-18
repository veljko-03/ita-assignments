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
// TEST ISPIS
// =====================

console.log("Proizvodi:", products);
console.log("Korisnik:", user);
console.log("Korpa:", cart);