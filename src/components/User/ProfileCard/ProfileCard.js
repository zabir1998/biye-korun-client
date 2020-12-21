import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import getAge from "get-age";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard = ({ style }) => {
  const [token, setToken] = useState(null);

  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);
  //console.log(profileData);

  return (
    <>
      <div
        className="card shadow profile-card"
        style={style}
        // style={{ width: "22rem" }}
      >
        <img
          className=" img-fluid profile-img rounded-circle"
          src={profileData?.profile?.user_profile[0]?.photo_url}
          alt=""
        />
        <div className="card-body text-center">
          {profileData.loading ? (
            <CircularProgress />
          ) : (
            <div>
              <h5 className="card-title">
                {profileData?.profile?.user_profile[0]?.profile_name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {profileData?.profile?.user_profile[0]?.user_id}
              </h6>
              <p>
                {getAge(profileData?.profile?.user_profile[0]?.dateOfBirth)}{" "}
                Years old
              </p>
              <p className="card-text mt-3">
                {" "}
                {profileData?.profile?.user_family?.family_living_place}
              </p>
              <Link to="/user" className="btn premium-btn mt-3">
                <span>
                  <FontAwesomeIcon
                    style={{ color: "#ffcc00" }}
                    className="mr-2"
                    icon={faCrown}
                  />
                </span>
                Get Premium
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

// 2-1-2007

// 20071594132019607
