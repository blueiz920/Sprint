// src/contexts/AuthContext.tsx

"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    // value => 아무 컴포넌트에서 쓸 수 있게 내보내기 하는 용도
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//근데 isAuthenticated, login, logout를 쓸 때
//무조건 Provider 안에서만 가져다 쓸 수 있음
//외부에 있으면 못씀,

export const useAuth = () => {
  const context = useContext(AuthContext);
  // context = {isAuthenticated, login, logout}

  // Provider 밖에서 useContext를 쓸 때
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
