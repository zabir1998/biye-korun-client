import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const AboutMyselfTable = () => {
  const profileData = useSelector((state) => state.getProfileById);

  return (
    <div className="shadow px-3 pb-3 mt-5">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-2 pb-3 table-header-row">
        <h3>About Myself</h3>
      </div>
      <div className="row  my-3 mx-2 table-row">
        <p>
          {profileData.loading ? (
            <CircularProgress />
          ) : (
            profileData?.getProfileById?.user_career[0]?.bio
          )}
        </p>
      </div>
    </div>
  );
};

export default AboutMyselfTable;
