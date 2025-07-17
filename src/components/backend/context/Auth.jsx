import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => { 
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  
  const [user, setUser] = useState(userInfo);

  const login = (user) => {
    localStorage.setItem('userInfo', JSON.stringify(user));
    setUser(user);
  }

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
  
};
