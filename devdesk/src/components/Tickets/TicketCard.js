import React from "react";
import { connect } from "react-redux";

import Dashboard from "../Dashboard/Dashboard";

const TicketCard = props => {
  const ticket = props.tickets.find(
    ticket => `${ticket.id}` === props.match.params.id
  );
  return (
    <Dashboard>
      <h1>{ticket.title}</h1>
    </Dashboard>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

export default connect(mapStateToProps)(TicketCard);
