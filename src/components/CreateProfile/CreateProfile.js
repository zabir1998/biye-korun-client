import React from "react";
import { useParams } from "react-router-dom";
import AdvancedProfile from "./AdvancedProfile/AdvancedProfile";
import BasicProfile from "./BasicProfile/BasicProfile";
import BioProfile from "./BioProfile/BioProfile";
import CareerProfile from "./CareerProfile/CareerProfile";
import StepIndicator from "./StepIndicator/StepIndicator";
import "./CreateProfile.css";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";

const CreateProfile = () => {
  const { formId } = useParams();

  return (
    <>
      <ProfileNavbar></ProfileNavbar>
      <div className=" createProfileContainer vh-100">
        <div
          className="shadow inner-form-container py-5"
          style={{
            backgroundColor: "white",
            margin: 100,
            marginLeft: 350,
            marginRight: 350,
            borderRadius: 10,
          }}
        >
          <StepIndicator></StepIndicator>
          {formId === "basicProfile" ? (
            <BasicProfile></BasicProfile>
          ) : formId === "advancedProfile" ? (
            <AdvancedProfile></AdvancedProfile>
          ) : formId === "careerProfile" ? (
            <CareerProfile></CareerProfile>
          ) : formId === "bioProfile" ? (
            <BioProfile></BioProfile>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
