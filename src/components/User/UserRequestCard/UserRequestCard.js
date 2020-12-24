import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserRequestCard.css';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const UserRequestCard = ({ name, dateOfBirth, id, height, address }) => {
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

  const date = (
    <Moment fromNow ago>
      {new Date(dateOfBirth).toString()}
    </Moment>
  );
  return (
    <div>
      <div class="card shadow user-card pt-2  mx-3">
        <img
          style={{ width: '70px' }}
          class="card-img img-fluid mx-auto"
          src="https://i.imgur.com/mtxJUHB.jpg"
          alt=""
        />
        <div class="card-body  text-center">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{id}</h6>
          <small class="card-text ">
            {date} Old | {height} | {address}
          </small>
          <br />
          <button
            style={{ fontSize: 13 }}
            onClick={handleRequest}
            class="btn premium-btn mt-3 mb-1"
          >
            <span>
              <FontAwesomeIcon className="mr-2" icon={faUserPlus} />
            </span>
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRequestCard;
