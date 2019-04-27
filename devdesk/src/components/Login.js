import React, { Component } from "react";

import { LoginForm, LoginHeader } from "../helpers";

class Login extends Component {
  state = { username: "", password: "" };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
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
        <LoginForm onSubmit={this.handleSubmit} action="" autoComplete="off">
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
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
}

export default Login;
