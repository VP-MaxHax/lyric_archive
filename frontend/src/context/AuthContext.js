import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => setUser(response.data))
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const login = async (username, password) => {
    const response = await axios.post('/api/auth/login', { username, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    const userResponse = await axios.get('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } });
    setUser(userResponse.data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };