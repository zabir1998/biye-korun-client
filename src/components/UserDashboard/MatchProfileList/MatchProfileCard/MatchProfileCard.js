import { faCheckCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import { toast } from 'react-toastify';

const MatchProfileCard = ({
  id,
  name,
  dateOfBirth,
  maritalStatus,
  professionalArea,
  yearlyIncome,
  address,
  highestDegree,
  religionName,
}) => {
  const [token, setToken] = useState(null);

  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
  }, []);

  const handleRequest = () => {
    const senderId = profileData?.profile?.user?.id;
    const receiverId = id;
    console.log(senderId, receiverId);

    fetch(
      'https://biyekorun-staging.techserve4u.com/user/send-connection-request',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          sender_id: senderId,
          reciever_id: receiverId,
        }),
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        toast.success(json.message);
      });
  };

  return (
    <div style={{ borderBottom: '1px solid #e4d9d9' }} className="row py-4">
      <div className="col-md-3">
        <img
          className="img-fluid"
          src="https://i.imgur.com/mtxJUHB.jpg"
          alt=""
        ></img>
      </div>
      <div className="col-md-5">
        <div>
          <h5>{name}</h5>
          <h6>{id}</h6>
          <p>
            <small>Active Now</small>
          </p>
        </div>
        <div
          style={{ marginTop: 70 }}
          className="row d-flex justify-content-start"
        >
          <div
            style={{ borderRight: '1px solid grey' }}
            className="col-md-4 pr-4"
          >
            <p>
              <small>
                <Moment fromNow ago>
                  {new Date(dateOfBirth)}
                </Moment>
              </small>
            </p>
            <p>
              <small>{address}</small>
            </p>
            <p>
              <small>{religionName}</small>
            </p>
          </div>
          <div className="col-md-4 ml-4">
            <p>
              <small>{highestDegree}</small>
            </p>
            <p>
              <small>{professionalArea}</small>
            </p>
            <p>
              <small>{yearlyIncome}</small>
            </p>
            <p>
              <small>{maritalStatus}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 text-center">
        <h5>Like This Profile?</h5>
        <FontAwesomeIcon
          style={{ fontSize: '75', backgroundColor: 'white', color: '#0af662' }}
          className="mt-3 "
          icon={faCheckCircle}
        ></FontAwesomeIcon>
        <div className="mt-5">
          <button onClick={handleRequest} className="btn premium-btn">
            <span>
              <FontAwesomeIcon
                className="mr-2"
                icon={faUserPlus}
              ></FontAwesomeIcon>
            </span>{' '}
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchProfileCard;
