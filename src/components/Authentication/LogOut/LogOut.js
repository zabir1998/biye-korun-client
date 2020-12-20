import React, { useContext, useEffect, useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { toast } from "react-toastify";
import { UserContext } from "../../../App";

const LogOut = () => {
  const clientId =
    "39435938639-2kvqil8o2l3sj1esmdldqrm9mrsnublm.apps.googleusercontent.com";

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    const hasToken = sessionStorage.getItem("Token");
    if (hasToken) {
      setLoggedInUser(true);
    } else {
      setLoggedInUser(false);
    }
  }, [setLoggedInUser]);

  const onLogoutSuccess = (res) => {
    //console.log("Logged out Success");

    // toast.success("Logged out Successfully ✌");
    // sessionStorage.clear("token");
    sessionStorage.clear("token");
    toast.success("Logged out Successfully ✌");
    setLoggedInUser(false);
  };

  const onFailure = () => {
    ("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button
      onClick={signOut}
      style={{ color: "#8e8be6" }}
      className="btn"
      href="#"
    >
      Logout
    </button>
  );
};

export default LogOut;
