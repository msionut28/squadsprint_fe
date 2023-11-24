// AuthContext.js
'use client'
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState()
  const [user, setUser] = useState(null);
  const [manager, setManager] = useState(false)

  useEffect(() => {
    const authenticated = localStorage.getItem('access_token');
    if (authenticated) setUser(data);
    console.log(manager);
    console.log("this is my data:", data);
  }, [user]);
  
  const login = async (userData) => {
    setData(userData);
    setUser(data)
    console.log(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
