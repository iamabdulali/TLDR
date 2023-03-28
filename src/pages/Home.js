import React, { useState, useEffect } from "react";
import { ReactComponent as AddIcon } from "../components/add.svg";
import { ReactComponent as DarkIcon } from "../components/dark.svg";
import { ReactComponent as LightIcon } from "../components/light.svg";
import { ReactComponent as ProfileIcon } from "../components/profile.svg";
import { ReactComponent as SettingsIcon } from "../components/settings.svg";

export default function (props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set the initial theme based on whether "dark-mode" is already set in localStorage
  useEffect(() => {
    const isDarkModeSet = localStorage.getItem("dark-mode");
    setIsDarkMode(!!isDarkModeSet);
  }, []);

  // Set the theme when the mode is toggled
  const handleToggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("dark-mode", newIsDarkMode);
  };

  return (
    <Navbar>
      <h1 className="logo">TLDR</h1>
      <NavItem icon={<AddIcon />}></NavItem>
      <NavItem
        icon={isDarkMode ? <LightIcon /> : <DarkIcon />}
        onClick={handleToggleTheme}
      ></NavItem>
      <NavItem icon={<ProfileIcon />}>
        <Dropdown />
      </NavItem>
    </Navbar>
  );
}

function Home(props) {
  return (
    <div className="body">
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => {
          setOpen(!open);
          props.onClick && props.onClick();
        }}
      >
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function Dropdown() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.icon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
        <h1 className="signout">Sign Out</h1>
    </div>
  );
}