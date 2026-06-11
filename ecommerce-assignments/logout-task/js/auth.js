const logged = localStorage.getItem("logged");
const token = localStorage.getItem("token");
const tokenExpiresAt = localStorage.getItem("tokenExpiresAt");

// Provera da li postoje podaci
if (
  !logged ||
  !token ||
  !tokenExpiresAt ||
  logged !== "true"
) {
  window.location.href = "./login.html";
}

// Provera isteka tokena
const now = new Date();
const expiresAt = new Date(tokenExpiresAt);

if (now > expiresAt) {
  localStorage.removeItem("logged");
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiresAt");

  window.location.href = "./login.html";
}