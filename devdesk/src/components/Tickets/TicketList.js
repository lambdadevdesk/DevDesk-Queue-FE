import React from "react";
import { connect } from "react-redux";

import { ItemDiv } from "../../helpers";

import TicketItem from "./TicketItem";
import { getData, deleteTicket, assignTicket, getUser } from "../../actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.getData();
    this.props.getUser(this.props.user.id);
  }

  deleteTicket = id => {
    this.props.deleteTicket(id);
  };

  assignTicket = (id, ticket) => {
    this.props.assignTicket(id, ticket);
  };

  render() {
    return (
      <Dashboard user={this.props.user} userRole={this.props.user.isAdmin}>
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
              userRole={this.props.user.isAdmin}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    fetchingData: state.fetchingData,
    assigned: state.assigned,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteTicket, assignTicket, getUser }
)(TicketList);
