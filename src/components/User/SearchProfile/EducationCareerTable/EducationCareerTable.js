import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import HRNumbers from 'human-readable-numbers';

const EducationCareerTable = () => {
  const profileData = useSelector((state) => state.getProfileById);
  return (
    <div>
      <div className="shadow px-3 pb-3">
        <div className="row d-flex justify-content-between mt-3 pt-5 mx-2 pb-5 table-header-row">
          <h3>Education and Career</h3>
        </div>
        {profileData.loading ? (
          <CircularProgress />
        ) : (
          <div>
            <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
              <p>Highest Qualification</p>
              <p>{profileData?.getProfileById?.user_career[0]?.highest_degree}</p>
            </div>
            <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
              <p>College</p>
              <p>AUST</p>
            </div>
            <div className="row d-flex justify-content-between mt-2 mx-2 table-row">
              <p>Working With</p>
              <p>{profileData?.getProfileById?.user_career[0]?.working_company}</p>
            </div>

            <div className="row d-flex justify-content-between mt-3 mx-2 table-row">
              <p>Working As</p>
              <p>{profileData?.getProfileById?.user_career[0]?.professional_area}</p>
            </div>
            <div className="row d-flex justify-content-between mb-4 mt-2 mx-2 table-row">
              <p>Annual Income</p>
              <p>
                {HRNumbers.toHumanString(
                  profileData?.getProfileById?.user_career[0]?.yearly_income
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCareerTable;
