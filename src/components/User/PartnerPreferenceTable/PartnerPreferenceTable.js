import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditPartnerPreferenceTable from './EditPartnerPreferenceTable';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const PartnerPreferenceTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const partner = useSelector((state) => state.partner);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="shadow px-3 pb-3">
      <div className="row d-flex justify-content-between mt-3 pt-4 mx-2 pb-3 table-header-row">
        <h3>Partner Preference</h3>
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

      {partner.loading ? (
        <CircularProgress />
      ) : (
        <div className="row d-flex justify-content-between">
          <div className="col-md-4 mt-3 left-content">
            <div className="row mt-2 mx-2 mb-4 pb-2">
              <h4>Basic Info</h4>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Age</p>
              <p>{`${partner?.partnerPreference?.findPreference?.age_range_start} to ${partner?.partnerPreference?.findPreference?.age_range_end} `}</p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Height</p>
              <p>{`${partner?.partnerPreference?.findPreference?.height_range_start} to ${partner?.partnerPreference?.findPreference?.height_range_end} `}</p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Religion/ Community</p>
              <p>
                {partner?.partnerPreference?.findPreference?.religion_id?.name}
              </p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Mother Tongue</p>
              <p>Bengali</p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Marital Status</p>
              <p>
                {partner?.partnerPreference?.findPreference?.maritial_status}
              </p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Diet</p>
              <p>{partner?.partnerPreference?.findPreference?.diet_id?.name}</p>
            </div>
          </div>

          <div className="col-md-4 mt-3 left-content">
            <div className="row mt-2 mx-2 mb-4 pb-2">
              <h4>Location Details</h4>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Country Living In</p>
              <p>
                {partner?.partnerPreference?.findPreference?.country_id?.name}
              </p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>State Living In</p>
              <p>
                {partner?.partnerPreference?.findPreference?.state_id?.name}
              </p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>City</p>
              <p>Doesn't Matter</p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Dist</p>
              <p>Doesn't Matter</p>
            </div>
          </div>
          <div className="col-md-4 mt-3 ">
            <div className="row mt-2 mx-2 mb-4 pb-2">
              <h4>Educational & Career</h4>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Education</p>
              <p>
                {partner?.partnerPreference?.findPreference?.highest_degree}
              </p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Working with</p>
              <p>
                {partner?.partnerPreference?.findPreference?.working_company}
              </p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Profession Area</p>
              <p>
                {partner?.partnerPreference?.findPreference?.professional_area}
              </p>
            </div>

            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Annual Income</p>
              <p>{partner?.partnerPreference?.findPreference?.yearly_income}</p>
            </div>
          </div>
        </div>
      )}

      <EditPartnerPreferenceTable
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></EditPartnerPreferenceTable>
    </div>
  );
};

export default PartnerPreferenceTable;
