import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NavBar from "../../Home/NavBar/NavBar";
import NavReg from "../NavReg/NavReg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Physical = () => {
  const { register, handleSubmit, errors } = useForm();
  const [token, setToken] = useState(null);
  const [messages, setErrorMessages] = useState([]);

  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    fetch(
      "https://biyekorun-staging.techserve4u.com/user/user-physical-lifestyle",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          smoking_status: data.smoking_status,
          drinking_status: data.drinking_status,
          sun_sign: data.sun_sign,
          blood_group: data.blood_group,
          health_status: data.health_status,
          disability_status: data.disability_status,
          hair_color_id: 0,
          body_type_id: 0,
          weight: parseInt(data.weight),
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        toast.success(json.message);
        if (json.statusCode === 400) {
          setErrorMessages(json.message);
          window.scrollTo(0, 0);
        } else if (json.statusCode === 409) {
          window.location.replace("/user/dashboard");
        } else if (json.statusCode === 200) {
          window.location.replace("/user/dashboard");
          toast.success(json.message);
        }
      });
    fetch(
      "https://biyekorun-staging.techserve4u.com/user/add-match-constraints",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="row mt-3">
        <div className="col-md-2"></div>
        <div className="col-md-8 form-container">
          <div>
            <NavReg></NavReg>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {messages.length >= 1 &&
                messages.map((message) => (
                  <p className="text-danger">
                    {JSON.stringify(message.constraints)}
                  </p>
                ))}
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Weight
                  </label>
                  <input
                    ref={register({ required: true })}
                    type="number"
                    name="weight"
                    className="form-control"
                    placeholder="Ex: 50 kg"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Smoking Status
                  </label>
                  <input
                    type="text"
                    ref={register({ required: true })}
                    name="smoking_status"
                    className="form-control"
                    placeholder="Ex: Nevenr"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Drinking Status
                  </label>
                  <input
                    type="text"
                    ref={register({ required: true })}
                    name="drinking_status"
                    className="form-control"
                    placeholder="Ex: Normal Water"
                  />
                </div>
              </div>
              {/* <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Hair Color
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="hair_color_id"
                    className="form-control"
                    placeholder="Ex: Brown"
                  />
                </div>
              </div> */}
              {/* <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Body Type
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="body_type_id"
                    className="form-control"
                    placeholder="Ex: Tall"
                  />
                </div>
              </div> */}
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Health Info
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="health_status"
                    className="form-control"
                    placeholder="Ex: Fit"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Sun Sign
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="sun_sign"
                    className="form-control"
                  >
                    <option value="">-- select your sun sign --</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="	Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="	Virgo"> Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Blood Group
                  </label>
                  <select
                    ref={register({ required: true })}
                    name="blood_group"
                    className="form-control"
                  >
                    <option value="">-- select your blood group --</option>
                    <option value="A+ve">A+ve</option>
                    <option value="A-ve">A-ve</option>
                    <option value="B+ve">B+ve</option>
                    <option value="B-ve">B-ve</option>
                    <option value="O+ve">O+ve</option>
                    <option value="O-ve">O-ve</option>
                    <option value="AB+ve">AB+ve</option>
                    <option value="AB-ve">AB-ve</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Disability
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="disability_status"
                    className="form-control"
                    placeholder="Ex: I have diabetic and blood pressure"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-around align-items-center">
                  {/* <div>
                    <Link to="/lifestyle" className="main-btn">
                      Go to pervious
                    </Link>
                  </div> */}
                  <div>
                    <input
                      className="main-btn"
                      type="submit"
                      value="Add to My Profile"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Physical;
