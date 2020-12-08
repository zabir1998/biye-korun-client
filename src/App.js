import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import PeopleNear from "./components/PeopleNear/PeopleNear/PeopleNear";
import ProfileVisitors from "./components/ProfileVisitors/ProfileVisitors/ProfileVisitors";
import Personal from "./components/Registration/Personal/Personal";
import Registration from "./components/Registration/Registration/Registration";
import Search from "./components/Search/Search/Search";
import UserProfile from "./components/User/UserProfile/UserProfile";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/visitor">
            <ProfileVisitors></ProfileVisitors>
          </Route>
          <Route path="/nearPeople">
            <PeopleNear></PeopleNear>
          </Route>
          <Route path="/user">
            <UserProfile></UserProfile>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
