import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const NewMatchListCard = ({ name, dateOfBirth, score, height, address }) => {
  console.log(dateOfBirth);
  const date = (
    <Moment fromNow ago>
      {new Date(dateOfBirth).toString()}
    </Moment>
  );

  return (
    <div
      style={{ backgroundColor: '#f8f8f8' }}
      className="row d-flex justify-content-between m-2 px-2 pt-1"
    >
      <div className="col-md-3 img-fluid ">
        <img
          style={{ width: 50, borderRadius: 40 }}
          className="img-fluid mr-1"
          src="https://i.imgur.com/mtxJUHB.jpg"
          alt=""
          srcSet=""
        />
      </div>
      <Link to="/user/profileMatch">
        <div className="col-md-9">
          <p style={{ lineHeight: '100%' }}>
            <span style={{ fontSize: 14, fontWeight: 'bold' }}>{name}</span>
            <br />
            <small>
              <p style={{ fontSize: 11 }}>
                {date} old | {height} | {address}
                <br />
                <small style={{ color: '#8e8be6' }}>{score}% Match</small>
              </p>
            </small>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewMatchListCard;
