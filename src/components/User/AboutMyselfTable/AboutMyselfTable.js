import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState } from "react";
import EditAboutMyselfTable from "./EditAboutMyselfTable";

const AboutMyselfTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const profileData = useSelector((state) => state.profile);

  return (
    <div className="shadow px-3 pb-3 mt-5">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-2 pb-3 table-header-row">
        <h3>About Myself</h3>
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
      <div className="row  my-3 mx-2 table-row">
        <p>
          {profileData.loading ? (
            <CircularProgress />
          ) : (
            profileData?.profile?.user_career[0]?.bio
          )}
        </p>
      </div>

      <EditAboutMyselfTable
        bio={profileData?.profile?.user_career[0]?.bio}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></EditAboutMyselfTable>
    </div>
  );
};

export default AboutMyselfTable;
