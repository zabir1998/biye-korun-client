import React from "react";
import VisitorCard from "../../ProfileVisitors/VisitorCard/VisitorCard";
import PaidMembersAccess from "../PaidMembersAccess/PaidMembersAccess";
import SearchCard from "../SearchCard/SearchCard";

const SearchResultBody = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <PaidMembersAccess />
      </div>
      <div className="col-md-7">
        <SearchCard></SearchCard>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default SearchResultBody;
