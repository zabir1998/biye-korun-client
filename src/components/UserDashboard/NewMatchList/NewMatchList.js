import React, { useEffect, useState } from 'react';
import NewMatchListCard from '../NewMatchListCard/NewMatchListCard';
import { Link } from 'react-router-dom';

const NewMatchList = () => {
  const [token, setToken] = useState(null);
  // useEffect(() => {
  //   setToken(sessionStorage.getItem('Token'));
  //   fetch('https://biyekorun-staging.techserve4u.com/api/user/new-match-list', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json.data));
  // }, [token]);
  return (
    <div className="shadow p-3 mt-3">
      <h4 className="text-center my-3">New Match List</h4>
      <NewMatchListCard></NewMatchListCard>
      <NewMatchListCard></NewMatchListCard>
      <NewMatchListCard></NewMatchListCard>
      <NewMatchListCard></NewMatchListCard>
      <Link className="text-center" style={{ color: '#8e8be6' }} to="/">
        <p>
          <small>View All</small>
        </p>
      </Link>
    </div>
  );
};

export default NewMatchList;
