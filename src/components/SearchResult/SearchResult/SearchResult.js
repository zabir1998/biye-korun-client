import React from "react";
import VisitorCard from "../../ProfileVisitors/VisitorCard/VisitorCard";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import NewMatchList from "../../UserDashboard/NewMatchList/NewMatchList";
import PaidMembersAccess from "../PaidMembersAccess/PaidMembersAccess";
import SearchCard from "../SearchCard/SearchCard";
import SearchResultBody from "../SearchResultBody/SearchResultBody";

const SearchResult = () => {
  return (
    <div className="container">
      <div style={{ marginBottom: 10 }}>
        <InnerNavBar></InnerNavBar>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ProfileCard></ProfileCard>
          <NewMatchList></NewMatchList>
          <NewMatchList></NewMatchList>
        </div>

        <div className="col-md-6">
          <UserNavBar></UserNavBar>
          <div className="row">
            <div className="col-md-5">
              <PaidMembersAccess></PaidMembersAccess>
            </div>
            <div className="col-md-7">
              <SearchCard></SearchCard>
              <SearchCard></SearchCard>
              <SearchCard></SearchCard>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <IdSearchBar></IdSearchBar>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default SearchResult;
