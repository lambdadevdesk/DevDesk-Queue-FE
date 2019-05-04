import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteTicket } from "../../actions";

const TicketItem = props => {
  return (
    <div className="ticket-item">
      <div className="top-section">
        <div className="status">
          <p className="status-number">#{props.id}</p>
          <p
            className="status-resolved"
            style={
              props.resolved ? { background: `red` } : { background: `green` }
            }
          >
            {props.resolved ? "Closed" : "Open"}
          </p>
        </div>
        <div className="ticket-info">
          <Link to={`/tickets/${props.id}`}>
            <h1 className="ticket-title">{props.title}</h1>
          </Link>
          <p className="ticket-description">{props.description}</p>
        </div>
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
          <div>
            <p> {props.assignedUser}</p>
          </div>
          <div>
            <p>Created by:</p>
            <p> {props.createdBy}</p>
          </div>
          <div>
            <p>Category:</p>
            <p>{props.category}</p>
          </div>
          <div>
            <p>{props.assigned ? "Assigned" : "Not Assigned"}</p>
          </div>
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
