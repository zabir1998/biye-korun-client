import React, { useEffect, useState } from "react";
import NavBar from "../../Home/NavBar/NavBar";
import PreferenceBasic from "../PreferenceBasic/PreferenceBasic";
import PreferenceEducation from "../PreferenceEducation/PreferenceEducation";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function valuetext(value) {
  return `${value}years`;
}

const Preference = () => {
  const [token, setToken] = useState(null);
  const [religions, setReligions] = useState([]);
  const [diets, setDiets] = useState([]);
  const [countries, setCountries] = useState([]);

  const { register, handleSubmit, watch, errors } = useForm();

  const classes = useStyles();
  const [ageValue, setAgeValue] = React.useState([20, 48]);
  const [heightValue, setHeightValue] = React.useState([20, 48]);

  const handleAgeChange = (event, newValue) => {
    setAgeValue(newValue);
  };
  const handleHeightChange = (event, newValue) => {
    setHeightValue(newValue);
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));

    fetch(
      "https://biyekorun-staging.techserve4u.com/category/religion/religion-list",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setReligions(data.data));

    fetch("https://biyekorun-staging.techserve4u.com/category/diet/diet-list", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDiets(data.data));

    fetch(
      "https://biyekorun-staging.techserve4u.com/category/country/country-list",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setCountries(data.data));
  }, [token]);

  const onSubmit = async (data) => {
    await fetch(
      `https://biyekorun-staging.techserve4u.com/category/state/state-by-country/${parseInt(
        data.country_id
      )}`,
      {
        method: "GET",
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
        //     diet_id: parseInt(data.religion_id),
        //     state_id: json.data[0].id,
        //     country_id: parseInt(data.religion_id),
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
          "https://biyekorun-staging.techserve4u.com/user/user-preference",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              religion_id: parseInt(data.religion_id),
              diet_id: parseInt(data.religion_id),
              state_id: json.data[0].id,
              country_id: parseInt(data.religion_id),
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
          .then((json) => toast.success(json.message));
      });
  };

  return (
    <div className="container">
      <div style={{ marginBottom: 40 }}>
        <div>
          <NavBar></NavBar>
        </div>
        <div>
          <h3
            className="text-center"
            style={{ paddingBottom: 20, marginTop: 10 }}
          >
            Desired Partner Profile
          </h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            auctor feugiat congue. Aenean vitae faucibus orci. Aliquam bibendum
            vitae neque in ultrices. Sed nec aliquet est. Nunc cursus, orci non
            pharetra commodo, erat lorem egestas enim, a lacinia neque neque
            eget nisl. Nunc scelerisque, tellus tristique tincidunt pretium.
          </p>
        </div>
        <div
          className="text-center"
          style={{ backgroundColor: "#8e8be6", color: "white", padding: 20 }}
        >
          <h4> No. of mutual with below criteria 974 </h4>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={classes.root}>
            <Typography className="text-center" id="range-slider" gutterBottom>
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
            <Typography className="text-center" id="range-slider" gutterBottom>
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
            <div>
              <label className="brand-text" htmlFor="">
                Highest Degrees
              </label>
              <input
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
              ref={register({ required: true })}
              name="marital_status"
              className="form-control"
            >
              {errors.maritalStatus && (
                <span className="text-danger">Marital Status is required</span>
              )}
              <option value="Unmarried">Unmarried</option>
              <option value="Married">Married</option>
            </select>
          </div>
        </div>
        <br />

        <input
          style={{ backgroundColor: "rgb(142, 139, 230)", color: "white" }}
          className="form-control"
          type="submit"
          value="submit"
        />

        <br />
      </form>
    </div>
  );
};

export default Preference;
