import React from "react";
import { connect } from "react-redux";

import Dashboard from "../components/Dashboard/Dashboard";

class StudentView extends React.Component {
  state = {
    student: {
      id: 0,
      name: "Mace Windu",
      email: "Mace.Windu@2ez.gg",
      cohort: "FSWPT-4",
      openedTickets: []
    }
  };
  render() {
    return <Dashboard student={this.state.student} />;
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.isAdmin
  };
};

export default connect(mapStateToProps)(StudentView);
