import React from "react";
import { useForm } from "react-hook-form";

const Lifestyle = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Family Type</h5>
        <select placeholder="Family Type" name="familyType" ref={register}>
          <option value="single">Single</option>
          <option value="single">Single</option>
        </select>
        <br />
        <h5>Fathers Occupation</h5>
        <select
          placeholder="Fathers Occupation"
          name="fathersOccupation"
          ref={register}
        >
          <option value="single">Single</option>
          <option value="single">Single</option>
        </select>
        <br />
        <h5>Mothers Occupation</h5>
        <select
          placeholder="Mothers Occupation"
          name="mothersOccupation"
          ref={register}
        >
          <option value="single">Single</option>
          <option value="single">Single</option>
        </select>
        <br />
        <h5>Brother</h5>
        <select placeholder="Brother" name="brother" ref={register}>
          <option value="single">Single</option>
          <option value="single">Single</option>
        </select>
        <br />
        <h5>Sisters</h5>
        <select placeholder="Sisters" name="sisters" ref={register}>
          <option value="single">Single</option>
          <option value="single">Single</option>
        </select>
        <br />
        <h5>Family Living In</h5>
        <select
          placeholder="Family Living In"
          name="familyLivingIn"
          ref={register}
        >
          <option value="single">Single</option>
          <option value="single">Single</option>
        </select>
        <br />
        <h5>Contact Address</h5>

        <input
          label="Contact Address"
          name="contactAddress"
          placeholder="Contact Address"
          ref={register}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Lifestyle;
