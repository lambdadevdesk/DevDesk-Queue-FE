import React from "react";
import { Link } from "react-router-dom";

import { DashNav } from "../../helpers";
import ProfileCard from "../ProfileCard";

const user = JSON.parse(localStorage.getItem("user"));

const DashboardMenu = props => {
  return (
    <DashNav className="dash-panel">
      <ProfileCard />
      <ul>
        <Link to="/new-ticket">
          <li>Create Ticket</li>
        </Link>
        <Link to="/my-tickets">
          {user.isAdmin ? <li>Claimed Tickets</li> : <li>My Tickets</li>}
        </Link>
        <Link to="/tickets">
          <li>Opened Tickets</li>
        </Link>
      </ul>
    </DashNav>
  );
};

export default DashboardMenu;
