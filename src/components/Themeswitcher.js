import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider.js";
import { ReactComponent as DarkIcon } from "../components/dark.svg";
import { ReactComponent as LightIcon } from "../components/light.svg";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <DarkIcon />
      ) : (
        <LightIcon />
      )}
    </button>
  );
};

export default ThemeSwitcher;
