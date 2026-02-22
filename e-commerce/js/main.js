// Definisanje konstanti/promenljivih

const PRODUCT1_NAME = "Knjiga 1";
const PRODUCT1_PRICE = 899;
const PRODUCT1_QTY = 2;

const PRODUCT2_NAME = "Knjiga 2";
const PRODUCT2_PRICE = 999;
const PRODUCT2_QTY = 3;

const VAT_RATE = 0.2;
const CURRENCY = "EUR";
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
  // uklanjanje razmaka
  let trimmed = code.trim();
  
  // pretvaranje u velika slova
  let uppercased = trimmed.toUpperCase();
  
  // vraćanje modifikovanog kupona
  return uppercased;
}

console.log(normalized);
console.log(typeof normalized);
