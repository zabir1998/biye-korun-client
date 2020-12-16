import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import HRNumbers from "human-readable-numbers";
import { useState } from "react";
import EditEducationCareerTable from "./EditEducationCareerTable";

const EducationCareerTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const profileData = useSelector((state) => state.profile);
  return (
    <div>
      <div className="shadow px-3 pb-3">
        <div className="row d-flex justify-content-between mt-3 pt-5 mx-2 pb-5 table-header-row">
          <h3>Education and Career</h3>
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
        {profileData.loading ? (
          <CircularProgress />
        ) : (
          <div>
            <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
              <p>Highest Qualification</p>
              <p>{profileData?.profile?.user_career[0]?.highest_degree}</p>
            </div>
            <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
              <p>College</p>
              <p>AUST</p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Working With</p>
              <p>{profileData?.profile?.user_career[0]?.working_company}</p>
            </div>

            <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
              <p>Working As</p>
              <p>{profileData?.profile?.user_career[0]?.professional_area}</p>
            </div>
            <div className="row d-flex justify-content-between mb-4 mt-2 mx-2 table-row">
              <p>Annual Income</p>
              <p>
                {HRNumbers.toHumanString(
                  profileData?.profile?.user_career[0]?.yearly_income
                )}
              </p>
            </div>
          </div>
        )}
      </div>
      <EditEducationCareerTable
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></EditEducationCareerTable>
    </div>
  );
};

export default EducationCareerTable;
