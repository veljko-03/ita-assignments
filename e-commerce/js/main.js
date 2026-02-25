// Definisanje varijabla

let iznos = 0;

const PRODUCT1_NAME = "Knjiga 1";
const PRODUCT1_PRICE = 24;
const PRODUCT1_QTY = 2;

const PRODUCT2_NAME = "Knjiga 2";
const PRODUCT2_PRICE = 20;
const PRODUCT2_QTY = 3;

const PRODUCT3_PRICE = 14;
const PRODUCT4_PRICE = 10;

const VAT_RATE = 0.2;
const CURRENCY = "USD";
const USD_PER_EUR = 1.16;

const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

const allProducts = [
  {
    name: "Knjiga 1",
    price: 24,
    qty: 7
  },
  {
    name: "Knjiga 2",
    price: 20,
    qty: 5
  },
  {
    name: "Knjiga 3",
    price: 14,
    qty: 9
  },
  {
    name: "Knjiga 4",
    price: 10,
    qty: 4
  },
  {
    name: "Knjiga 5",
    price: 18,
    qty: 6
  },
  {
    name: "Knjiga 6",
    price: 22,
    qty: 3
  },
  {
    name: "Knjiga 7",
    price: 12,
    qty: 7
  },
  {
    name: "Knjiga 8",
    price: 10,
    qty: 10
  },
  {
    name: "Knjiga 9",
    price: 7,
    qty: 3
  },
  {
    name: "Knjiga 10",
    price: 15,
    qty: 10
  }
];

// Type output
console.log(typeof PRODUCT1_NAME);
console.log(typeof PRODUCT1_PRICE);
console.log(typeof PRODUCT1_QTY);
console.log(typeof VAT_RATE);
console.log(typeof CURRENCY);
console.log(VALID_COUPONS);

// Normalizacija kupona
function normalizeCoupon(code) {
  return code.trim().toUpperCase();
}

// Da li je kupon validan
function isValidCoupon(code) {
  return VALID_COUPONS.includes(code);
}

// Validacija kupona i obaveštenje
function validateAndNotify() {
  let userInput = document.getElementById("promo-input").value;
  const normalizedInput = normalizeCoupon(userInput);

  if (isValidCoupon(normalizedInput)) {

    if (normalizedInput === "SAVE10") {
      alert("Vaš kupon donosi 10% popusta.");
    } 
    else if (normalizedInput === "SAVE15") {
      alert("Vaš kupon donosi 15% popusta.");
    } 
    else if (normalizedInput === "FREESHIP") {
      alert("Vaš kupon donosi besplatnu dostavu.");
    }

  } else {
    alert("Kod nije validan.");
  }
}

// Login
function login(email, password) {
  // Ako parametri nisu prosleđeni, uzmi ih iz HTML-a
  if (email === undefined && password === undefined) {
    email = document.getElementById("email").value.trim();
    password = document.getElementById("password").value.trim();
  }

  if (email === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
}

// Prikaz login rezultata
function handleLogin() {
  const rezultat = login();

  if (rezultat) {
    alert("Uspešno ste se ulogovali.");
  } else {
    alert("Pogrešan email ili lozinka.");
  }
}

// Dodavanje cene
function dodajNaIznos(cena) {
  iznos += cena;
  console.log("Trenutni iznos:", iznos);
}

// Demonstracija rada
dodajNaIznos(PRODUCT1_PRICE);
dodajNaIznos(PRODUCT2_PRICE);
dodajNaIznos(PRODUCT3_PRICE);
dodajNaIznos(PRODUCT4_PRICE);

// Reset iznosa
iznos = 0;

// Ukupan iznos
function openCart() {
  alert("Ukupan iznos je: " + iznos + " " + CURRENCY);
}

// Ukupna vrednost lagera
function calculateTotalInventoryValue() {
  let totalValue = 0;

  for (let product of allProducts) {
    totalValue += product.price * product.qty;
  }

  console.log("Ukupna vrednost lagera: " + totalValue + " USD");
}

calculateTotalInventoryValue();

// Niz proizvoda sa qty < 10
const lowStock = allProducts.filter(product => product.qty < 10);

console.log("Proizvodi sa lagerom manjim od 10:");
console.log(lowStock);

// Pretraga
function findProductByName(list, searchName) {
  const lowerSearch = searchName.toLowerCase();
  const found = list.find(product => product.name.toLowerCase() === lowerSearch);

  return found || null;
}

console.log(findProductByName(allProducts, "Knjiga 1"));
console.log(findProductByName(allProducts, "knjiga 5"));
console.log(findProductByName(allProducts, "KNJIGA 10"));
console.log(findProductByName(allProducts, "NePostoji"));
