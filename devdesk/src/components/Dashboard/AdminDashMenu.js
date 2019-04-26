import React from "react";
import { connect } from "react-redux";

import { DashNav } from "../../helpers";
import { createTicket, viewTickets } from "../../actions";
// import TicketForm from "../Tickets/TicketForm";

const DashboardMenu = props => {
  return (
    <DashNav>
      <ul>
        <li onClick={() => props.createTicket()}>Create Ticket</li>
        <li>My Tickets</li>
        <li>Claimed Tickets</li>
        <li onClick={() => props.viewTickets()}>Opened Tickets</li>
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
