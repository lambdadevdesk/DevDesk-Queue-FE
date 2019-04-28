import React from "react";
import { Link } from "react-router-dom";

const TicketItem = props => {
  return (
    <div className="ticket-item">
      <Link to={`/tickets/${props.id}`}>
        <h1>{props.title}</h1>
        <p>{props.category}</p>
        <p>{props.description}</p>
        <p>{props.assigned ? "Assigned" : "Not Assigned"}</p>
      </Link>
      {props.userRole ? (
        props.assigned ? (
          <button onClick={() => props.assignTicket(props.id)}>
            Assign to List
          </button>
        ) : (
          <button onClick={() => props.assignTicket(props.id)}>
            Claim Ticket
          </button>
        )
      ) : null}
      <button onClick={() => props.deleteTicket(props.id)}>✘</button>
    </div>
  );
};

export default TicketItem;
