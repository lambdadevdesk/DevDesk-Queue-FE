import React from "react";
import { Link } from 'react-router-dom';

const TicketItem = props => {

  return (
    <div style={{ backgroundColor: `lemonchiffon`, margin: `0 0 1rem 0` }}>
      <h1>{props.title}</h1>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <Link to={`/edit/${props.ticket.id}`}><button className='edit'>✎</button></Link>
      <button onClick={() => props.onClick(props.ticket.id)}>✘</button>
    </div>
  );
};

export default TicketItem;
