import React, { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
    </div>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContextが未定義です");
  }

  return context;
};

export { ThemeProvider, useTheme };
