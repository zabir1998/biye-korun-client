import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../App";

const UserProfile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {}, []);

  return <div></div>;
};

export default UserProfile;
