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
    <div style={{ paddingLeft: 100, paddingRight: 100 }}>
      <div style={{ marginBottom: 10 }}>
        <InnerNavBar></InnerNavBar>
      </div>
      <div className="row">
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
          <div className="row">
            <div className="col-md-4">
              <PaidMembersAccess></PaidMembersAccess>
            </div>
            <div className="col-md-8">
              <div className="row shadow">
                <SearchCard></SearchCard>
              </div>
              <div className="row shadow">
                <SearchCard></SearchCard>
              </div>
              <div className="row shadow">
                <SearchCard></SearchCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
