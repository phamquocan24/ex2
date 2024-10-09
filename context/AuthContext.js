// context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap around the app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = ({ phoneNumber }) => {
    setUser({ phoneNumber });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}
