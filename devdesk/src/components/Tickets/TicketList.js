import React from "react";
import { connect } from "react-redux";

import { ItemDiv } from "../../helpers";

import TicketItem from "./TicketItem";
import { getData, testDeleteTicket } from "../../actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  deleteTicket = id => {
    this.props.testDeleteTicket(id);
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
    isAdmin: state.isAdmin
  };
};

export default connect(
  mapStateToProps,
  { getData, testDeleteTicket }
)(TicketList);
