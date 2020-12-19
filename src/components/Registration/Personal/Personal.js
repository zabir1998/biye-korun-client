import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import NavReg from '../NavReg/NavReg';
import NavBar from '../../../components/Home/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './Personal.css';

const Personal = ({ countries, fetchCountries, addUserDetail }) => {
  const [languages, setLanguages] = useState([]);
  const [religions, setReligions] = useState([]);
  const [diets, setDiets] = useState([]);
  const [token, setToken] = useState(null);
  const { register, handleSubmit, watch, errors } = useForm();
  const [messages, setErrorMessages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
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

    fetch('https://biyekorun-staging.techserve4u.com/category/diet/diet-list', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDiets(data.data));
  }, [token]);

  const onSubmit = async (data) => {
    const ISODate = new Date(data.dateOfBirth).toISOString();
    //console.log(ISODate);
    await fetch(
      `https://biyekorun-staging.techserve4u.com/category/community/community-by-religion/${data.religion_id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((returnData) => {
        // console.log({
        //   profile_name: data.profile_name,
        //   religion_id: parseInt(data.religion_id),
        //   community_id: parseInt(returnData.data[0].id),
        //   diet_id: parseInt(data.diet_id),
        //   dateOfBirth: ISODate,
        //   language_id: parseInt(data.language_id),
        //   maritial_status: data.marital_status,
        //   height: data.height,
        // });

        // https://biyekorun-staging.techserve4u.com/user/user-profile

        fetch(`https://biyekorun-staging.techserve4u.com/user/user-profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            profile_name: data.profile_name,
            religion_id: parseInt(data.religion_id),
            community_id: parseInt(returnData.data[0].id),
            diet_id: parseInt(data.diet_id),
            dateOfBirth: ISODate,
            language_id: parseInt(data.language_id),
            maritial_status: data.marital_status,
            height: data.height,
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            if (json.statusCode === 201) {
              alert(json.message);
            } else if (json.statusCode === 409) {
              alert(json.message);
            } else if (json.statusCode === 400) {
              setErrorMessages(json.message);
            }

            //             console.log(json);
            //             if (json.statusCode === 201) {
            //               console.log(typeof json.statusCode);
            //               window.location.replace('/career');
            //               alert(json.message);
            //               return;
            //             } else if (json.statusCode === 409) {
            //               window.location.replace('/career');
            //               alert(json.message);
            //               return;
            //             }

            //             alert(json.message);
          });
      });
  };

  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      {messages.length >= 1 &&
        messages.map((message) => (
          <p className="text-danger">{JSON.stringify(message.constraints)}</p>
        ))}
      <div className="row ">
        <div className="col-md-3"></div>
        <div className="col-md-6 form-container">
          <NavReg></NavReg>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div>
                <label className="brand-text" htmlFor="">
                  Bride's Name
                </label>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="profile_name"
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
                  min="2000-01-01"
                  className="form-control"
                />
                {errors.dateOfBirth && (
                  <span className="text-danger">Date of Birth is required</span>
                )}
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
                Mother tongue
              </label>
              <select
                ref={register({ required: true })}
                name="language_id"
                className="form-control"
              >
                {errors.religion && (
                  <span className="text-danger">Mother tongue is required</span>
                )}
                {languages?.length >= 1 &&
                  languages.map((language) => (
                    <option key={language.id} value={language.id}>
                      {language.name}
                    </option>
                  ))}
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
                  Height
                </label>
                <input
                  ref={register({ required: true })}
                  type="number"
                  placeholder="Please enter your height in cm format"
                  min="100"
                  max="250"
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
              <div className="my-3">
                <Link to="/career" className="main-btn">
                  Go to next
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Personal;
