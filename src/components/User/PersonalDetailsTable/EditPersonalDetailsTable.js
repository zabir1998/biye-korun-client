import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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

const EditPersonalDetailsTable = ({ modalIsOpen, closeModal, bio }) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (values) => {
    // form is valid
    console.log(values);
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
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                placeholder="Put your name"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthday">Birthday</label>
              <input
                name="birthday"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="iAmA">I am a</label>
              <input
                name="iAmA"
                placeholder="your gender"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lookingForA">Looking For A</label>
              <input
                name="lookingForA"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maritalStatus">Marital Status</label>
              <input
                name="maritalStatus"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                name="country"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="religion">Religion</label>
              <input
                name="religion"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="community">Community</label>
              <input
                name="community"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
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

export default EditPersonalDetailsTable;
