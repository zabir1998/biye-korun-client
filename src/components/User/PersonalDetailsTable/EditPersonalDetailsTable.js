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

const EditPersonalDetailsTable = ({ modalIsOpen, closeModal, bio }) => {
  const [languages, setLanguages] = useState([]);
  const [religions, setReligions] = useState([]);
  const [token, setToken] = useState(null);
  const { register, errors, handleSubmit } = useForm();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [religionId, setReligionId] = useState(0);
  const [meritalStatus, setMeritalStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));

    setName(profileData?.profile?.user_profile[0]?.profile_name);
    setDate(profileData?.profile?.user_profile[0]?.dateOfBirth?.slice(0, 10));
    setMeritalStatus(profileData?.profile?.user_profile[0]?.maritial_status);
    setReligionId(profileData?.profile?.user_profile[0]?.religion_id.id);
    setPhoneNumber(profileData?.profile?.user?.phone_number);

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
  }, [token, profileData]);

  const onSubmit = async (data) => {
    //console.log(data);
    const ISODate = new Date(data.dateOfBirth).toISOString();

    await fetch('https://biyekorun-staging.techserve4u.com/user/update-phone', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        phone_number: data.phone_number,
      }),
    });

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
        fetch(
          'https://biyekorun-staging.techserve4u.com/user/user-profile/update',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              profile_name: data.profile_name,
              religion_id: parseInt(data.religion_id),
              community_id: parseInt(returnData.data[0].id),
              dateOfBirth: ISODate,
              maritial_status: data.marital_status,
            }),
          }
        )
          .then((res) => res.json())
          .then((json) => {
            //console.log(json);
            if (json.statusCode === 201) {
              alert(json.message);
              window.location.reload();
            } else {
              alert(json?.message[0]?.constraints?.minLength);
            }
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
              <h1 className="mt-2">Edit Personal Details</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="brand-text" htmlFor="">
                Bride's Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={register({ required: true })}
                type="text"
                name="profile_name"
                className="form-control"
              />
              {errors.firstName && (
                <span className="text-danger">Bride's Name is required</span>
              )}
            </div>

            <div className="form-group">
              <div>
                <label className="brand-text" htmlFor="">
                  Date of Birth
                </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  ref={register({ required: true })}
                  type="date"
                  name="dateOfBirth"
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

            <div className="form-group">
              <label className="brand-text" htmlFor="">
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                ref={register({ required: true })}
                type="number"
                min="11"
                name="phone_number"
                className="form-control"
                placeholder="+88018********"
              />
              {errors.firstName && (
                <span className="text-danger">Phone Number is required</span>
              )}
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

export default EditPersonalDetailsTable;
