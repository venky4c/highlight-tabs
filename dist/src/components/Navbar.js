import React from "react";
import { NavLink } from "react-router-dom";
import Tab from "./Tab";

export default function Navbar() {
  return (
    <div className="tabs">
      <Tab>
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/about" activeClassName="is-active">
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/features" activeClassName="is-active">
          Features
        </NavLink>
      </Tab>
    </div>
  );
}
