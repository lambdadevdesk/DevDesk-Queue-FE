import React from "react";
import { connect } from "react-redux";

import TicketList from "../components/Tickets/TicketList";

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
    return <TicketList student={this.state.student} />;
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.isAdmin
  };
};

export default connect(mapStateToProps)(StudentView);
