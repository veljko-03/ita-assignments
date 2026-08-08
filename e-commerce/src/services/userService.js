const API_URL = "https://api.advanziaeducation.com/users";
const LOGIN_URL = "https://api.advanziaeducation.com/auth/login";

const API_KEY =
  "d7534cbd9ee8a1d277508f05318830010270e1c3699cacf82f8ec53f79b486a2";

export const registerUser = async ({ email, password }) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({
      username: email,
      email,
      password,
    }),
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    //
  }

  if (!response.ok) {
    throw new Error(
      data?.message || data?.error || "Registration failed."
    );
  }

  return data;
};

export const loginUser = async ({ email, password }) => {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({
      username: email,
      password,
    }),
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    //
  }

  if (!response.ok) {
    throw new Error(
      data?.message || data?.error || "Login failed."
    );
  }

  return data;
};