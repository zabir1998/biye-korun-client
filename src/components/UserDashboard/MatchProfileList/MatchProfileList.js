import React from "react";
import { Link } from "react-router-dom";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import NewMatchList from "../NewMatchList/NewMatchList";
import "./MatchProfileList.css";

const MatchProfileList = () => {
  return (
    <div style={{ paddingLeft: 80, paddingRight: 80 }}>
      <InnerNavBar></InnerNavBar>
      <div className="row mt-5">
        <div className="col-md-3">
          <ProfileCard></ProfileCard>
          <NewMatchList></NewMatchList>
          <NewMatchList></NewMatchList>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-8">
              <UserNavBar></UserNavBar>
            </div>
            <div className="col-md-4">
              <IdSearchBar></IdSearchBar>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="text-center">Match Profile List</h4>
            <div className="row d-flex justify-content-between">
              <div className="col-md-8">
                <p>
                  Members who match your preferences{" "}
                  <span style={{ color: "#8e8be6" }}>
                    <Link to="/">Edit</Link>
                  </span>{" "}
                </p>
                <p>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round">Off</span>
                  </label>{" "}
                  Include More Searches
                </p>
              </div>
              <div className="col-md-4 text-right">Default Order</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchProfileList;
