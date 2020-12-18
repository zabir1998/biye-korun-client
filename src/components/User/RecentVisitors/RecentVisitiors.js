import React, { useState, useEffect } from 'react';
import {
  faEye,
  faSync,
  faTruckLoading,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisitorCard from '../VisitorCard/VisitorCard';
import { Link } from 'react-router-dom';

const RecentVisitors = () => {
  const [profileVisitors, setProfileVisitors] = useState([]);
  const [token, setToken] = useState(null);
  //console.log(profileVisitors);
  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch(
      'https://biyekorun-staging.techserve4u.com/user/recent-profile-visitor',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        //console.log(json.data);
        setProfileVisitors(json.data);
      });
  }, [token]);
  return (
    <div style={{ paddingBottom: '20px' }} className="shadow">
      <h4 className="text-center pt-3 mt-5 mb-3">
        <span>
          <FontAwesomeIcon
            style={{ color: '#cd3cb5' }}
            className="mr-3"
            icon={faEye}
          />
        </span>
        Recent Visitors
      </h4>
      {profileVisitors?.length >= 1 ? (
        profileVisitors?.map((visitor) => <VisitorCard visitor={visitor} />)
      ) : (
        <p
          style={{
            background: '#cd3cb5',
            color: 'white',
            width: 'fit-content',
            padding: '1px 10px',
            borderRadius: '10px',
            margin: ' 0 auto',
          }}
        >
          Profile visitors not found!
        </p>
      )}

      {profileVisitors?.length > 4 && (
        <div className="text-center pb-3">
          <Link
            style={{ fontSize: 14 }}
            to="/"
            className="btn premium-btn mt-3"
          >
            <span>
              <FontAwesomeIcon className="mr-3" icon={faSync}></FontAwesomeIcon>
            </span>
            Load More
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentVisitors;
