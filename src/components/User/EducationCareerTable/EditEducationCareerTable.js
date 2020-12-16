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

const EditEducationCareerTable = ({ modalIsOpen, closeModal, bio }) => {
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
              <h1 className="mt-2">Edit Education Career Details</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="highestQualification">
                Highest Qualification
              </label>
              <input
                name="highestQualification"
                placeholder="Put your name"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="college">College</label>
              <input
                name="college"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="workingWith">Working With</label>
              <input
                name="workingWith"
                placeholder="your gender"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="workingAs">Working As</label>
              <input
                name="workingAs"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="annualIncome">Annual Income</label>
              <input
                name="annualIncome"
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

export default EditEducationCareerTable;
