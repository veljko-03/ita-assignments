const womenBtn = document.getElementById("women-btn");
const kidsBtn = document.getElementById("kids-btn");
const menBtn = document.getElementById("men-btn");

womenBtn.addEventListener("click", () => {
  window.location.href = "shop.html?category=women";
});

kidsBtn.addEventListener("click", () => {
  window.location.href = "shop.html?category=kids";
});

menBtn.addEventListener("click", () => {
  window.location.href = "shop.html?category=men";
});