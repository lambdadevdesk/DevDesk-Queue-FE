import React, { Component } from "react";
import { connect } from "react-redux";

import { SForm, TicketH1 } from "../../helpers";
import { testAddTicket } from "../../actions";

class TicketForm extends Component {
  state = {
    ticket: {
      id: "",
      title: "",
      description: "",
      category: "",
      comments: [],
      resolved: false,
      assigned: false
    }
  };

  handleChange = e => {
    this.setState({
      ticket: { ...this.state.ticket, [e.target.name]: [e.target.value] }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.testAddTicket(this.state.ticket);
    this.setState({
      ticket: {
        title: "",
        description: ""
      }
    });
  };

  render() {
    console.log(this.props.tickets);
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

          <button type="submit">Submit</button>
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
  { testAddTicket }
)(TicketForm);
