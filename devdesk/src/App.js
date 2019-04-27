import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TicketViews from "./views/TicketViews";

import TicketForm from "./components/Tickets/TicketForm";
import TicketCard from "./components/Tickets/TicketCard";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route
          path="/tickets/:id"
          exact
          render={props => <TicketCard {...props} />}
        />
        <Route path="/new-ticket" component={TicketForm} />
        <PrivateRoute exact path="/tickets" component={TicketViews} />
      </Layout>
    </Router>
  );
}

export default App;
