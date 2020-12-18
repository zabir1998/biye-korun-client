import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "70%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditFamilyDetails = ({ modalIsOpen, closeModal, bio }) => {
  const [token, setToken] = useState(null);
  const [occupations, setOccupations] = useState([]);
  const [familyType, setFamilyType] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [mothersOccupation, setMotherOccupation] = useState("");
  const [familyLivingPlace, setFamilyLivingPlace] = useState("");
  const [brotherCount, setBrotherCount] = useState("");
  const [sisterCount, setSisterCount] = useState("");

  const profileData = useSelector((state) => state.profile);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));
    fetch(
      "https://biyekorun-staging.techserve4u.com/category/occupation/occupation-list",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setOccupations(json.data);
      });

    setFatherOccupation(profileData?.profile?.user_family?.fathers_occupation);
    setMotherOccupation(profileData?.profile?.user_family?.mothers_occupation);
    setFamilyLivingPlace(
      profileData?.profile?.user_family?.family_living_place
    );
    setBrotherCount(profileData?.profile?.user_family?.brother_count);
    setSisterCount(profileData?.profile?.user_family?.sister_count);
    setFamilyType(profileData?.profile?.user_family?.family_type);
  }, [token, profileData]);

  useEffect(() => {}, [token]);

  const onSubmit = (data) => {
    // form is valid
    //console.log(data);

    fetch(`https://biyekorun-staging.techserve4u.com/user/user-family/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        family_type: data.family_type,
        fathers_occupation: data.fathers_occupation,
        mothers_occupation: data.mothers_occupation,
        family_living_place: data.family_living_place,
        brother_count: parseInt(data.brother_count),
        sister_count: parseInt(data.sister_count),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        if (json.statusCode === 200) {
          alert(json.message);
          window.location.reload();
        } else {
          alert(json?.message[0]?.constraints?.minLength);
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
              <h1 className="mt-2">Edit Family Details</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div>
                <label className="brand-text" htmlFor="">
                  Family Type
                </label>
                <input
                  value={familyType}
                  onChange={(e) => setFamilyType(e.target.value)}
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
                  value={fatherOccupation}
                  onChange={(e) => setFatherOccupation(e.target.value)}
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
                  value={mothersOccupation}
                  onChange={(e) => setMotherOccupation(e.target.value)}
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
                  value={brotherCount}
                  onChange={(e) => setBrotherCount(e.target.value)}
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
                  value={sisterCount}
                  onChange={(e) => setSisterCount(e.target.value)}
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
                  value={familyLivingPlace}
                  onChange={(e) => setFamilyLivingPlace(e.target.value)}
                  ref={register({ required: true })}
                  name="family_living_place"
                  className="form-control"
                  placeholder="Ex: Dhaka, Bangladesh"
                />
              </div>
            </div>

            <div className="form-group">
              <button className="btn premium-btn btn-block" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditFamilyDetails;
