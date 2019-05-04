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
                Unclaim
              </button>
            ) : (
              <button
                onClick={() => props.assignTicket(props.id, props.ticket)}
              >
                Claim
              </button>
            )
          ) : null}
          <button onClick={() => props.deleteTicket(props.id)}>Delete</button>
        </div>
        <div className="meta-tags">
<<<<<<< HEAD
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
=======
          <p>Posted by: {props.createdBy}</p>
          <p>Topic: {props.category}</p>
          <p>{props.assigned ? "Assigned" : "Not Assigned"}</p>
>>>>>>> fbc7c50c0f45bc41b6641077f7998b34d5ffafe9
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
