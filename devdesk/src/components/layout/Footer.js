import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const SFooter = styled.footer`
  text-align: center;
  background: #f7f7f7;
  padding: 1.6rem 0;
`;

const Footer = () => {
  return (
    <SFooter>
      &copy; <NavLink>Lambda DevDesk </NavLink> 2019. All Rights Reserved.
    </SFooter>
  );
};

export default Footer;
