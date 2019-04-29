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

  assignTicket = id => {
    this.props.assignTicket(id);
  };

  render() {
    return (
      <Dashboard userRole={this.props.isAdmin}>
        <ItemDiv>
          {this.props.tickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              category={ticket.category}
              description={ticket.description}
              deleteTicket={this.deleteTicket}
              assignTicket={this.assignTicket}
              assigned={ticket.assigned}
              userRole={this.props.isAdmin}
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
    isAdmin: state.isAdmin,
    assigned: state.assigned
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteTicket, assignTicket }
)(TicketList);
