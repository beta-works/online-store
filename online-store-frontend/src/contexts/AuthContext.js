import React, { createContext, useState } from 'react';
import { registerUser, loginUser, logoutUser, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const register = async (name, email, password) => {
    try {
      const userData = await registerUser({ name, email, password });
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  const login = async (email, password) => {
    try {
      const userData = await loginUser({ email, password });
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, fetchCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
