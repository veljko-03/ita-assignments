const main = document.querySelector("main");

/* =============
      FORM
============= */

const formContainer = document.createElement("div");

formContainer.style.maxWidth = "450px";
formContainer.style.margin = "60px auto";
formContainer.style.backgroundColor = "white";
formContainer.style.padding = "30px";
formContainer.style.borderRadius = "16px";
formContainer.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

const form = document.createElement("form");

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "20px";

// TITLE
const title = document.createElement("h1");

title.textContent = "Login";

title.style.textAlign = "center";
title.style.color = "#111";

// EMAIL
const emailInput = document.createElement("input");

emailInput.type = "email";
emailInput.placeholder = "Enter your email";

emailInput.style.padding = "14px";
emailInput.style.border = "1px solid #ccc";
emailInput.style.borderRadius = "10px";
emailInput.style.fontSize = "16px";
emailInput.style.outline = "none";

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    loginStatus.textContent = "";
  }
});

emailInput.addEventListener("change", () => {
  emailInput.style.border = "2px solid #2563eb";
});

// PASSWORD INPUT
const passwordInput = document.createElement("input");

passwordInput.type = "password";
passwordInput.placeholder = "Enter your password";

passwordInput.style.padding = "14px";
passwordInput.style.border = "1px solid #ccc";
passwordInput.style.borderRadius = "10px";
passwordInput.style.fontSize = "16px";
passwordInput.style.outline = "none";

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim() !== "") {
    loginStatus.textContent = "";
  }
});

passwordInput.addEventListener("change", () => {
  passwordInput.style.border = "2px solid #2563eb";
});

// LOGIN BUTTON
const loginBtn = document.createElement("button");

loginBtn.textContent = "Login";

loginBtn.type = "submit";

loginBtn.style.padding = "14px";
loginBtn.style.border = "none";
loginBtn.style.borderRadius = "10px";
loginBtn.style.backgroundColor = "#111";
loginBtn.style.color = "white";
loginBtn.style.fontSize = "16px";
loginBtn.style.cursor = "pointer";
loginBtn.style.transition = "0.3s";

loginBtn.addEventListener("click", () => {
  loginBtn.style.transform = "scale(0.98)";
});

loginBtn.addEventListener("mouseenter", () => {
  loginBtn.style.backgroundColor = "#333";
});

loginBtn.addEventListener("mouseleave", () => {
  loginBtn.style.backgroundColor = "#111";
  loginBtn.style.transform = "scale(1)";
});

// LOGIN STATUS
const loginStatus = document.createElement("p");

loginStatus.id = "login-status";

loginStatus.style.textAlign = "center";
loginStatus.style.fontWeight = "bold";
loginStatus.style.fontSize = "15px";

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // BOTH EMPTY
  if (emailValue === "" && passwordValue === "") {
    loginStatus.textContent = "Please, enter email and password";
    loginStatus.style.color = "red";
    return;
  }

  // EMAIL EMPTY
  if (emailValue === "") {
    loginStatus.textContent = "Please, enter email.";
    loginStatus.style.color = "red";
    return;
  }

  // PASSWORD TOO SHORT
  if (passwordValue.length < 6) {
    loginStatus.textContent = "Password must contain at least 6 characters.";
    loginStatus.style.color = "red";
    return;
  }

  // SUCCESS
  loginStatus.textContent = "Login successful. Welcome!";
  loginStatus.style.color = "green";
});

// APPEND ELEMENTS
form.appendChild(title);
form.appendChild(emailInput);
form.appendChild(passwordInput);
form.appendChild(loginBtn);
form.appendChild(loginStatus);

formContainer.appendChild(form);
main.appendChild(formContainer);
