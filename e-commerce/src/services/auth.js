const AUTH_STORAGE_KEY = "auth";

export const saveAuth = (authData) => {
  sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
};

export const getAuth = () => {
  const auth = sessionStorage.getItem(AUTH_STORAGE_KEY);

  if (!auth) {
    return null;
  }

  return JSON.parse(auth);
};

export const getToken = () => {
  const auth = getAuth();

  return auth?.token || null;
};

export const getExpiresAt = () => {
  const auth = getAuth();

  return auth?.expiresAt || null;
};

export const isAuthenticated = () => {
  const auth = getAuth();

  if (!auth?.token || !auth?.expiresAt) {
    return false;
  }

  return new Date(auth.expiresAt) > new Date();
};

export const logout = () => {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
};