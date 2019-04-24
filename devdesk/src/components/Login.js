import React, { Component } from "react";

import styled from "styled-components";

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0 auto;
  background: #efeff3;
  padding: 2rem 2rem;
  border-radius: 5px;
  box-shadow: #333 1px 2px 5px;

  input {
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 1px solid lightgray;
    border-radius: 3px;
    height: 30px;
    padding-left: 12px;
    outline: none;

    &::placeholder {
      color: lightgray;
    }
  }

  button {
    padding: 0.5rem 0.5rem;
    background: #bb1333;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 3px;

    &:hover {
      color: #bb1333;
      background: #fff;
    }
  }

  .extra {
    margin-top: 1rem;
    text-align: center;
  }
`;

const SDLoginImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0 1rem;

  img {
    display: inline;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }
`;

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
        <SDLoginImage>
          <img
            src={require(`../img/Lambda_Avatar_Red.jpg`)}
            alt="Lambda Avatar"
          />
          <h1>Lambda School</h1>
        </SDLoginImage>
        <SForm onSubmit={this.handleSubmit} action="" autoComplete="off">
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
              Don't have an Accout? <a href="">Sign up</a>
            </p>
          </div>
        </SForm>
      </div>
    );
  }
}

export default Login;
