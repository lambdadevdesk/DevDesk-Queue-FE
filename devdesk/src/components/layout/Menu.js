import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #bb1333;
  padding: 1.6rem 0;
`;

const SH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-left: 2rem;
`;

const StyledNavLink = props => {
  return (
    <NavLink
      to={props.to}
      style={{ color: `#fff`, fontSize: `1.2rem`, margin: `0 1rem` }}
    >
      {props.children}
    </NavLink>
  );
};

const Menu = () => {
  return (
    <SNav>
      <div>
        <SH1>DevDesk Queue</SH1>
      </div>
      <div>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/Login">Login</StyledNavLink>
      </div>
    </SNav>
  );
};

export default Menu;
