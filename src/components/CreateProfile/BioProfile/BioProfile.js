import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const BioProfile = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  useEffect(() => {}, []);

  const onSubmit = (data) => {
    console.log(data);
    history.push(`/user/dashboard`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              About Yourself
            </label>
            <textarea
              rows="7"
              cols="5"
              required
              ref={register({ required: true })}
              type="text"
              name="bio"
              className="form-control"
              placeholder="Express Yourself must be longer than 50 characters"
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Phone Number
            </label>
            <input
              required
              ref={register({ required: true })}
              type="text"
              name="phone-number"
              className="form-control"
              placeholder="Your phone number"
            ></input>
          </div>
        </div>
        <div className="form-group row text-right">
          <div className="col-12">
            <input className="btn btn-grad" type="submit" value="Next" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BioProfile;
