import React, { Component } from "react";
import Link from "react-router-dom";
import { connect } from "react-redux";

const MyTickets = props => {
  return <div>{props.userRole ? <p>1</p> : <p>2</p>}</div>;
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
