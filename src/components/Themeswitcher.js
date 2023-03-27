import React, { useContext } from "react";
import { ThemeContext } from "./Themeprovider";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <img src= {process.env.PUBLIC_URL + "/images/darkmode.png"} alt="goto dark theme" style={{ width: '20px', height: '20px', filter: 'brightness(0.5)' }}/> 
      ) : (
        <img src="../images/lightmode.png" alt="goto light theme" style={{ width: '20px', height: '20px', filter: 'brightness(0.5)' }} />
      )}
    </button>
  );
};

export default ThemeSwitcher;

