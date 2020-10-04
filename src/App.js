import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Main from "./screens/Main";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/Main/" exact component={Main} />
    </Router>
  );
}

export default App;
