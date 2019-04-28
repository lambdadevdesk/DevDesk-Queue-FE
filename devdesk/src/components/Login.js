import React, { Component } from "react";

import { LoginForm, LoginHeader } from "../helpers";
import { connect } from "net";

class Login extends Component {
  state = { credentials: { username: "", password: "" } };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: [e.target.value]
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.handleLogin(this.state.credentials).then(() => {
      this.props.history.push("/");
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
        <LoginForm onSubmit={this.handleLogin} action="" autoComplete="off">
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
              Don't have an Account? <a href="#!">Sign up</a>
            </p>
          </div>
        </LoginForm>
      </div>
    );
  }
}handleSubmit

chandleSubmit
 handleSubmit
 handleSubmit
 handleSubmit
}handleSubmit

ehandleSubmit
 handleSubmit
 handleSubmit
)handleSubmit
