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

const EditPhysicalTable = ({ modalIsOpen, closeModal, bio }) => {
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
              <h1 className="mt-2">Edit Physical Details</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="height">Height</label>
              <input
                name="height"
                placeholder="Put your Height"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">weight</label>
              <input
                name="weight"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
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
            </div>
            <div className="form-group">
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
            </div>
            <div className="form-group">
              <label htmlFor="diet">Diet</label>
              <input
                name="diet"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sunSign">Sun Sign</label>
              <input
                name="sunSign"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <input
                name="bloodGroup"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="healthInfo">Health Info</label>
              <input
                name="healthInfo"
                placeholder="Tell about yourself"
                defaultValue="call from api"
                className={`form-control `}
                ref={register({
                  required: "Please Tell something about yourself",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="disability">Disability</label>
              <input
                name="disability"
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

export default EditPhysicalTable;
