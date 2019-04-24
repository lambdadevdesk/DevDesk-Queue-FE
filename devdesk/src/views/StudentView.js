import React from "react";
import { connect } from "react-redux";

// import ticketList
//
class StudentView extends React.Component {
  render() {
    return (
      <div>
        <h1>Students</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(StudentView);
