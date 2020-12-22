import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function valuetext(value) {
  return `${value}years`;
}

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

  const classes = useStyles();
  const [ageValue, setAgeValue] = React.useState([20, 48]);
  const [heightValue, setHeightValue] = React.useState([20, 48]);
  const [religionId, setReligionId] = useState(0);
  const [countryId, setCountryId] = useState(0);
  const [dietId, setDietId] = useState(0);
  const [meritalStatus, setMeritalStatus] = useState('');
  const [degree, setDegree] = useState('');
  const [area, setArea] = useState('');
  const [income, setIncome] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleAgeChange = (event, newValue) => {
    setAgeValue(newValue);
  };
  const handleHeightChange = (event, newValue) => {
    setHeightValue(newValue);
  };

  const partner = useSelector((state) => state.partner);
  //console.log(partner);

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

    setReligionId(partner?.partnerPreference?.findPreference?.religion_id?.id);
    setCountryId(partner?.partnerPreference?.findPreference?.country_id?.id);
    setDietId(partner?.partnerPreference?.findPreference?.diet_id?.id);
    setMeritalStatus(
      partner?.partnerPreference?.findPreference?.maritial_status
    );
    setDegree(partner?.partnerPreference?.findPreference?.highest_degree);
    setArea(partner?.partnerPreference?.findPreference?.professional_area);
    setIncome(partner?.partnerPreference?.findPreference?.yearly_income);
    setCompanyName(partner?.partnerPreference?.findPreference?.working_company);
  }, [token, partner]);

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
        // console.log(
        //   JSON.stringify({
        //     religion_id: parseInt(data.religion_id),
        //     diet_id: parseInt(data.diet_id),
        //     state_id: json.data[0].id,
        //     country_id: parseInt(data.country_id),
        //     highest_degree: data.highest_degree,
        //     professional_area: data.professional_area,
        //     working_company: data.working_company,
        //     yearly_income: data.yearly_income,
        //     maritial_status: data.marital_status,
        //     age_range_start: ageValue[0],
        //     age_range_end: ageValue[1],
        //     height_range_start: heightValue[0],
        //     height_range_end: heightValue[1],
        //   })
        // );

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
              state_id: json.data[0].id,
              country_id: parseInt(data.country_id),
              highest_degree: data.highest_degree,
              professional_area: data.professional_area,
              working_company: data.working_company,
              yearly_income: data.yearly_income,
              maritial_status: data.marital_status,
              age_range_start: ageValue[0],
              age_range_end: ageValue[1],
              height_range_start: heightValue[0],
              height_range_end: heightValue[1],
            }),
          }
        )
          .then((res) => res.json())
          .then((json) => {
            //console.log(json);
            toast.success(json.message);
            window.location.reload();
          });
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
            <div>
              <div className={classes.root}>
                <Typography
                  className="text-center"
                  id="range-slider"
                  gutterBottom
                >
                  Age Range
                </Typography>
                <Slider
                  value={ageValue}
                  onChange={handleAgeChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                />
              </div>

              <div className={classes.root}>
                <Typography
                  className="text-center"
                  id="range-slider"
                  gutterBottom
                >
                  Height Range
                </Typography>
                <Slider
                  value={heightValue}
                  onChange={handleHeightChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                />
              </div>

              <div className="form-group">
                <label className="brand-text" htmlFor="">
                  Religion
                </label>
                <select
                  value={religionId}
                  onChange={(e) => setReligionId(e.target.value)}
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
                  Diet List
                </label>
                <select
                  value={dietId}
                  onChange={(e) => setDietId(e.target.value)}
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
                    value={countryId}
                    onChange={(e) => setCountryId(e.target.value)}
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
                <div>
                  <label className="brand-text" htmlFor="">
                    Highest Degrees
                  </label>
                  <input
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    required
                    ref={register({ required: true })}
                    type="text"
                    name="highest_degree"
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
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
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
                    Employed In
                  </label>
                  <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
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
                    Annual Income
                  </label>
                  <input
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    required
                    ref={register({ required: true })}
                    type="number"
                    name="yearly_income"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="brand-text" htmlFor="">
                  Marital Status
                </label>
                <select
                  value={meritalStatus}
                  onChange={(e) => setMeritalStatus(e.target.value)}
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
            </div>
            <br />

            <input
              style={{ backgroundColor: 'rgb(142, 139, 230)', color: 'white' }}
              className="form-control"
              type="submit"
              value="submit"
            />

            <br />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditPartnerPreferenceTable;
