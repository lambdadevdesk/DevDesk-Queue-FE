import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/layout";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Layout>
    </Router>
  );
}

export default App;
