import React, { useEffect, useState } from 'react';
import UserRequestCard from '../UserRequestCard/UserRequestCard';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faLeaf,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const YouMayLike = () => {
  const [token, setToken] = useState(null);
  const [youMayLikes, setYouMayLikes] = useState([]);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch(
      'https://biyekorun-staging.techserve4u.com/user/top-match-by-preference',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json?.data?.data?.id);
        fetch(
          `https://biyekorun-staging.techserve4u.com/user/user-info-by-id/${json?.data?.data?.id}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((jsonData) => {
            setYouMayLikes([jsonData.data]);
          });
      });
  }, [token]);

  console.log(youMayLikes);

  return (
    <div className="shadow">
      <h4 className="text-center pt-3 my-3">
        <span>
          <FontAwesomeIcon
            style={{ color: '#cd3cb5' }}
            className="mr-3"
            icon={faLeaf}
          />
        </span>
        You may like
      </h4>
      {youMayLikes.length > 0 &&
        youMayLikes.map((youMayLike) => (
          <UserRequestCard
            id={youMayLike?.user?.id}
            key={youMayLike?.user_id}
            name={youMayLike?.user_profile[0]?.profile_name}
            dateOfBirth={youMayLike?.user_profile[0]?.dateOfBirth}
            height={youMayLike?.user_profile[0]?.height}
            address={youMayLike?.user_family?.contact_address}
          />
        ))}

      {youMayLikes.length > 2 && (
        <div className="text-center pb-3">
          <FontAwesomeIcon
            style={{ color: ' #8e8be6', fontSize: 20 }}
            className="mr-2"
            icon={faArrowCircleLeft}
          ></FontAwesomeIcon>

          <FontAwesomeIcon
            style={{ color: ' #8e8be6', fontSize: 20 }}
            icon={faArrowCircleRight}
          ></FontAwesomeIcon>
        </div>
      )}
    </div>
  );
};

export default YouMayLike;
