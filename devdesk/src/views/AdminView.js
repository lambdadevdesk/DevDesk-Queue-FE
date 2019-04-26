import React from "react";
import { connect } from "react-redux";

import TicketList from "../components/Tickets/TicketList";
import AdminDashMenu from "../components/Dashboard/AdminDashMenu";
import { DashDiv } from "../helpers";
import TicketForm from "../components/Tickets/TicketForm";

const AdminView = props => {
  return (
    <DashDiv>
      <div className="dash-panel">
        <div className="profile-panel">
          <div className="profile-header">
            <img src="" alt="" />
            <h1>Full Name</h1>
          </div>
          <div className="profile-content">
            <p>FSWPT 4</p>
            <p>Full.Name@example.com</p>
          </div>
        </div>
        <AdminDashMenu />
      </div>
      <div className="dash-main">
        {props.creatingTicket ? <TicketForm /> : <TicketList />}
      </div>
    </DashDiv>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(AdminView);
