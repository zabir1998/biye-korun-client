import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Personal from "./components/Registration/Personal/Personal";
import Registration from "./components/Registration/Registration/Registration";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
<<<<<<< HEAD
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
=======
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
>>>>>>> 75777e050cf0f8f2e5774f6e4301196177fd6731
  );
}

export default App;
