import React from "react";
import "./Steps.css";
import steps from "../../../images/steps.png";

const Steps = () => {
  return (
    <div className="step-img row ml-8">
      <img src={steps} alt="" />
    </div>
  );
};

export default Steps;
