import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../actions";
import { MenuH1, MenuNav } from "../../helpers/index";

const Menu = props => {
  return (
    <MenuNav>
      <div>
        <MenuH1>DevDesk Queue</MenuH1>
      </div>
      <div>
        <NavLink to="/tickets">Home</NavLink>
        <NavLink onClick={() => props.logout()} to="/">
          {props.isLoggedIn ? "Logout" : "Login"}
        </NavLink>
      </div>
    </MenuNav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Menu);
