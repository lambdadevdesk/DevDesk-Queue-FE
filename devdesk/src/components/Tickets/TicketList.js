import React from "react";
import { connect } from "react-redux";

import { ItemDiv } from "../../helpers";

import TicketItem from "./TicketItem";
import { getData, assignTicket } from "../../actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  assignTicket = (id, ticket) => {
    this.props.assignTicket(id, ticket);
  };

  // user = JSON.parse(localStorage.getItem("user"));

  render() {
    console.log(this.props.test);
    return (
      <Dashboard user={this.props.user}>
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
    user: state.user,
    test: state.test
  };
};

export default connect(
  mapStateToProps,
  { getData, assignTicket }
)(TicketList);
