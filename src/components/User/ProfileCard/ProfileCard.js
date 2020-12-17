import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import getAge from "get-age";

const ProfileCard = ({ style }) => {
  const [token, setToken] = useState(null);

  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);
  //console.log(profileData);
  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));
    fetch("https://biyekorun-staging.techserve4u.com/user/user-info", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(getProfile(json.data));
      });
  }, [dispatch, token]);
  return (
    <>
      <div
        className="card shadow profile-card"
        style={style}
        // style={{ width: "22rem" }}
      >
        <img
          className="card-img-top profile-img rounded-circle"
          src="https://zc64xuggxl-flywheel.netdna-ssl.com/wp-content/uploads/2019/04/team.png"
          alt=""
        ></img>
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
