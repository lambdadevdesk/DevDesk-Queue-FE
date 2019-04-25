import styled from "styled-components";

//Styled-Components for App Component

export const MainDivApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
`;

// Styled-Components for the Layout Components

export const SFooter = styled.footer`
  text-align: center;
  background: #f7f7f7;
  padding: 1.6rem 0;

  a {
    color: #08addd;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #bb1333;
  padding: 1.6rem 0;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    margin: 0 1rem;
  }
`;

export const MenuH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-left: 2rem;
`;

//Styles for the Submit a Ticket View

export const TicketH1 = styled.h1`
  color: #bb1333;
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;

//Styles for the Login Form

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0 auto;
  background: #efeff3;
  padding: 2rem 2rem;
  border-radius: 5px;
  box-shadow: #999 1px 2px 5px;

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

export const LoginHeader = styled.div`
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

//Styled for the Ticket Form

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background: #efeff3;
  padding: 2rem 2rem;
  border-radius: 5px;
  box-shadow: #999 1px 2px 5px;

  input,
  textarea,
  select {
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
  textarea {
    width: 375px;
    height: 150px;
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

  .field {
    display: flex;

    label {
      margin-right: 1rem;
      width: 20%;
    }
    input {
      width: 70%;
    }
  }
`;

// Styles for Dashboard Component

export const DashDiv = styled.div`
  display: flex;
  .dash-panel {
    width: 15%;
    height: 81vh;
    background: #efeff3;
  }
  .dash-main {
    width: 85%;
  }

  .profile-panel {
    text-align: center;
  }
`;

// Styles for Dashboard Menu

export const DashNav = styled.nav`
  color: #bb1333;
  text-align: center;

  li:nth-child(odd) {
    background: #f7f7f7;
  }
  li {
    cursor: pointer;
    padding: 1rem 0;
  }
`;