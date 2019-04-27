import React from "react";
import { Link } from "react-router-dom";

import { DashNav } from "../../helpers";
import ProfileCard from "../ProfileCard";

const DashboardMenu = props => {
  return (
    <DashNav className="dash-panel">
      <ProfileCard />
      <ul>
        <li>
          <Link to="/new-ticket">Create Ticket</Link>
        </li>
        <li>
          {props.userRole ? (
            <Link to="/my-tickets">Claimed Tickets</Link>
          ) : (
            <Link to="/my-tickets">My Tickets</Link>
          )}
        </li>
        <li>
          <Link to="/tickets">Opened Tickets</Link>
        </li>
      </ul>
    </DashNav>
  );
};

export default DashboardMenu;
