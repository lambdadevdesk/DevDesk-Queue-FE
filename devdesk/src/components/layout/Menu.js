import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { MenuH1, MenuNav } from "../../helpers/index";

const Menu = props => {
  return (
    <MenuNav>
      <div>
        <MenuH1>DevDesk Queue</MenuH1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">{props.isLoggedIn ? "Logout" : "Login"}</NavLink>
      </div>
    </MenuNav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(Menu);
