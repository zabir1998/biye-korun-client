import React, { useState, useEffect } from "react";
import Search from "../../Search/Search/Search";
import IdSearchBar from "../../User/IdSearchBar/IdSearchBar";
import ProfileCard from "../../User/ProfileCard/ProfileCard";
import UserNavBar from "../../User/UserNavBar/UserNavBar";
import VisitorCard from "../VisitorCard/VisitorCard";
import VisitorCount from "../VisitorCount/VisitorCount";
import VisitorNav from "../VisitorNav/VisitorNav";

const VisitorHeader = () => {
  const [profileVisitors, setProfileVisitors] = useState([]);
  const [token, setToken] = useState(null);
  //console.log(profileVisitors);
  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));
    fetch(
      "https://biyekorun-staging.techserve4u.com/user/recent-profile-visitor",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        //console.log(json.data);
        setProfileVisitors(json.data);
      });
  }, [token]);
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
            {profileVisitors?.map((visitor) => (
              <VisitorCard visitor={visitor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorHeader;
