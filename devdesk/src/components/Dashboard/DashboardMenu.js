import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { DashNav } from "../../helpers";
import { createTicket, viewTickets } from "../../actions";
import ProfileCard from "../ProfileCard";

const DashboardMenu = props => {
  return (
    <DashNav className="dash-panel">
      <ProfileCard />
      <ul>
        <li>
          <Link to="/new-ticket">Create Ticket</Link>
        </li>
        <li>
          <Link to="/my-tickets">My Tickets</Link>
        </li>
        <li>
          <Link to="/tickets">Opened Tickets</Link>
        </li>
        <li>Claimed Tickets</li>
      </ul>
    </DashNav>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { createTicket, viewTickets }
)(DashboardMenu);
