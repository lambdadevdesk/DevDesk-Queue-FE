import React, { Component } from "react";
import { SForm, TicketH1 } from "../helpers/index";

class TicketForm extends Component {
  state = {
    tickets: [
      {
        id: "",
        title: "",
        shortDescription: "",
        description: "",
        category: [],
        comments: [],
        resolved: false,
        assigned: false
      }
    ]
  };

  handleChange = e => {
    this.setState({
      tickets: { ...this.state.tickets, [e.target.name]: [e.target.value] }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Dispatch Submit Function
  };

  render() {
    return (
      <>
        <TicketH1>Subimt A Ticket</TicketH1>
        <SForm onSubmit={this.handleSubmit} action="">
          <div className="field">
            <label htmlFor="title">Title:</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
            />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="short_description">
              Short Description:
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="short_description"
              placeholder="Short Description"
              value={this.state.shortDescription}
            />
          </div>
          <div className="field">
            <label htmlFor="category"> Category:</label>
            <select name="category" id="">
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={this.handleChange}
              type="textarea"
              name="description"
              value={this.state.description}
            />
          </div>

          <button type="submit">Submit</button>
        </SForm>
      </>
    );
  }
}

export default TicketForm;
