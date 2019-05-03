import React, { Component } from "react";
import { connect } from "react-redux";

import { getTickets, deleteTicket } from "../actions";
import Dashboard from "./Dashboard/Dashboard";
import { ItemDiv } from "../helpers";
import TicketItem from "./Tickets/TicketItem";

class MyTickets extends Component {
  deleteTicket = id => {
    this.props.deleteTicket(id);
  };
  render() {
    return (
      <Dashboard>
        <ItemDiv>
          {this.props.ownedTickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              ticket={ticket}
              title={ticket.title}
              category={ticket.category}
              createdBy={ticket.user_id}
              assigned={ticket.assigned}
              resolved={ticket.resolved}
              assignedUser={ticket.assigned_user}
              description={ticket.description}
              deleteTicket={this.deleteTicket}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    user.isAdmin
      ? this.props.getTickets("admin", user.user_id)
      : this.props.getTickets("student", user.user_id);
    console.log(user.user_id);
  }
}

const mapStateToProps = state => {
  return {
    ownedTickets: state.ownedTickets
  };
};

export default connect(
  mapStateToProps,
  { getTickets, deleteTicket }
)(MyTickets);
