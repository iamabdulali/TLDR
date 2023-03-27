import React from 'react';
import Themeprovider from "./Themeprovider";
import ThemeSwitcher from "./Themeswitcher";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
