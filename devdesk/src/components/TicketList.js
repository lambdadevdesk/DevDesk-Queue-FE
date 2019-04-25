import React from "react";
import { connect } from "react-redux";

import TicketItem from "./TicketItem";
import { getData, testDeleteTicket } from "../actions";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  onClick = id => {
    this.props.testDeleteTicket(id);
  };

  render() {
    return (
      <div>
        {this.props.tickets.map(ticket => (
          <TicketItem
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            category={ticket.category}
            description={ticket.description}
            onClick={this.onClick}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData, testDeleteTicket }
)(TicketList);
