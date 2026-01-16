import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    // You can also store a token if needed. Implement JWT or similar auth mechanism.
    // localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // localStorage.removeItem("token");
  };
  return (
    <AuthContext value={{ user, login, logout, loading }}>
      {children}
    </AuthContext>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
