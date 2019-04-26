import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard";

const TicketItem = props => {
  return (
    <div style={{ backgroundColor: `lemonchiffon`, margin: `0 0 1rem 0` }}>
      <ProfileCard />
      <h1>{props.title}</h1>
      <p>{props.category}</p>
      <p>{props.description}</p>
      <Link to={`/edit/${props.id}`}>
        <button className="edit">✎</button>
      </Link>
      <button onClick={() => props.onClick(props.id)}>✘</button>
    </div>
  );
};

export default TicketItem;
