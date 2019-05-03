import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm, LoginHeader } from "../helpers";
import { connect } from "react-redux";
import { signup } from "../actions";

class SignUp extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      isAdmin: false,
      cohort: ""
    }
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.user).then(() => {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 2000);
    });
    this.setState({
      user: {
        ...this.state.user,
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        role: "Student",
        cohort: ""
      }
    });
  };
  render() {
    return (
      <div>
        <LoginHeader>
          <img
            src={require(`../img/Lambda_Avatar_Red.jpg`)}
            alt="Lambda Avatar"
          />
          <h1>Lambda School</h1>
        </LoginHeader>
        <LoginForm onSubmit={this.signup} actions="" autoComplete="off">
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.user.firstName}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.user.lastName}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.user.username}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.user.password}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.user.email}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="cohort"
            placeholder="Cohort"
            value={this.state.user.cohort}
            required
          />
          <button type="submit">Sign Up!</button>
          <div className="extra">
            <p>
              Already have an Account? <Link to="/login">Log in!</Link>
            </p>
          </div>
        </LoginForm>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSigningUp: state.isSigningUp
  };
};
export default connect(
  mapStateToProps,
  { signup }
)(SignUp);
