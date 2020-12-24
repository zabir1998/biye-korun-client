import { faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const MatchListCard = ({
  name,
  uid,
  id,
  dateOfBirth,
  height,
  score,
  address,
}) => {
  const [token, setToken] = useState(null);
  const date = (
    <Moment fromNow ago>
      {new Date(dateOfBirth).toString()}
    </Moment>
  );

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
    <div className="row m-3 p-2">
      <div className="col-md-8 d-flex">
        <div>
          <img
            style={{ width: 75 }}
            className="img-fluid mr-3"
            src="https://i.imgur.com/mtxJUHB.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <h5>{name}</h5>
          <p>{date}</p>
          <p>
            <small>
              <Link style={{ color: '#8e8be6' }} to={`/user/${uid}`}>
                Visit Profile
              </Link>
            </small>
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <button onClick={handleRequest} className="btn premium-btn">
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faUserPlus}
            ></FontAwesomeIcon>
          </span>
          Connected
        </button>
      </div>
    </div>
  );
};

export default MatchListCard;
