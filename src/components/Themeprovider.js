import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeStyles = {
    light: {
      backgroundColor: "#fff",
      color: "#333",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
