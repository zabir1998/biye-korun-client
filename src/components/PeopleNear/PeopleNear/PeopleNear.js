import React from "react";
import InnerNavBar from "../../shared/InnerNavBar/InnerNavBar";
import NearPeopleBody from "../NearPeopleBody/NearPeopleBody";

const PeopleNear = () => {
  return (
    <div style={{ paddingLeft: 80, paddingRight: 80 }}>
      <InnerNavBar></InnerNavBar>
      <NearPeopleBody></NearPeopleBody>
    </div>
  );
};

export default PeopleNear;
