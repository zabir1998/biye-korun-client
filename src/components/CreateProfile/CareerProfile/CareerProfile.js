import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const CareerProfile = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  useEffect(() => {}, []);

  const onSubmit = (data) => {
    console.log(data);
    history.push(`/createProfile/advancedProfile`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Your Highest Qualification
            </label>
            <select
              required
              ref={register({ required: true })}
              name="country_id"
              className="form-control"
              //   value={countryId}
              //   onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">-- please select the country --</option>
              {/* {countries?.length >= 1 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Please reload the page again</option>
                  )} */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Your College name (Highest degree)
            </label>
            <select
              required
              ref={register({ required: true })}
              name="country_id"
              className="form-control"
              //   value={countryId}
              //   onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">-- please select the country --</option>
              {/* {countries?.length >= 1 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Please reload the page again</option>
                  )} */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              You work with
            </label>
            <select
              required
              ref={register({ required: true })}
              name="country_id"
              className="form-control"
              //   value={countryId}
              //   onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">-- please select the country --</option>
              {/* {countries?.length >= 1 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Please reload the page again</option>
                  )} */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              As
            </label>
            <select
              required
              ref={register({ required: true })}
              name="country_id"
              className="form-control"
              //   value={countryId}
              //   onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">-- please select the country --</option>
              {/* {countries?.length >= 1 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Please reload the page again</option>
                  )} */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Your Company name (current)
            </label>
            <select
              required
              ref={register({ required: true })}
              name="country_id"
              className="form-control"
              //   value={countryId}
              //   onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">-- please select the country --</option>
              {/* {countries?.length >= 1 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Please reload the page again</option>
                  )} */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Your income
            </label>
            <select
              required
              ref={register({ required: true })}
              name="country_id"
              className="form-control"
              //   value={countryId}
              //   onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">-- please select the country --</option>
              {/* {countries?.length >= 1 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Please reload the page again</option>
                  )} */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Your Income Range
            </label>
            <select
              required
              ref={register({ required: true })}
              name="country_id"
              className="form-control"
              //   value={countryId}
              //   onChange={(e) => setCountryId(e.target.value)}
            >
              <option value="">-- please select the country --</option>
              {/* {countries?.length >= 1 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Please reload the page again</option>
                  )} */}
            </select>
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

export default CareerProfile;
