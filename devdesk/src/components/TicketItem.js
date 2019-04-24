import React from "react";

const TicketItem = props => {
  return (
    <div style={{ backgroundColor: `lemonchiffon`, margin: `0 0 1rem 0` }}>
      <h1>{props.title}</h1>
      <p>{props.category}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default TicketItem;
