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

  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="row ">
        <div className="col-md-2"></div>
        <div className="col-md-8 form-container">
          <div>
            <NavReg></NavReg>
          </div>
          <div>
            <form>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Weight
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="weight"
                    className="form-control"
                    placeholder="Ex: 50 kg"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Hair Color
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="hair_color"
                    className="form-control"
                    placeholder="Ex: Brown"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Body Type
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="body_type"
                    className="form-control"
                    placeholder="Ex: Tall"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label className="brand-text" htmlFor="">
                    Health Info
                  </label>
                  <input
                    ref={register({ required: true })}
                    name="health_info"
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
                    name="disability"
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
