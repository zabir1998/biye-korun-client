import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Home/NavBar/NavBar';
import Age from '../Age/Age';
import NavSearch from '../Search/NavSearch/NavSearch';
// import { fetchCountries } from '../../../redux/actions/fetchCountriesActions';
// import { connect } from 'react-redux';

const Basic = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [countries, setCountries] = useState([]);
  const [religions, setReligions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [states, setStates] = useState([]);
  const [countryId, setCountryId] = useState(null);
  const [religionId, setReligionId] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));

    fetch(
      'https://biyekorun-staging.techserve4u.com/category/country/country-list',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setCountries(data.data));
    fetch(
      'https://biyekorun-staging.techserve4u.com/category/language/language-list',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setLanguages(data.data));

    fetch(
      'https://biyekorun-staging.techserve4u.com/category/religion/religion-list',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setReligions(data.data));

    fetch(
      `https://biyekorun-staging.techserve4u.com/category/state/state-by-country/${parseInt(
        countryId
      )}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((state) => {
        setStates(state.data);
      });

    fetch(
      `https://biyekorun-staging.techserve4u.com/category/community/community-by-religion/${religionId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((returnData) => {
        setCommunities(returnData.data);
      });
  }, [token, countryId, religionId]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="row">
        <div></div>
        <div className="col-md-3"></div>
        <div className="col-md-6 form-container">
          <NavSearch></NavSearch>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="form-group">
                  <div>
                    <label
                      className="col-md-6"
                      style={{ paddingTop: 28 }}
                      htmlFor=""
                    >
                      Age
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="age"
                      ref={register({ required: true })}
                      placeholder="Age"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-6" htmlFor="">
                    Height
                  </label>

                  <input
                    ref={register({ required: true })}
                    type="number"
                    name="height"
                    placeholder="Height"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="" htmlFor="">
                    Marital Status
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="merital_status"
                    className="form-control"
                  >
                    {errors.maritalStatus && (
                      <span className="text-danger">
                        Marital Status is required
                      </span>
                    )}
                    <option value="Unmarried">Unmarried</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="" htmlFor="">
                    Religion
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="religion_id"
                    className="form-control"
                    value={religionId}
                    onChange={(e) => setReligionId(e.target.value)}
                  >
                    {errors.religion && (
                      <span className="text-danger">Religion is required</span>
                    )}
                    <option value="">-- please select the religion --</option>
                    {religions?.length >= 1 ? (
                      religions.map((religion) => (
                        <option key={religion.id} value={religion.id}>
                          {religion.name}
                        </option>
                      ))
                    ) : (
                      <option value="">Please reload the page again</option>
                    )}
                  </select>
                </div>

                <div className="form-group">
                  <label className="" htmlFor="">
                    Community
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="community_id"
                    className="form-control"
                  >
                    <option value="">
                      -- please select the religion before select the community
                      --
                    </option>
                    {communities?.length >= 1 ? (
                      communities.map((community) => (
                        <option key={community.id} value={community.id}>
                          {community.name}
                        </option>
                      ))
                    ) : (
                      <option value="">Please reload the page again</option>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label className="" htmlFor="">
                    Mother tongue
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="language_id"
                    className="form-control"
                  >
                    {errors.religion && (
                      <span className="text-danger">
                        Mother tongue is required
                      </span>
                    )}
                    <option value="">-- please select the language --</option>
                    {languages?.length >= 1 &&
                      languages.map((language) => (
                        <option key={language.id} value={language.id}>
                          {language.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <div>
                    <label className="" htmlFor="">
                      Country Living In
                    </label>
                    <select
                      ref={register({ required: true })}
                      name="country"
                      className="form-control"
                      value={countryId}
                      onChange={(e) => setCountryId(e.target.value)}
                    >
                      <option value="">-- please select the country --</option>
                      {countries?.length >= 1 ? (
                        countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.name}
                          </option>
                        ))
                      ) : (
                        <option value="">Please reload the page again</option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className="" htmlFor="">
                      State Living In
                    </label>
                    <select
                      required
                      ref={register({ required: true })}
                      name="state_id"
                      className="form-control"
                    >
                      <option value="">
                        -- please select country before select the state--
                      </option>
                      {states?.length >= 1 ? (
                        states.map((state) => (
                          <option key={state.id} value={state.id}>
                            {state.name}
                          </option>
                        ))
                      ) : (
                        <option value="">Please reload the page again</option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4">
                    <label className="" htmlFor="">
                      Photo Settings
                    </label>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="checkbox"
                      name="brideName"
                      className="form-control"
                      label="Visible to All"
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="" htmlFor="">
                      Visible to All
                    </label>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="checkbox"
                      name="brideName"
                      className="form-control"
                      label="Visible to All"
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="" htmlFor="">
                      Visible to none
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4">
                    <label className="" htmlFor="">
                      Do not show
                    </label>
                  </div>
                  <div className="row col-md-4">
                    <div className="col-md-4">
                      <input
                        ref={register({ required: true })}
                        type="checkbox"
                        name="brideName"
                        className="form-control"
                        label="Visible to All"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">
                        Profile's That've filtered me out
                      </label>
                    </div>
                  </div>
                  <div className="row col-md-4">
                    <div className="col-md-4">
                      <input
                        ref={register({ required: true })}
                        type="checkbox"
                        name="brideName"
                        className="form-control"
                        label="Visible to All"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Profile's that I have viewed</label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div>
                    <h4
                      style={{ padding: 15 }}
                      className="brand-text"
                      htmlFor=""
                    >
                      Save upto 5 searches
                    </h4>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className="" htmlFor="">
                      Save search as
                    </label>
                    <input
                      //ref={register({ required: true })}
                      type="text"
                      name="brideName"
                      className="form-control"
                      placeholder="eg, Paris, 20-22"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-4">
                    <label className="" htmlFor="">
                      Email me new results
                    </label>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="daily"
                      className="form-control"
                      name="email time"
                      value="daily"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Daily
                    </p>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="once-a-week"
                      className="form-control"
                      name="email time"
                      value="once a week"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Once a week
                    </p>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="twice a week"
                      className="form-control"
                      name="email time"
                      value="twice a week"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Twice a week
                    </p>
                  </div>
                  <div className="col-md-2">
                    <input
                      ref={register({ required: true })}
                      type="radio"
                      id="never"
                      className="form-control"
                      name="email time"
                      value="never"
                    />
                    <p style={{ marginLeft: 15 }} for="male">
                      Never
                    </p>
                  </div>
                </div>

                <div className="form-group row text-left">
                  <div>
                    <input
                      className="main-btn"
                      type="submit"
                      value="Search Profiles"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Basic;
