import React, { Component } from "react";
import Link from "react-router-dom";
import { connect } from "react-redux";

const MyTickets = props => {
  return <div>{props.userRole ? (
      props.assigned ? (
          props.tickets.map()
      )
  )}</div>;
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
