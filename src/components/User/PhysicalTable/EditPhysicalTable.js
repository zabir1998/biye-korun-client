import React, { useEffect, useState } from 'react';
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

const EditPhysicalTable = ({ modalIsOpen, closeModal, bio }) => {
  const { register, errors, handleSubmit } = useForm();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
  }, [token]);

  const onSubmit = async (data) => {
    // console.log(
    //   JSON.stringify({
    //     sun_sign: data.sun_sign,
    //     blood_group: data.blood_group,
    //     health_status: data.health_status,
    //     disability_status: data.disability_status,
    //     weight: parseInt(data.weight),
    //   })
    // );
    await fetch(
      'https://biyekorun-staging.techserve4u.com/user/user-physical-lifestyle',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          sun_sign: data.sun_sign,
          blood_group: data.blood_group,
          health_status: data.health_status,
          disability_status: data.disability_status,
          weight: parseInt(data.weight),
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
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
            <div className="form-group">
              <label htmlFor="weight">weight</label>
              <input
                name="weight"
                type="number"
                maxLength="3"
                className={`form-control `}
                ref={register({
                  required: 'Please Tell something about your weight',
                })}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="hairColor">Hair Color</label>
              <input
                name="hairColor"
                placeholder="your gender"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div> */}
            {/* <div className="form-group">
              <label htmlFor="bodyType">Body Type</label>
              <input
                name="bodyType"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="sunSign">Sun Sign</label>
              <input
                name="sun_sign"
                className={`form-control `}
                ref={register({
                  required: 'Please Tell something about yourself',
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <input
                name="blood_group"
                className={`form-control `}
                ref={register({
                  required: 'Please Tell something about your blood group',
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="healthInfo">Health Info</label>
              <input
                name="health_status"
                className={`form-control `}
                ref={register({
                  required: 'Please Tell something about your helo',
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="disability">Disability</label>
              <input
                name="disability_status"
                className={`form-control `}
                ref={register({
                  required: 'Please Tell something about yourself',
                })}
              />
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

export default EditPhysicalTable;
