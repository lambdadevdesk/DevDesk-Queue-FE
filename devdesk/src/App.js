import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TicketCard from "./components/Tickets/TicketCard";
import HomePage from "./components/HomePage";
<<<<<<< HEAD
import TicketViews from "./views/TicketViews";
=======

// Testing
import AdminView from "./views/AdminView";
import StudentView from "./views/StudentView";

>>>>>>> 59296c0d97e40c65423746bc366a00545141af4b
import TicketForm from "./components/Tickets/TicketForm";


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
<<<<<<< HEAD
        <PrivateRoute exact path="/tickets" component={TicketViews} />
=======
        <PrivateRoute exact path="/student_view" component={StudentView} />
        <PrivateRoute exact path="/admin_view" component={AdminView} />
        <Route path="edit/:id" render={props => <EditTicket {...props} />} />
>>>>>>> 59296c0d97e40c65423746bc366a00545141af4b
      </Layout>
    </Router>
  );
}

export default App;
