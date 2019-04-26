import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

// Testing
import AdminView from "./views/AdminView";
import StudentView from "./views/StudentView";
import EditTicket from "./components/EditTicket";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/student_view" component={StudentView} />
        <PrivateRoute exact path="/admin_view" component={AdminView} />
        <Route path="edit/:id" render={(props)=> <Component {...props} />
      </Layout>
    </Router>
  );
}

export default App;
