const main = document.querySelector("main");

/* =============
      FORM
============= */

const formContainer = document.createElement("div");
formContainer.className = "form-container";

const form = document.createElement("form");
form.className = "form";

// TITLE
const title = document.createElement("h1");
title.className = "form-title";
title.textContent = "Login";

// EMAIL
const emailInput = document.createElement("input");
emailInput.className = "input";

emailInput.type = "email";
emailInput.placeholder = "Enter your email";

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
passwordInput.className = "input";

passwordInput.type = "password";
passwordInput.placeholder = "Enter your password";

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
loginBtn.className = "login-btn";

loginBtn.textContent = "Login";
loginBtn.type = "submit";

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
loginStatus.className = "login-status";
loginStatus.id = "login-status";

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
