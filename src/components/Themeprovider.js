import React, { createContext, useState } from "react";

import lightLogo from "./whitelogo.png";
import darkLogo from "./blacklogo.png";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [logo, setLogo] = useState(lightLogo); // move inside component

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setLogo(theme === 'light' ? darkLogo : lightLogo);
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
