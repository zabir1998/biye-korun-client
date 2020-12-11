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
import Dashboard from "./components/UserDashboard/Dashboard/Dashboard";
import MatchProfileList from "./components/UserDashboard/MatchProfileList/MatchProfileList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [accessToken, setAccessToken] = useState("");

  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser, accessToken, setAccessToken]}
    >
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
          <Route exact path="/user">
            <UserProfile></UserProfile>
          </Route>
          <Route path="/user/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/user/profileMatch">
            <MatchProfileList></MatchProfileList>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
