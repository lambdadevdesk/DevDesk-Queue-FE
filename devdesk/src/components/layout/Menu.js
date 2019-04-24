import React from "react";

import { NavLink } from "react-router-dom";
import { MenuH1, MenuNav } from "../../helpers/index";

const Menu = () => {
  return (
    <MenuNav>
      <div>
        <MenuH1>DevDesk Queue</MenuH1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/Login">Login</NavLink>
      </div>
    </MenuNav>
  );
};

export default Menu;
