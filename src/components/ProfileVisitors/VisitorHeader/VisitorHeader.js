import React from "react";
import Search from "../../Search/Search/Search";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import VisitorCard from "../VisitorCard/VisitorCard";
import VisitorCount from "../VisitorCount/VisitorCount";
import VisitorNav from "../VisitorNav/VisitorNav";

const VisitorHeader = () => {
  return (
    <div
      className="row d-flex justify-content-between mt-5 "
      style={{ marginTop: 10 }}
    >
      <div className="col-md-3">
        <ProfileCard></ProfileCard>
        <br />
        <VisitorCount></VisitorCount>
      </div>
      <div className=" col-md-9">
        <div className="row ">
          <div className="  col-md-8">
            <UserNavBar></UserNavBar>
          </div>
          <div className="col-md-4 ">
            <IdSearchBar></IdSearchBar>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <VisitorNav></VisitorNav>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VisitorCard></VisitorCard>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VisitorCard></VisitorCard>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VisitorCard></VisitorCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorHeader;
