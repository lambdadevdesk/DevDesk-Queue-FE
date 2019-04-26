import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import TicketItem from "./TicketItem";
import { getData, testDeleteTicket } from "../../actions";
import Dashboard from "../Dashboard/Dashboard";

const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;

  .ticket-item {
    padding: 1.2rem;
    margin: 1rem 1rem 0 1rem;
    border: 1px solid #d4d4d4;
    border-radius: 4px 4px 2px 2px;
    border-bottom: 2px solid #1e50ee;
    box-shadow: 0 1px 3px 0 #d4d4d5;

    p {
      word-wrap: break-word;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;
class TicketList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  deleteTicket = id => {
    this.props.testDeleteTicket(id);
  };

  render() {
    return (
      <Dashboard>
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
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData, testDeleteTicket }
)(TicketList);
