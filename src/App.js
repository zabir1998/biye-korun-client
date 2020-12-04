import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Personal from "./components/Registration/Personal/Personal";
import Registration from "./components/Registration/Registration/Registration";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
