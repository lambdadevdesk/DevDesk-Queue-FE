import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <TicketForm />
        <Route to="/" /*component={}*/ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
