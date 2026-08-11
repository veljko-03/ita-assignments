const REGISTER_URL = import.meta.env.VITE_REGISTER_URL;
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;
const USERS_URL = import.meta.env.VITE_USERS_URL;

const API_KEY = import.meta.env.VITE_API_KEY;

export const registerUser = async ({ email, password }) => {
  const response = await fetch(REGISTER_URL, {
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

export const getUsers = async () => {
  const response = await fetch(USERS_URL, {
    method: "GET",
    headers: {
      "X-API-Key": API_KEY,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data?.message ||
      data?.error ||
      "Failed to fetch users."
    )
  }

  return data
};