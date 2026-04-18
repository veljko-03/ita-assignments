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

// Dodaj u korpu
const addToCart = (cart, product, qty) => {
  // provera da li ima dovoljno na stanju
  if (!isInStock(product, qty)) {
    console.log(`Nema dovoljno proizvoda: ${product.name}`);
    return;
  }

  // da li već postoji u korpi
  const existingItem = cart.items.find(item => item.id === product.id);

  // ako postoji povećaj količinu, ako ne dodaj
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: qty
    });
  }

  // smanji stanje
  product.quantity -= qty;

  cart.totalPrice = calculateTotal(cart);

  console.log(`Dodat proizvod: ${product.name} (količina: ${qty})`);
}

// Ukupan iznos korpe
const calculateTotal = (cart) => {
  let total = 0;

  for (let item of cart.items) {
    total += item.price * item.quantity;
  }

  return total;
}

// Izbaci iz korpe
const removeFromCart = (cart, productId) => {
  const index = cart.items.findIndex(item => item.id === productId);

  if (index === -1) {
    console.log("Proizvod ne postoji u korpi.");
    return;
  }

  const removedItem = cart.items[index];
  const originalProduct = products.find(p => p.id === productId);

  if (originalProduct) {
    originalProduct.quantity += removedItem.quantity;
  }

  // ukloni iz korpe
  cart.items.splice(index, 1);

  cart.totalPrice = calculateTotal(cart);

  console.log(`Uklonjen proizvod: ${removedItem.name}`);
}

// Jeftini proizvodi
const getCheapProducts = (products, limit) => {
  return products.filter(product => product.price < limit);
};

// Pretraga po kategoriji
const getProductsByCategory = function(products, category) {
  return products.filter(function(p) {
    return p.category === category;
  });
};

// =====================
// TESTS
// =====================

// -- Ispis objekata
console.log("Proizvodi:", products);
console.log("Korisnik:", user);
console.log("Korpa:", cart);

// -- Test isInStock
console.log("=== Test isInStock ===");

console.log("Knjiga 1 (traženo 3):", isInStock(product1, 3)); // true
console.log("Knjiga 2 (traženo 5):", isInStock(product2, 5)); // true
console.log("Knjiga 3 (traženo 10):", isInStock(product3, 10)); // false
console.log("Knjiga 1 (traženo 0):", isInStock(product1, 0)); // true

// -- Test addToCart
console.log("=== Test addToCart ===");

// prvo dodavanje
addToCart(cart, product1, 2);

// dodavanje istog proizvoda ponovo
addToCart(cart, product1, 3);

// dodavanje drugog proizvoda
addToCart(cart, product2, 1);

// pokušaj dodavanja više nego što ima
addToCart(cart, product2, 10);

addToCart(cart, product3, 0);

// -- Test calculateTotal
console.log("=== Test calculateTotal ===");

// prazna korpa
const emptyCart = { items: [], totalPrice: 0 };
console.log("Prazna korpa:", calculateTotal(emptyCart)); // 0

// nakon dodavanja
addToCart(cart, product1, 2);
addToCart(cart, product2, 1);

console.log("Izračunat ukupan iznos:", calculateTotal(cart));

// -- Test removeFromCart
console.log("=== Test removeFromCart ===");

// prvo dodavanje
addToCart(cart, product1, 2);
addToCart(cart, product2, 1);

console.log("Pre uklanjanja:", cart);

// uklanjanje postojećeg proizvoda
removeFromCart(cart, 1);

console.log("Posle uklanjanja:", cart);

// pokušaj uklanjanja nepostojećeg proizvoda
removeFromCart(cart, 999);

// provera da li je vraćena količina
console.log("Stanje proizvoda nakon vraćanja:");
console.log(product1);
console.log(product2);

// -- Test getCheapProducts
console.log("=== Test getCheapProducts ===");

// proizvodi jeftiniji od 21
console.log("Proizvodi jeftiniji od 21:");
console.log(getCheapProducts(products, 21));

// proizvodi jeftiniji od 15
console.log("Proizvodi jeftiniji od 15:");
console.log(getCheapProducts(products, 15));

// -- Test getProductsByCategory
console.log("=== Test getProductsByCategory ===");

// postojeća kategorija
console.log("Kategorija FANTASTIKA:")
console.log(getProductsByCategory(products, "fantastika"));

// druga kategorija
console.log("Kategorija TRILER:")
console.log(getProductsByCategory(products, "triler"));

// nepostojeća kategorija
console.log("Nepostojeća kategorija:")
console.log(getProductsByCategory(products, "nauka"));