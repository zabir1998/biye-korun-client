import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    height: '70%',
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditPartnerPreferenceTable = ({ modalIsOpen, closeModal, bio }) => {
  const { register, errors, handleSubmit } = useForm();
  const [token, setToken] = useState(null);
  const [religions, setReligions] = useState([]);
  const [diets, setDiets] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
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

    fetch('https://biyekorun-staging.techserve4u.com/category/diet/diet-list', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDiets(data.data));
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
  }, [token]);

  const onSubmit = async (data) => {
    //console.log(data);

    await fetch(
      `https://biyekorun-staging.techserve4u.com/category/state/state-by-country/${parseInt(
        data.country_id
      )}`,
      {
        method: 'GET',

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(
          JSON.stringify({
            religion_id: parseInt(data.religion_id),
            diet_id: parseInt(data.diet_id),
            state_id: json.data.id,
            country_id: parseInt(data.country_id),
            highest_degree: data.highest_degree,
            professional_area: data.professional_area,
            working_company: data.working_company,
            yearly_income: data.yearly_income,
            age: parseInt(data.age),
            maritial_status: data.marital_status,
            height: data.height,
          })
        );

        fetch(
          'https://biyekorun-staging.techserve4u.com/user/user-preference/update',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              religion_id: parseInt(data.religion_id),
              diet_id: parseInt(data.diet_id),
              state_id: json.data.id,
              country_id: parseInt(data.country_id),
              highest_degree: data.highest_degree,
              professional_area: data.professional_area,
              working_company: data.working_company,
              yearly_income: data.yearly_income,
              age: parseInt(data.age),
              maritial_status: data.marital_status,
              height: data.height,
            }),
          }
        );
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row d-flex  mr-2 justify-content-end">
          <button className="btn btn-primary closing-btn " onClick={closeModal}>
            X
          </button>
        </div>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12 text-center">
              <h1 className="mt-2">Edit Partner Preference</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                name="age"
                type="number"
                className={`form-control `}
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="height">Height</label>
              <input
                ref={register({ required: true })}
                type="number"
                step="0.1"
                maxLength="2"
                name="height"
                className="form-control"
              />
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
                {religions?.length >= 1 ? (
                  religions.map((religion) => (
                    <option key={religion.id} value={religion.id}>
                      {religion.name}
                    </option>
                  ))
                ) : (
                  <option value="null">Please reload the page again</option>
                )}
              </select>
            </div>

            <div className="form-group">
              <label className="brand-text" htmlFor="">
                Marital Status
              </label>
              <select
                ref={register({ required: true })}
                name="marital_status"
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
              <label className="brand-text" htmlFor="">
                Diet List
              </label>
              <select
                ref={register({ required: true })}
                name="diet_id"
                className="form-control"
              >
                {errors.religion && (
                  <span className="text-danger">Diet id is required</span>
                )}
                {diets?.length >= 1 &&
                  diets.map((diet) => (
                    <option key={diet.id} value={diet.id}>
                      {diet.name}
                    </option>
                  ))}
              </select>
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
              <label htmlFor="education">Highest Degree</label>
              <input
                name="highest_degree"
                type="text"
                className={`form-control `}
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <div>
                <label className="brand-text" htmlFor="">
                  Employed In
                </label>
                <input
                  required
                  ref={register({ required: true })}
                  type="text"
                  name="working_company"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label className="brand-text" htmlFor="">
                  Professional Area
                </label>
                <input
                  required
                  ref={register({ required: true })}
                  type="text"
                  name="professional_area"
                  className="form-control"
                  placeholder="Ex: Software Developer"
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label className="brand-text" htmlFor="">
                  Annual Income
                </label>
                <input
                  required
                  ref={register({ required: true })}
                  type="number"
                  name="yearly_income"
                  className="form-control"
                />
              </div>
            </div>

            <button className="btn premium-btn btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditPartnerPreferenceTable;
