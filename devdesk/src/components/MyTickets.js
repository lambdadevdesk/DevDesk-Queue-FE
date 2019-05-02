import React, { Component } from "react";
import { connect } from "react-redux";

import { getTickets } from "../actions";

class MyTickets extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
  componentDidMount() {
    this.props.getTickets();
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getTickets }
)(MyTickets);
