import React, {useState} from "react";
import { ReactComponent as AddIcon } from "../components/add.svg";
import { ReactComponent as DarkIcon } from "../components/dark.svg";
import { ReactComponent as ProfileIcon } from "../components/profile.svg";
import { ReactComponent as SettingsIcon } from "../components/settings.svg";
import logo from "../components/whitelogo.png";

export default function (props) {

  return (
    <Navbar>
      <img src={logo} alt="logo" className="logo" />
      <NavItem icon={<AddIcon />}></NavItem>
      <NavItem icon={<DarkIcon />}></NavItem>
      <NavItem icon={<ProfileIcon />}>
        <Dropdown />
      </NavItem>
    </Navbar>
  );
};

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        { props.icon }
      </a>

      { open && props.children }
    </li>
  );
}

function Dropdown() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{ props.icon }</span>
        { props.children }
      </a>
    )
  }

  return (
    <div className="dropdown">
      <DropdownItem icon={<SettingsIcon />}>
        <h1 className="settings">Settings</h1>
      </DropdownItem>
    </div>
  );
}