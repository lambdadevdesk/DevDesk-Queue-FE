import React, { Component } from "react";
import Link from "react-router-dom";
import { connect } from "react-redux";


const MyTickets = props => {
  return (
      // Role: is admin? is assigned? render list of assigned : render tickets that were created by user #
    <div>
      <h1>Role: is admin? is assigned? render list of assigned : render tickets that were created by user #</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    isAdmin: state.isAdmin,
    assigned: state.assigned
  };
};

export default connect(
  mapStateToProps,
  {}
)(MyTickets);
