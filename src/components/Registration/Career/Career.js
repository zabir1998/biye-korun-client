import React from "react";
import { useForm } from "react-hook-form";

const Career = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Country</h5>
        <select placeholder="Country" name="country" ref={register}>
          <option value="bangladesh">Bangladesh</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="bangladesh">Bangladesh</option>
        </select>
        <br />
        <h5>Highest Degree</h5>
        <input
          label="Highest Degree"
          name="highestDegree"
          placeholder="Highest Degree"
          ref={register}
        />
        <br />
        <h5>Employed In</h5>
        <input
          label="Employed In"
          name="employedIn"
          placeholder="Employed In"
          ref={register}
        />
        <br />

        <h5>Annual Income</h5>
        <input
          label="Annual Income"
          name="annualIncome"
          placeholder="Annual Income"
          ref={register}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Career;
