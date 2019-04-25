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
            <h1>{props.student.name}</h1>
          </div>
          <div className="profile-content">
            <p>{props.student.cohort}</p>
            <p>{props.student.email}</p>
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
