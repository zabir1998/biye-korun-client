import React from "react";
import { Link, useParams } from "react-router-dom";
import "./StepIndicator.scss";

const StepIndicator = () => {
  const { formId } = useParams();

  return (
    <div className="stepIndicator">
      <div className="stepIndicator-container d-flex justify-content-between align-items-center">
        <div
          className="circle"
          style={{
            backgroundColor: `${
              formId === "basicProfile"
                ? //   ||
                  //   formId === "advancedProfile" ||
                  //   formId === "careerProfile" ||
                  //   formId === "bioProfile"
                  "#8e8be6"
                : "rgb(209, 209, 209)"
            }`,
          }}
        >
          <Link to="/createProfile/basicProfile">
            <p>1</p>
          </Link>
        </div>

        <div
          className="circle"
          style={{
            backgroundColor: `${
              formId === "advancedProfile"
                ? //   ||
                  //   formId === "careerProfile" ||
                  //   formId === "bioProfile"
                  "#8e8be6"
                : "rgb(209, 209, 209)"
            }`,
          }}
        >
          <Link to="/createProfile/advancedProfile">
            <p>2</p>
          </Link>
        </div>
        <div
          className="circle"
          style={{
            backgroundColor: `${
              formId === "careerProfile"
                ? //   || formId === "bioProfile"
                  "#8e8be6"
                : "rgb(209, 209, 209)"
            }`,
          }}
        >
          <Link to="/createProfile/careerProfile">
            <p>3</p>
          </Link>
        </div>
        <div
          className="circle"
          style={{
            backgroundColor: `${
              formId === "bioProfile" ? "#8e8be6" : "rgb(209, 209, 209)"
            }`,
          }}
        >
          <Link to="/createProfile/bioProfile">
            <p>4</p>
          </Link>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default StepIndicator;
