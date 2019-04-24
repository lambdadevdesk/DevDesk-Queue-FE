import React from "react";
import { connect } from "react-redux";

import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import DashboardMenu from "./DashboardMenu";
import { DashDiv } from "../helpers";

const Dashboard = props => {
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
        <DashboardMenu />
      </div>
      <div className="dash-main">
        {props.creatingTicket ? <TicketForm /> : <TicketList />}
      </div>
    </DashDiv>
  );
};

const mapStateToProps = state => {
  return {
    creatingTicket: state.creatingTicket
  };
};
export default connect(mapStateToProps)(Dashboard);
