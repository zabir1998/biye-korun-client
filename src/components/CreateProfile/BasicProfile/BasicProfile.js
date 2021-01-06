import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const BasicProfile = () => {
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
        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="">First Name</label>
            <input
              ref={register({ required: true })}
              type="text"
              name="firstName"
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">First Name is required</span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="">Last Name</label>
            <input
              ref={register({ required: true })}
              type="text"
              name="lastName"
              className="form-control"
            />
            {errors.lastName && (
              <span className="text-danger">Last Name is required</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text mr-2" htmlFor="">
              Gender
            </label>
            {/* <input
                  ref={register({ required: true })}
                  type=""
                  name="dateOfBirth"
                  className="form-control"
                /> */}
            <input
              ref={register({ required: true })}
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
            <label className="ml-2 mr-2" for="male">
              Male
            </label>
            <input
              ref={register({ required: true })}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <label className="ml-2" for="female">
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Country/Region
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
            <label htmlFor="">Date of Birth</label>
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
        </div>
        <div className="form-group">
          <label className="brand-text" htmlFor="">
            Religion
          </label>
          <select
            ref={register({ required: true })}
            name="religion_id"
            className="form-control"
          >
            {errors.religion && (
              <span className="text-danger">Religion is required</span>
            )}
            <option value="">-- please select the religion --</option>
            {/* {religions?.length >= 1 ? (
                  religions.map((religion) => (
                    <option key={religion.id} value={religion.id}>
                      {religion.name}
                    </option>
                  ))
                ) : (
                  <option value="">Please reload the page again</option>
                )} */}
          </select>
        </div>
        <div className="form-group">
          <label className="brand-text" htmlFor="">
            Language Community
          </label>
          <select
            ref={register({ required: true })}
            name="language_id"
            className="form-control"
          >
            {errors.religion && (
              <span className="text-danger">Mother tongue is required</span>
            )}
            <option value="">-- please select the language --</option>
            {/* {languages?.length >= 1 &&
                  languages.map((language) => (
                    <option key={language.id} value={language.id}>
                      {language.name}
                    </option>
                  ))} */}
          </select>
        </div>
        <div className="form-group">
          <div>
            <label className="brand-text" htmlFor="">
              Where do you live?
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

        <div className="form-group row text-center">
          <div className="col-12">
            <input className="btn btn-grad" type="submit" value="Next" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicProfile;
