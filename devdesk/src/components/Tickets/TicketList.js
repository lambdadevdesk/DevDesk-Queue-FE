import React from "react";
import { connect } from "react-redux";

import { ItemDiv } from "../../helpers";

import TicketItem from "./TicketItem";
import { getData, deleteTicket, assignTicket } from "../../actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  deleteTicket = id => {
    this.props.deleteTicket(id);
  };

  assignTicket = (id, ticket) => {
    this.props.assignTicket(id, ticket);
  };

  user = JSON.parse(localStorage.getItem("user"));

  render() {
    return (
      <Dashboard user={this.user}>
        <ItemDiv>
          {this.props.tickets.map(ticket => (
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
              assignTicket={this.assignTicket}
              userRole={this.user.isAdmin}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteTicket, assignTicket }
)(TicketList);
