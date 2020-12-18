import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useSelector } from 'react-redux';

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

const EditEducationCareerTable = ({ modalIsOpen, closeModal, bio }) => {
  const { register, handleSubmit } = useForm();

  const [degree, setDegree] = useState('');
  //const [college, setCollege] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [professionalArea, setProfessionalArea] = useState('');
  const [income, setIncome] = useState('');
  const [token, setToken] = useState(null);

  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    setDegree(profileData?.profile?.user_career[0]?.highest_degree);
    setCompanyName(profileData?.profile?.user_career[0]?.working_company);
    setProfessionalArea(
      profileData?.profile?.user_career[0]?.professional_area
    );
    setIncome(profileData?.profile?.user_career[0]?.yearly_income);
  }, [profileData]);

  const onSubmit = (data) => {
    //console.log(data);
    fetch('https://biyekorun-staging.techserve4u.com/user/user-career/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        highest_degree: data.highest_degree,
        working_company: data.working_company,
        yearly_income: data.yearly_income,
        professional_area: data.professional_area,
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
              <h1 className="mt-2">Edit Education Career Details</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
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
            {/* <div>
              <label className="brand-text" htmlFor="">
                College / Institute
              </label>
              <input
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
                ref={register({ required: true })}
                type="text"
                name="college"
                className="form-control"
              />
            </div> */}
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
                  Professional Area
                </label>
                <input
                  value={professionalArea}
                  onChange={(e) => setProfessionalArea(e.target.value)}
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

            <button className="btn premium-btn btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditEducationCareerTable;
