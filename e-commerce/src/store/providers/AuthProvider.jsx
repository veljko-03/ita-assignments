import { useState } from "react"

import { AuthContext } from "../context/AuthContext"
import {
  getAuth,
  isAuthValid,
  removeAuth,
  saveAuth,
} from "../../services/auth"

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    if (isAuthValid()) {
      return getAuth()
    }

    removeAuth()
    return null
  })

  const login = (authData) => {
    saveAuth(authData)
    setAuth(authData)
  }

  const logout = () => {
    removeAuth()
    setAuth(null)
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuthenticated: auth !== null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider