import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditAboutMyselfTable = ({ modalIsOpen, closeModal }) => {
  const [token, setToken] = useState(null);
  const { register, errors, handleSubmit } = useForm();
  const profileData = useSelector((state) => state.profile);
  const [bio, setBio] = useState("");
  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));
    setBio(profileData?.profile?.user_career[0]?.bio);
  }, [profileData]);
  const onSubmit = (data) => {
    //console.log(data);

    fetch("https://biyekorun-staging.techserve4u.com/user/user-career/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bio: data.bio,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        if (json.statusCode === 200) {
          toast.success(json.message);
          window.location.reload();
        } else {
          toast.error(json?.message[0]?.constraints?.minLength);
          console.log(json.message[0]);
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
              <h1 className="mt-2">Edit About Yourself</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="about">About</label>

              {profileData.loading ? (
                <CircularProgress />
              ) : (
                <input
                  name="bio"
                  placeholder="Tell about yourself"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className={`form-control`}
                  ref={register({
                    required: "Please Tell something about yourself",
                  })}
                />
              )}

              <ErrorMessage
                className="invalid-feedback"
                name="about"
                as="div"
                errors={errors}
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

export default EditAboutMyselfTable;
