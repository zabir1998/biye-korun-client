import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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

const EditPhysicalTable = ({ modalIsOpen, closeModal, bio }) => {
  const { register, handleSubmit, errors } = useForm();
  const [token, setToken] = useState(null);
  const [messages, setErrorMessages] = useState([]);
  const [smokingStatus, setSmokingStatus] = useState('');
  const [drinkingStatus, setDrinkingStatus] = useState('');
  const [sunSign, setSunSign] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [disabilityStatus, setDisabilityStatus] = useState('');
  const [weight, setWeight] = useState('');

  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
  }, []);

  useEffect(() => {
    setSmokingStatus(
      profileData?.profile?.user_physical_lifestyle[0]?.smoking_status
    );
    setDrinkingStatus(
      profileData?.profile?.user_physical_lifestyle[0]?.drinking_status
    );
    setSunSign(profileData?.profile?.user_physical_lifestyle[0]?.sun_sign);
    setBloodGroup(
      profileData?.profile?.user_physical_lifestyle[0]?.blood_group
    );
    setHealthStatus(
      profileData?.profile?.user_physical_lifestyle[0]?.health_status
    );
    setDisabilityStatus(
      profileData?.profile?.user_physical_lifestyle[0]?.disability_status
    );
    setWeight(profileData?.profile?.user_physical_lifestyle[0]?.weight);
  }, [profileData]);

  const onSubmit = async (data) => {
    console.log(data);
    fetch(
      'https://biyekorun-staging.techserve4u.com/user/user-physical-lifestyle',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
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
        if (json.statusCode === 200) {
          toast.success(json.message);
          window.location.reload();
        } else {
          toast.error(json?.message[0]?.constraints?.minLength);
        }
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
              <h1 className="mt-2">Edit Physical Details</h1>
            </div>
          </div>
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
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
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
                  value={smokingStatus}
                  onChange={(e) => setSmokingStatus(e.target.value)}
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
                  value={drinkingStatus}
                  onChange={(e) => setDrinkingStatus(e.target.value)}
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
                  value={healthStatus}
                  onChange={(e) => setHealthStatus(e.target.value)}
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
                  value={sunSign}
                  onChange={(e) => setSunSign(e.target.value)}
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
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
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
                  value={disabilityStatus}
                  onChange={(e) => setDisabilityStatus(e.target.value)}
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
                  <input className="main-btn" type="submit" value="Update" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditPhysicalTable;
