const API_URL = import.meta.env.VITE_CART_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const sendCart = async ({ userId, products }) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      products,
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
      data?.message ||
        data?.error ||
        "Failed to send cart.",
    );
  }

  return data;
};