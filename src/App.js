import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import Home from "./components/Home/Home/Home";
import PeopleNear from "./components/PeopleNear/PeopleNear/PeopleNear";
import Preference from "./components/Preference/Preference/Preference";
import ProfileVisitors from "./components/ProfileVisitors/ProfileVisitors/ProfileVisitors";
import Personal from "./components/Registration/Personal/Personal";
import Career from "./components/Registration/Career/Career";
import Lifestyle from "./components/Registration/Lifestyle/Lifestyle";
import Advance from "./components/Search/Advance/Advance";
import Basic from "./components/Search/Basic/Basic";
import Settings from "./components/Settings/Settings/Settings";
import UserProfile from "./components/User/UserProfile/UserProfile";
import SearchProfile from "./components/User/SearchProfile/SearchProfile";
import Dashboard from "./components/UserDashboard/Dashboard/Dashboard";
import MatchProfileList from "./components/UserDashboard/MatchProfileList/MatchProfileList";
import TopMatchesList from "./components/UserDashboard/TopMatchesList/TopMatchesList";
import SearchResult from "./components/SearchResult/SearchResult/SearchResult";
import { useDispatch } from "react-redux";
import { getProfile } from "./actions";
import Physical from "./components/Registration/Physical/Physical";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [accessToken, setAccessToken] = useState("");
  const [token, setToken] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));
    fetch("https://biyekorun-staging.techserve4u.com/user/user-info", {
      headers: {
        method: "GET",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(getProfile(json.data));
      });
  }, [dispatch, token]);

  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser, accessToken, setAccessToken]}
    >
      <ToastContainer position="top-center" autoClose={5000} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/search/basic">
            <Basic></Basic>
          </Route>
          <Route path="/search/advance">
            <Advance></Advance>
          </Route>
          <Route path="/personal">
            <Personal></Personal>
          </Route>
          <Route path="/career">
            <Career></Career>
          </Route>
          <Route path="/lifestyle">
            <Lifestyle></Lifestyle>
          </Route>
          <Route path="/physical">
            <Physical></Physical>
          </Route>
          <Route path="/visitor">
            <ProfileVisitors></ProfileVisitors>
          </Route>
          <Route path="/nearPeople">
            <PeopleNear></PeopleNear>
          </Route>
          <Route path="/preference">
            <Preference></Preference>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
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
          <Route path="/user/topMatches">
            <TopMatchesList></TopMatchesList>
          </Route>
          <Route path="/searchResult">
            <SearchResult></SearchResult>
          </Route>
          <Route path="/user/:id">
            <SearchProfile />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
