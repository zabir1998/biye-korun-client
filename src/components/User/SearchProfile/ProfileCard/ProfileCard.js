import React, { useState, useEffect } from "react";
import "./ProfileCard.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import getAge from "get-age";
import { useSelector } from "react-redux";

const ProfileCard = ({ style }) => {
  const profileData = useSelector((state) => state.getProfileById);
  const [urlError, setUrlError] = useState(false);
  return (
    <>
      <div
        className="card shadow profile-card"
        style={style}
        // style={{ width: "22rem" }}
      >
        <img
          className=" img-fluid profile-img rounded-circle"
          src={
            profileData?.profile?.user_profile[0]?.photo_url === undefined ||
            profileData?.profile?.user_profile[0]?.photo_url === null
              ? "https://i.imgur.com/8AIDC3f.png"
              : profileData?.profile?.user_profile[0]?.photo_url
          }
          onError={() => setUrlError(true)}
          alt=""
        />
        <div className="card-body text-center">
          {profileData.loading ? (
            <CircularProgress />
          ) : (
            <div>
              <h5 className="card-title">
                {profileData?.getProfileById?.user_profile[0]?.profile_name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {profileData?.getProfileById?.user_profile[0]?.user_id}
              </h6>
              <p>
                {getAge(
                  profileData?.getProfileById?.user_profile[0]?.dateOfBirth
                )}{" "}
                Years old
              </p>
              <p className="card-text mt-3">
                {" "}
                {profileData?.getProfileById?.user_family?.family_living_place}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
