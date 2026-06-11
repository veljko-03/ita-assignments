const logged = localStorage.getItem("logged");
const token = localStorage.getItem("token");
const tokenExpiresAt = localStorage.getItem("tokenExpiresAt");

// Check data
if (!logged || !token || !tokenExpiresAt || logged !== "true") {
  console.log("Nedostaju podaci za autentikaciju.");

  window.location.href = "./login.html";
}

// Dates
const now = new Date();
const expiresAt = new Date(tokenExpiresAt);

console.log("Trenutno vreme:", now);
console.log("Vreme isteka:", expiresAt);

// Already expired token
if (now >= expiresAt) {
  console.log("Token je već istekao. Logout...");

  localStorage.removeItem("logged");
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiresAt");

  localStorage.setItem(
    "logoutReason",
    "expired"
  );

  window.location.href = "./login.html";
}

// Remaining time
const remainingTime = expiresAt.getTime() - now.getTime();

console.log("Preostalo vreme (ms):", remainingTime);

console.log("Preostalo vreme (sek):", Math.floor(remainingTime / 1000));

// Auto logout
setTimeout(() => {
  console.log("Istek vremena. Pokrećem logout...");

  localStorage.removeItem("logged");
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiresAt");

  localStorage.setItem(
    "logoutReason",
    "expired"
  );

  window.location.href = "./login.html";
}, remainingTime);

// Logout sync between tabs
window.addEventListener("storage", (event) => {
  if (event.key === "logged" && event.newValue !== "true") {
    console.log("Logout detected in another tab");

    window.location.href = "./login.html";
  }

  if (event.key === "tokenExpiresAt" && !event.newValue) {
    console.log("Token removed in another tab");

    window.location.href = "./login.html";
  }
});