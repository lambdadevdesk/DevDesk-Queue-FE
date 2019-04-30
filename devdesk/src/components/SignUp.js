import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm, LoginHeader } from "../helpers";

class SignUp extends Component {
  state = { credentials: { name: "", email: "", username: "", password: "" } };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        name: "",
        email: "",
        username: "",
        password: ""
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
            name="name"
            placeholder="Name"
            value={this.state.credentials.name}
            required
          />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.credentials.email}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
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

export default SignUp;
