import React from "react";
import ThemeProvider from "../components/Themeprovider.js";
import ThemeSwitcher from "../components/Themeswitcher.js";

const Home = () => {
  return (
    <ThemeProvider>
      <div className="homepage_wrapper">
        <div className="homepage_navbar navbar navbar-expand-lg">
          <nav>
            <ul>
              <li>
                <p id="logo">TL;DR</p>
              </li>
              <li>
                <ThemeSwitcher />
              </li>
              <li>
                <a href="#">ADD</a>
              </li>
              <li>
                <a href="#">PFP/SETTINGS</a>
              </li>
            </ul>
          </nav>
        </div>
        <p> Hello world! </p>
      </div>
    </ThemeProvider>
  );
};

export default Home;
