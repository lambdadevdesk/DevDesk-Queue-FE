import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Edit from "./components/Tickets/Edit";

// Testing
import AdminView from "./views/AdminView";
import StudentView from "./views/StudentView";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/login" component={Login} />
        <Route path="/edit/:id" render={props => <Edit {...props} />} />
        <PrivateRoute exact path="/student_view" component={StudentView} />
        <PrivateRoute exact path="/admin_view" component={AdminView} />
      </Layout>
    </Router>
  );
}

export default App;
