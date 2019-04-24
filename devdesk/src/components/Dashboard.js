import React from "react";

import TicketForm from "./TicketForm";
import { DashDiv } from "../helpers";

const Dashboard = () => {
  return (
    <DashDiv>
      <div className="dash-panel">
        <div className="profile-panel">
          <div className="profile-header">
            <img src="" alt="" />
            <h1>Full Name</h1>
          </div>
          <div className="profile-content">
            <p>FSWPT 4</p>
            <p>Full.Name@example.com</p>
          </div>
        </div>
      </div>
      <div className="dash-main">
        <TicketForm />
      </div>
    </DashDiv>
  );
};

export default Dashboard;
