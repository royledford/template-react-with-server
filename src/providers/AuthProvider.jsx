import { createContext, useContext, useMemo, useState, useEffect } from 'react'

const AuthContext = createContext()

/**
 * Authentication provider. Wrap the entire app in this provider to make the
 * auth state available to all components.
 */
const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    setToken_(newToken)
  }

  const removeToken = () => {
    setToken_()
  }

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      removeToken
    }),
    [token]
  )

  // Manage token changes
  useEffect(() => {
    if (token) {
      // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem('token', token)
    } else {
      // delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
    }
  }, [token])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
