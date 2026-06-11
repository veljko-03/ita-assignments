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
const usernameInput = document.createElement("input");
usernameInput.className = "input";

usernameInput.type = "text";
usernameInput.placeholder = "Enter your username";

usernameInput.addEventListener("input", () => {
  if (usernameInput.value.trim() !== "") {
    loginStatus.textContent = "";
  }
});

usernameInput.addEventListener("change", () => {
  usernameInput.style.border = "2px solid #2563eb";
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
loginBtn.classList.add(
  "btn",
  "login-submit-btn"
);

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
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  try {
    const response = await fetch(
      "https://api.advanziaeducation.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "X-API-Key": "05bce3c3b87a319f44cdd405aa1e03019f41d38c49c64436a82198a6a36daf51",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();

    // Login succesful
    if (data.token) {
      localStorage.setItem("logged", "true");
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "tokenExpiresAt",
        data.expiresAt
      );

      loginStatus.textContent =
        "Login successful. Welcome!";
      loginStatus.style.color = "green";

      return;
    }

    // Login failed
    if (data.error) {
      localStorage.setItem("logged", "false");

      loginStatus.textContent = data.error;
      loginStatus.style.color = "red";
    }
  } catch (error) {
    localStorage.setItem("logged", "false");

    loginStatus.textContent =
      "An error occurred. Please try again.";
    loginStatus.style.color = "red";
  }
});

// APPEND ELEMENTS
form.appendChild(title);
form.appendChild(usernameInput);
form.appendChild(passwordInput);
form.appendChild(loginBtn);
form.appendChild(loginStatus);

formContainer.appendChild(form);
main.appendChild(formContainer);
