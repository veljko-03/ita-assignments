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

const RAW_COUPON = "SAVE10";

// Type output
console.log(typeof PRODUCT1_NAME);
console.log(typeof PRODUCT1_PRICE);
console.log(typeof PRODUCT1_QTY);
console.log(typeof VAT_RATE);
console.log(typeof CURRENCY);
console.log(typeof RAW_COUPON);

// Normalizacija kupona
function normalizeCoupon(code) {
  return code.trim().toUpperCase();
}

// Validacija kupona
function validateAndNotify() {
  // #promo-input
  let userInput = document.getElementById("promo-input").value;

  // Normalizuj kupon
  const normalizedInput = normalizeCoupon(userInput);

  if (normalizedInput === RAW_COUPON) {
    alert("Kod je validan.");
  } else {
    alert("Kod nije validan.");
  }
}

// Login
function login() {
  let emailInput = document.getElementById("email").value.trim();
  let passwordInput = document.getElementById("password").value.trim();

  if (emailInput === "admin" && passwordInput === "admin") {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Dodavanje cene
function dodajNaIznos(cena) {
  iznos += cena;
  console.log("Trenutni iznos:", iznos);
}

// Demonstracija rada
/*
Ovo sam stavio kao komentar jer u suprotnom izračunaće ukupan iznos čim se stranica otvori,
što znači da svakim klikom na dugme 'Dodaj u korpu', ukupna cena će se računati počevši od 68.
Ovako, ukupna cena (klikom na dugme) se računa od nule. 
*/
/*
dodajNaIznos(PRODUCT1_PRICE);
dodajNaIznos(PRODUCT2_PRICE);
dodajNaIznos(PRODUCT3_PRICE);
dodajNaIznos(PRODUCT4_PRICE);
*/

// Ukupan iznos
function total() {
  alert("Ukupan iznos je: " + iznos + " " + CURRENCY);
}
