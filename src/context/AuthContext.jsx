import React, { createContext, useContext, useEffect, useState } from 'react'

// Create context
const AuthContext = createContext()

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lux_user')) || null
    } catch {
      return null
    }
  })

  // Persist user state in localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('lux_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('lux_user')
    }
  }, [user])

  // Auth actions
  const signIn = ({ phone }) => {
    // Later you can add backend validation here
    setUser({ phone })
  }

  const signUp = ({ phone, title = '', firstName = '', lastName = '' }) => {
    setUser({ phone, title, firstName, lastName })
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('lux_user')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)
