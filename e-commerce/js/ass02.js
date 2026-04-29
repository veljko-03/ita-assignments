/* ===============
      KLASE
================== */

class Product {
  #quantity;

  constructor(id, name, price, quantity, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.#quantity = quantity;
    this.category = category;
  }

  // getter
  get quantity() {
    return this.#quantity;
  }

  // smanjenje stanja
  decreaseStock(qty) {
    if (qty <= 0) {
      console.log("Količina mora biti veća od 0.");
      return;
    }

    if (this.#quantity >= qty) {
      this.#quantity -= qty;
    } else {
      console.log(`Nema dovoljno proizvoda: ${this.name}`);
    }
  }

  // povećanje stanja
  increaseStock(qty) {
    if (qty <= 0) {
      console.log("Količina mora biti veća od 0.");
      return;
    }

    this.#quantity += qty;
  }
}

class User {
  #isLoggedIn;

  constructor(username, email, isLoggedIn) {
    this.username = username;
    this.email = email;
    this.#isLoggedIn = isLoggedIn;
  }

  // getter
  get isLoggedIn() {
    return this.#isLoggedIn;
  }

  // prijava
  login() {
    this.#isLoggedIn = true;
    console.log(`${this.username} je prijavljen.`);
  }

  // odjava
  logout() {
    this.#isLoggedIn = false;
    console.log(`${this.username} je odjavljen.`);
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }
}

/* ===============
      OBJEKTI
================== */

// Proizvodi
const product1 = new Product(1, "Tajna vatra", 20, 10, "fantastika");
const product2 = new Product(2, "Hamlet", 15, 5, "drama");
const product3 = new Product(3, "Ledeni zmaj", 25, 8, "fantastika");

const products = [product1, product2, product3];

// Korisnik
const user = new User(
  "janedoe",
  "janedoe@gmail.com",
  true
);

// Korpa
const cart = new Cart();

/* ===============
      TESTS
================== */

console.log("=== PRODUCTS ===");
console.log(products);

console.log("=== USER ===");
console.log(user);

console.log("=== CART ===");
console.log(cart);

// količina proizvoda
console.log("=== KOLIČINA ===");

console.log("Inicijalna količina: ", product1.quantity)

product1.decreaseStock(3);
console.log("Količina -3: ", product1.quantity)

product1.increaseStock(2);
console.log("Količina +2: ", product1.quantity)

// prijava i odjava
console.log("=== LOGIN TEST ===");

console.log("Početni status:", user.isLoggedIn);

user.logout();
console.log("Posle logout:", user.isLoggedIn);

user.login();
console.log("Posle login:", user.isLoggedIn);
