import React from "react";
import { connect } from "react-redux";

import DashboardMenu from "./DashboardMenu";
// import DashboardArea from "./DashboardArea";
import { DashboardDiv } from "../../helpers";

const Dashboard = props => {
  return (
    <DashboardDiv>
      <DashboardMenu userRole="Test" />
      <div className="dash-main">{props.children}</div>
    </DashboardDiv>
  );
};

const mapStateToProps = state => {
  return {
    creatingTicket: state.creatingTicket
  };
};

export default connect()(Dashboard);
