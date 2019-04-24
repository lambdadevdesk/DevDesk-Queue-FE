import React from "react";
import { connect } from "react-redux";

import TicketItem from "./TicketItem";

const TicketList = props => {
  return (
    <div>
      {props.tickets.map(ticket => (
        <TicketItem
          key={ticket.id}
          title={ticket.title}
          category={ticket.category}
          description={ticket.description}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

export default connect(mapStateToProps)(TicketList);
