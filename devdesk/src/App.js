import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1>DevDesk</h1>
        <Route to="/" /*component={}*/ />
      </div>
    </Router>
  );
}

export default App;
