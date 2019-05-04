import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteTicket } from "../../actions";

const TicketItem = props => {
  return (
    <div className="ticket-item">
      <div className="top-section">
        <div className="status">
          <p>#{props.id}</p>
          <p>{props.resolved ? "Closed" : "Open"}</p>
        </div>
        <Link to={`/tickets/${props.id}`}>
          <div className="ticket-info">
            <h1 className="ticket-title">{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </Link>
      </div>
      <div className="bottom-section">
        <div className="buttons">
          {props.userRole ? (
            props.assigned ? (
              <button
                onClick={() => props.assignTicket(props.id, props.ticket)}
              >
                Assign to List
              </button>
            ) : (
              <button
                onClick={() => props.assignTicket(props.id, props.ticket)}
              >
                Claim Ticket
              </button>
            )
          ) : null}
          <button onClick={() => props.deleteTicket(props.id)}>✘</button>
        </div>
        <div className="meta-tags">
          <p> {props.createdBy}</p>
          <p>Topic: {props.category}</p>
          <p>{props.assigned ? "Assigned" : "Not Assigned"}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { deleteTicket }
)(TicketItem);
