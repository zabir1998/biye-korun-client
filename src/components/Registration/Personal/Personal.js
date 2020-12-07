import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { fetchCountries } from '../../../redux/actions/fetchCountriesActions';
// import { connect } from 'react-redux';
import "./Personal.css";

const Personal = ({ countries, fetchCountries, addUserDetail }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const history = useHistory();

  // useEffect(() => {
  //     fetchCountries();
  // }, []);

  const onSubmit = (data) => {
    addUserDetail(data);
    history.push(`/registration/career`);
  };

  return (
    <div className="container form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Bride's Name
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="brideName"
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">Bride's Name is required</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Date of Birth
            </label>
            <input
              ref={register({ required: true })}
              type="date"
              name="dateOfBirth"
              className="form-control"
            />
            {errors.dateOfBirth && (
              <span className="text-danger">Date of Birth is required</span>
            )}
          </div>
          <div className="form-group"></div>
          <div>
            <label className="brand-text" htmlFor="">
              Religion
            </label>
            <select
              ref={register({ required: true })}
              name="religion"
              className="form-control"
            >
              {errors.religion && (
                <span className="text-danger">Religion is required</span>
              )}
              <option value="Islam">Islam</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="brand-text" htmlFor="">
            Marital Status
          </label>
          <select
            ref={register({ required: true })}
            name="maritalStatus"
            className="form-control"
          >
            {errors.maritalStatus && (
              <span className="text-danger">Marital Status is required</span>
            )}
            <option value="Unmarried">Unmarried</option>
            <option value="Married">Married</option>
          </select>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Height
            </label>
            <input
              ref={register({ required: true })}
              type="number"
              name="height"
              className="form-control"
            />
            {errors.address && (
              <span className="text-danger">Height is required</span>
            )}
          </div>
        </div>
        <div className="form-group row"></div>
        <div className="form-group row text-right">
          <div>
            <input className="main-btn" type="submit" value="Continue" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Personal;
