import React from "react";
import { Link } from "react-router-dom";

const TicketItem = props => {
  const deleteTicket = e => {
    e.stopPropagation();
    props.deleteTicket(props.id);
  };
  return (
    <div className="ticket-item">
      <Link to={`/ticket/${props.id}`}>
        <h1>{props.title}</h1>
        <p>{props.category}</p>
        <p>{props.description}</p>
      </Link>
      <Link to={`/edit/${props.id}`}>
        <button className="edit">✎</button>
      </Link>
      <button onClick={deleteTicket}>✘</button>
    </div>
  );
};

export default TicketItem;
