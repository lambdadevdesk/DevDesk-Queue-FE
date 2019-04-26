import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TicketCard from "./components/Tickets/TicketCard";
import HomePage from "./components/HomePage";

// Testing
import AdminView from "./views/AdminView";
import StudentView from "./views/StudentView";

import TicketForm from "./components/Tickets/TicketForm";


function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route
          path="/ticket/:id"
          exact
          render={props => <TicketCard {...props} />}
        />
        <Route path="/new-ticket" component={TicketForm} />
        <PrivateRoute exact path="/student_view" component={StudentView} />
        <PrivateRoute exact path="/admin_view" component={AdminView} />
        <Route path="edit/:id" render={props => <EditTicket {...props} />} />
      </Layout>
    </Router>
  );
}

export default App;
