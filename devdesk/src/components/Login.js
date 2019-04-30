import React, { Component } from "react";

import { LoginForm, LoginHeader } from "../helpers";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends Component {
  state = { credentials: { username: "", password: "" } };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/tickets");
    });
    this.setState({
      credentials: {
        ...this.state.credentials,
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
        <LoginForm onSubmit={this.login} action="" autoComplete="off">
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
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            required
          />
          <button type="submit">Login</button>
          <div className="extra">
            <p>
              Don't have an Account? <a href="/sign_up">Sign up</a>
            </p>
          </div>
        </LoginForm>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
