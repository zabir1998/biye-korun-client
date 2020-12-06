import React from "react";
import { useForm } from "react-hook-form";
import "./Personal.css";

const Personal = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (

    <div className="container form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Bride Name</h5>

        <input
          label="Bride Name"
          name="firstName"
          placeholder="Bride Name"
          ref={register}
        />
        <br />
        <h5>Date of Birth</h5>
        <input
          label="dateOfBirth"
          placeholder="Date Of Birth"
          type="date"
          name="birthDate"
          ref={register}
        />
        <br />
        <h5>Mother Tongue</h5>
        <select placeholder="Mother Tongue" name="motherTongue" ref={register}>
          <option value="bengali">Bengali</option>
          <option value="bengali">Bengali</option>
          <option value="bengali">Bengali</option>
        </select>
        <br />
        <h5>Religion</h5>
        <select placeholder="religion" name="religion" ref={register}>
          <option value="islam">Islam</option>
          <option value="islam">Islam</option>
          <option value="islam">Islam</option>
        </select>
        <br />
        <h5>Marital Status</h5>
        <select placeholder="maritalStatus" name="maritalStatus" ref={register}>
          <option value="married">Married</option>
          <option value="married">Married</option>
          <option value="married">Married</option>
        </select>
        <br />
        <h5>Height</h5>
        <input
          type="number"
          label="Height"
          name="height"
          placeholder="Height"
          ref={register}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Personal;
