import React, { useContext } from "react";
import { ThemeContext } from "./Themeswitcher.js";

const ComponentWithTheme = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
  };

  return <div style={styles}>Component with theme</div>;
};

export default ComponentWithTheme;
