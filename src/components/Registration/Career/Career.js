import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// import { fetchCountries } from '../../../redux/actions/fetchCountriesActions';
// import { connect } from 'react-redux';

const Career = ({ countries, fetchCountries, addUserDetail }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  // useEffect(() => {
  //     fetchCountries();
  // }, []);

  const onSubmit = (data) => {
    addUserDetail(data);
    history.push(`/membership/lifestyle`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Country/Region
            </label>
            <select
              ref={register({ required: true })}
              name="country"
              className="form-control"
            >
              {/* {
                  countries.map(country => <option key={country.name} value={country.name}>{country.name}</option> )
              }                              */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Highest Degrees
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="highestDegree"
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">Highest Degrees is required</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Employed In
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="employedIn"
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">Employed In is required</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Annual Income
            </label>
            <input
              ref={register({ required: true })}
              type="number"
              name="annualIncome"
              className="form-control"
            />
            {errors.address && (
              <span className="text-danger">Annual Income is required</span>
            )}
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div>
          <h5 className="brand-text" style={{ marginLeft: 15 }}>
            Here is your Chance to make your profile standout
          </h5>
          <br />
        </div>
        <div className="text-left" style={{ marginLeft: 325 }}>
          <p>Need Help Writing?</p>
        </div>
        <div className="form-group">
          <div>
            <input
              ref={register({ required: true })}
              type="text"
              name="explain"
              className="form-control"
              placeholder="Express Yourself"
              style={{
                width: 500,
                paddingBottom: 200,
                paddingTop: 10,
                marginBottom: 30,
                boxShadow: 40,
                borderRadius: 5,
              }}
            />
          </div>
        </div>
        <div className="form-group row text-left">
          <div>
            <input className="main-btn" type="submit" value="Continue" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Career;
