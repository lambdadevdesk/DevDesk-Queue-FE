import React from "react";
import { connect } from "react-redux";

// import ticketList
//
class AdminView extends React.Component {
  render() {
    return (
      <div>
        <h1>Admins</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(AdminView);
