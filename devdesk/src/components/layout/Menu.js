import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { toggleAdmin } from "../../actions";
import { MenuH1, MenuNav } from "../../helpers/index";

const Menu = props => {
  const toggleAdmin = () => {
    props.toggleAdmin();
  };
  return (
    <MenuNav>
      <div>
        <MenuH1>DevDesk Queue</MenuH1>
      </div>
      <div>
        <input
          onChange={toggleAdmin}
          type="checkbox"
          name="isAdmin"
          id="isAdmin"
        />
        <NavLink to="/tickets">Tickets</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Login">Login</NavLink>
      </div>
    </MenuNav>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { toggleAdmin }
)(Menu);
