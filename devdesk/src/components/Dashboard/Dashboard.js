import React from "react";

import DashboardMenu from "./DashboardMenu";
import { DashboardDiv } from "../../helpers";

const Dashboard = props => {
  return (
    <DashboardDiv>
      <DashboardMenu user={props.user} />
      <div className="dash-main">{props.children}</div>
    </DashboardDiv>
  );
};

export default Dashboard;
