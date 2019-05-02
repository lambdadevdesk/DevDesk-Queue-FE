import React from "react";
import { connect } from "react-redux";

import { ItemDiv } from "../../helpers";

import TicketItem from "./TicketItem";
import { getData, deleteTicket, assignTicket, getUser } from "../../actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketList extends React.Component {
  state = {
    loggedUser: {
      id: "",
      email: "",
      cohort: "",
      isAdmin: false
    }
  };

  componentDidMount() {
    this.props.getData();

    if (localStorage.hasOwnProperty("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      this.setState({ loggedUser: user });
    }
  }

  deleteTicket = id => {
    this.props.deleteTicket(id);
  };

  assignTicket = (id, ticket) => {
    this.props.assignTicket(id, ticket);
  };

  render() {
    console.log(this.state.loggedUser);
    return (
      <Dashboard user={this.state.loggedUser}>
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
              userRole={this.state.loggedUser.isAdmin}
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
    assigned: state.assigned
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteTicket, assignTicket, getUser }
)(TicketList);
