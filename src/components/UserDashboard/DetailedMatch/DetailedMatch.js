import React, { useState, useEffect } from 'react';
import {
  faBookOpen,
  faCheck,
  faCheckCircle,
  faGraduationCap,
  faLeaf,
  faMapMarkerAlt,
  faPhone,
  faTasks,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DetailedMatch.css';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const DetailedMatch = () => {
  const matchData = useSelector((state) => state.matchLists);
  const profileData = useSelector((state) => state.profile);
  const [errorUrl, setErrorUrl] = useState(false);
  const [token, setToken] = useState(null);
  const [preferences, setPreferences] = useState([]);
  console.log(errorUrl);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch(
      'https://biyekorun-staging.techserve4u.com/user/match-comparison-by-preference',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setPreferences(json?.data);
      });
  }, [token]);

  console.log();

  return (
    <div className="shadow mt-5 py-4">
      <div style={{ paddingLeft: 80 }}>
        <div className="row d-flex justify-content-start detail-perk ">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faUser}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>
              {matchData?.partnerPreference?.user_profile[0]?.profile_name}
            </h5>
            <small>
              {matchData?.partnerPreference?.user_profile[0]?.id} || Profile
              Created by Self
            </small>
            <br />
            <p>{matchData?.partnerPreference?.user_career[0]?.bio}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-start detail-perk ">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faPhone}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Contact Details</h5>
            <br />
            <p>
              Email Id: {matchData?.partnerPreference?.user?.email} <br />
              Phone: {matchData?.partnerPreference?.user?.phone_number}
            </p>
          </div>
        </div>{' '}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faLeaf}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>LifeStyle</h5>
            <br />
            <p>
              {matchData?.partnerPreference?.user_profile[0]?.diet_id?.name}
            </p>
          </div>
        </div>{' '}
        <div className="row d-flex justify-content-start detail-perk ">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faBookOpen}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Background</h5>
            <br />
            <p>
              {matchData?.partnerPreference?.user_profile[0]?.religion_id?.name}
              ,{' '}
              {
                matchData?.partnerPreference?.user_profile[0]?.community_id
                  ?.name
              }{' '}
              <br />
            </p>
          </div>
        </div>{' '}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faMapMarkerAlt}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Location Details</h5>
            <br />
            <p>{matchData?.partnerPreference?.user_family?.contact_address}</p>
          </div>
        </div>{' '}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faGraduationCap}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>Education & Career</h5>
            <br />
            <p>
              {`${matchData?.partnerPreference?.user_career[0]?.highest_degree} in ${matchData?.partnerPreference?.user_career[0]?.professional_area}`}

              <br />
              {matchData?.partnerPreference?.user_career[0]?.working_company}
            </p>
          </div>
        </div>{' '}
        <div className="row d-flex justify-content-start detail-perk">
          <div className="col-md-2">
            <FontAwesomeIcon
              className="mr-2 match-icon"
              icon={faTasks}
            ></FontAwesomeIcon>
          </div>
          <div className="col-md-4">
            <h5>What is She looking for</h5>
          </div>
        </div>
        <div className="">
          <div className="row d-flex justify-content-between my-5">
            <div className="col ">
              <img
                style={{ width: 200, border: '8px solid #8e8be6' }}
                className="img-fluid circle"
                src={
                  matchData?.profile?.user_profile[0]?.photo_url === undefined
                    ? 'https://i.imgur.com/8AIDC3f.png'
                    : matchData?.profile?.user_profile[0]?.photo_url
                }
                alt=""
                onError={() => setErrorUrl(true)}
              />
            </div>
            <div className="col">
              <img
                style={{ width: 200, border: '8px solid #8e8be6' }}
                className="img-fluid circle"
                src={
                  !errorUrl
                    ? profileData?.profile?.user_profile[0].photo_url
                    : 'https://i.imgur.com/8AIDC3f.png'
                }
                alt=""
                onError={() => setErrorUrl(true)}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-between mb-5">
            <div className="col px-5">
              <p>Her Preferences</p>
            </div>
            <div className="col px-5">
              <p>Your Match</p>
            </div>
          </div>
          <div className="">
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Age</p>
                <p>
                  {preferences && preferences[0]?.data?.age_range_start} to{' '}
                  {preferences && preferences[0]?.data?.age_range_end}
                </p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    color: '#0af662',
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Height</p>
                <p>
                  {preferences && preferences[0]?.data?.height_range_start} to{' '}
                  {preferences && preferences[0]?.data?.height_range_end}
                </p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    color: '#0af662',
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{' '}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Marital Status</p>
                <p>{preferences && preferences[0]?.data?.maritial_status}</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    color: '#0af662',
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{' '}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Religion/ Community</p>
                <p>{preferences && preferences[0]?.data?.religion_id?.name}</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    color: '#0af662',
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{' '}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Mother Tongue</p>
                <p>{preferences && preferences[0]?.data?.language_id?.name}</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    color: '#0af662',
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{' '}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Country Living In</p>
                <p>{preferences && preferences[0]?.data?.contact_address}</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    color: '#0af662',
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>{' '}
            <div className="row  d-flex justify-content-between ">
              <div className="col px-5">
                <p className="font-weight-bold">Annual Income</p>
                <p>{preferences && preferences[0]?.data?.yearly_income}</p>
              </div>
              <div className="col  px-5">
                <FontAwesomeIcon
                  style={{
                    fontSize: '2rem',
                    backgroundColor: 'white',
                    color: '#0af662',
                  }}
                  className="mt-3 "
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedMatch;
