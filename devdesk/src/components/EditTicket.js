import React, { Component } from "react";
import { connect } from "react-redux";

import { SForm, TicketH1 } from "../helpers/index";
import { editTicket } from "../actions/index";

class EditTicket extends Component {
  state = {
    ticket: {
      id: "",
      title: "",
      description: "",
      category: ""
    }
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    let ticketById = this.props.tickets.filter(ticket => ticket.id === id);
    ticketById = ticketById[0];
    this.setState({
      id: ticketById.id,
      title: ticketById.title,
      description: ticketById.description,
      category: ticketById.category
    });
  }

  handleChange = e => {
    this.setState({
      ticket: { ...this.state.ticket, [e.target.name]: [e.target.value] }
    });
  };

  editTicket = event => {
    event.preventDefault();
    const updatedTicket = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category
    };
    this.props.editTicket(this.state.id, updatedTicket);
    this.setState({
      title: "",
      description: "",
      category: ""
    });
  };
  render() {
    return (
      <>
        <TicketH1>Submit A Ticket</TicketH1>
        <SForm onSubmit={this.handleSubmit} action="">
          <div className="field">
            <label htmlFor="title">Title:</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.ticket.title}
            />
          </div>
          <div className="field">
            <label htmlFor="category"> Category:</label>
            <select onChange={this.handleChange} name="category" id="category">
              {this.props.categories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={this.handleChange}
              type="textarea"
              name="description"
              value={this.state.ticket.description}
            />
          </div>

          <button type="submit">Edit Ticket</button>
        </SForm>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { editTicket }
)(EditTicket);
