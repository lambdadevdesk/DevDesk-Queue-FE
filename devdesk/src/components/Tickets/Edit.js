import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTestTicket } from "../../actions";

import { SForm } from "../../helpers";

class Edit extends Component {
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
    this.props.updateTestTicket(this.state.ticket);
    this.props.history.push("/student_view");
  };
  render() {
    return (
      <div>
        <SForm onSubmit={this.handleSubmit} action="">
          <div className="field">
            <label htmlFor="title">Title: </label>
            <input
              name="title"
              onChange={this.handleChange}
              type="text"
              value={this.state.ticket.title}
            />
          </div>
          <div className="field">
            <label htmlFor="category">Category: </label>
            <select onChange={this.handleChange} name="category" id="">
              {this.props.categories.map(category => (
                <option value={this}>{category}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="description">Description: </label>
            <textarea
              onChange={this.handleChange}
              name="description"
              value={this.state.ticket.description}
            />
          </div>
          <button type="submit">Update</button>
        </SForm>
      </div>
    );
  }
  componentDidMount() {
    const ticket = this.props.tickets.find(
      ticket => `${ticket.id}` === this.props.match.params.id
    );
    this.setState({
      ticket: { ...ticket }
    });
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
  { updateTestTicket }
)(Edit);
