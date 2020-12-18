import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import InnerNavBar from '../../shared/InnerNavBar/InnerNavBar';
import AboutMyselfTable from './AboutMyselfTable/AboutMyselfTable';
import BasicLifeStyleTable from './BasicLifeStyleTable/BasicLifeStyleTable';
import EducationCareerTable from './EducationCareerTable/EducationCareerTable';
import FamilyDetails from './FamilyDetails/FamilyDetails';
import PersonalDetailsTable from './PersonalDetailsTable/PersonalDetailsTable';
import PhysicalTable from './PhysicalTable/PhysicalTable';
import ProfileCard from './ProfileCard/ProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileById } from '../../../actions';
import CircularProgress from '@material-ui/core/CircularProgress';

const SearchProfile = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch(
      'https://biyekorun-staging.techserve4u.com/user/search-profile-by-uid',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          unique_id: id,
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        if (json?.data?.length === 0) {
          alert('User Profile not found!!');
          window.location.replace('/user/dashboard');
        }
        json?.data?.map((user) => {
          setUserId(user.id);
        });
      });
  }, [token, id]);

  useEffect(() => {
    console.log(userId);
    userId !== null &&
      fetch(
        `https://biyekorun-staging.techserve4u.com/user/user-info-by-id/${userId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          dispatch(getProfileById(json.data));
        });
  }, [token, userId, dispatch]);

  const profile = useSelector((state) => state.getProfileById);
  console.log(profile);

  return (
    <div>
      {profile.isLoading ? (
        <CircularProgress />
      ) : (
        <div style={{ paddingLeft: 120, paddingRight: 120 }}>
          <InnerNavBar></InnerNavBar>
          <div className="row mt-5">
            <div className="col-md-4">
              <ProfileCard></ProfileCard>
            </div>
            <div className="col-md-8">
              <PersonalDetailsTable></PersonalDetailsTable>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-5">
              <AboutMyselfTable></AboutMyselfTable>
            </div>
            <div className="col-md-7">
              <BasicLifeStyleTable></BasicLifeStyleTable>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-5">
              <PhysicalTable></PhysicalTable>
            </div>
            <div className="col-md-7">
              <EducationCareerTable></EducationCareerTable>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <FamilyDetails></FamilyDetails>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchProfile;
