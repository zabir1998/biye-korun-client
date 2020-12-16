import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import NavBar from '../../Home/NavBar/NavBar';
import NavReg from '../NavReg/NavReg';
import { Link } from 'react-router-dom';

const Lifestyle = ({ countries, fetchCountries, addUserDetail }) => {
  const { register, handleSubmit, errors } = useForm();
  const [occupations, setOccupations] = useState([]);
  const [token, setToken] = useState(null);
  const [messages, setErrorMessages] = useState([]);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch(
      'https://biyekorun-staging.techserve4u.com/category/occupation/occupation-list',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setOccupations(json.data);
      });
  }, [token]);

  const onSubmit = (data) => {
    // console.log(
    //   JSON.stringify({
    //     family_type: data.family_type,
    //     fathers_occupation: data.fathers_occupation,
    //     mothers_occupation: data.mothers_occupation,
    //     family_living_place: data.family_living_place,
    //     family_bio: data.family_bio,
    //     contact_address: data.contact_address,
    //     brother_count: parseInt(data.brother_count),
    //     sister_count: parseInt(data.sister_count),
    //   })
    // );

    // https://biyekorun-staging.techserve4u.com/user/user-family

    fetch(`https://biyekorun-staging.techserve4u.com/user/user-family`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        family_type: data.family_type,
        fathers_occupation: data.fathers_occupation,
        mothers_occupation: data.mothers_occupation,
        family_living_place: data.family_living_place,
        family_bio: data.family_bio,
        contact_address: data.contact_address,
        brother_count: parseInt(data.brother_count),
        sister_count: parseInt(data.sister_count),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        if (json.statusCode === 201) {
          alert(json.message);
        } else if (json.statusCode === 409) {
          alert(json.message);
        } else if (json.statusCode === 400) {
          setErrorMessages(json.message);
        }
      });
  };

  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="row ">
        <div className="col-md-3"></div>
        <div className="col-md-6 form-container">
          <div>
            <NavReg></NavReg>
          </div>
          {messages.length >= 1 &&
            messages.map((message) => (
              <p className="text-danger">
                {JSON.stringify(message.constraints)}
              </p>
            ))}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Family Type
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="family_type"
                    className="form-control"
                    placeholder="Ex: Joint Family"
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Father's Occupation
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="fathers_occupation"
                    className="form-control"
                  >
                    <option value="">
                      -- please select the fathers occupation --
                    </option>
                    {occupations?.length >= 1 ? (
                      occupations.map((occupation) => (
                        <option key={occupation.id} value={occupation.name}>
                          {occupation.name}
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
                  <label className="brand-text" htmlFor="">
                    Mother's Occupation
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="mothers_occupation"
                    className="form-control"
                  >
                    <option value="">
                      -- please select the mothers occupation --
                    </option>
                    {occupations?.length >= 1 ? (
                      occupations.map((occupation) => (
                        <option key={occupation.id} value={occupation.name}>
                          {occupation.name}
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
                  <label className="brand-text" htmlFor="">
                    Brother
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="brother_count"
                    className="form-control"
                  >
                    <option value="">
                      -- select how many brothers you have --
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Sister
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="sister_count"
                    className="form-control"
                  >
                    <option value="">
                      -- select how many sisters you have --
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Family Living In
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="family_living_place"
                    className="form-control"
                    placeholder="Ex: Dhaka, Bangladesh"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Contact Address
                  </label>
                  <input
                    ref={register({ required: true })}
                    type="text"
                    name="contact_address"
                    className="form-control"
                    placeholder="Address"
                  />
                  {errors.firstName && (
                    <span className="text-danger">
                      Contact Address is required
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    About My Family
                  </label>
                  <input
                    ref={register({ required: true })}
                    type="text"
                    name="family_bio"
                    className="form-control"
                    placeholder="Family Bio must be longer than 50 characters"
                    style={{
                      width: 500,
                      paddingBottom: 100,
                      paddingTop: 10,
                      marginBottom: 30,
                      boxShadow: 40,
                      borderRadius: 5,
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-around align-items-center">
                  <div>
                    <Link to="/career" className="main-btn">
                      Go to pervious
                    </Link>
                  </div>
                  <div>
                    <input
                      className="main-btn"
                      type="submit"
                      value="Add to My Profile"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 text-center">
                <a
                  style={{ color: '#8e8be6', paddingTop: 15 }}
                  href="https://google.com"
                >
                  I will add this later
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Lifestyle;
