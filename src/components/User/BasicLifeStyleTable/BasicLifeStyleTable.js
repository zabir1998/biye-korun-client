import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditBasicLifeStyleTable from "./EditBasicLifeStyleTable";

const BasicLifeStyleTable = () => {
  const profileData = useSelector((state) => state.profile);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="shadow px-3 pb-3 mt-5">
        <div className="row d-flex justify-content-between mt-3 pt-3 mx-2 pb-3 table-header-row">
          <h3>Basic & LifeStyle</h3>
          <Link onClick={openModal}>
            <p>
              <small>
                <span>
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faEdit}
                  ></FontAwesomeIcon>
                </span>
                Edit
              </small>
            </p>
          </Link>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Interests</p>
          <p>Pool, Card, Swimming</p>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Smoking</p>
          <p>Never</p>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Language</p>
          <p>{profileData?.profile?.user_profile[0]?.language_id.name}</p>
        </div>
        <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
          <p>Grew Up In</p>
          <p>Bangladesh</p>
        </div>
        <div className="row d-flex justify-content-between mb-4 mt-2 mx-2 table-row">
          <p>Name</p>
          <p>{profileData?.profile?.user_profile[0]?.profile_name}</p>
        </div>
      </div>
      <EditBasicLifeStyleTable
        bio={profileData?.profile?.user_profile[0]}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></EditBasicLifeStyleTable>
    </div>
  );
};

export default BasicLifeStyleTable;
