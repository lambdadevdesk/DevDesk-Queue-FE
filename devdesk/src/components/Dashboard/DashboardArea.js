import React from "react";

import TicketForm from "../Tickets/TicketForm";
import TicketList from "../Tickets/TicketList";

const DashboardArea = props => {
  return (
    <div className="dash-main">
      {props.creatingTicket ? <TicketForm /> : <TicketList />}
    </div>
  );
};

export default DashboardArea;
