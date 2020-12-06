import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../../App";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import ProfileCard from "../ProfileCard/ProfileCard";

const UserProfile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <Container>
      <InnerNavBar></InnerNavBar>
      <div className="row">
        <div className="col-md-2">
          <ProfileCard></ProfileCard>
        </div>
        <div className="col-md-8"></div>
        <div className="col-md-2"></div>
      </div>
    </Container>
  );
};

export default UserProfile;
