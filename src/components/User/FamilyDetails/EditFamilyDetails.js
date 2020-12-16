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

const EditFamilyDetails = ({ modalIsOpen, closeModal, bio }) => {
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
              <h1 className="mt-2">Edit Family Details</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fathersStatus">Father's Status</label>
              <input
                name="fathersStatus"
                placeholder="Put your name"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="workingIn">Working In</label>
              <input
                name="workingIn"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="as">As</label>
              <input
                name="as"
                placeholder="your gender"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mothersStatus">Mother's Status</label>
              <input
                name="mothersStatus"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nativePlace">Native Place</label>
              <input
                name="nativePlace"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brothers">No of Brothers</label>
              <input
                name="brothers"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sisters">No. of Sisters</label>
              <input
                name="sisters"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="familyType">Family Type</label>
              <input
                name="familyType"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="familyAffluence">Family Affluence</label>
              <input
                name="familyAffluence"
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

export default EditFamilyDetails;
