import React, { useEffect, useState } from 'react';
import MatchListCard from '../MatchListCard/MatchListCard';

const MatchList = () => {
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
    <div className="shadow">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-4 px-3 pb-2 table-header-row">
        <h4>Recent Match List</h4>
      </div>
      <MatchListCard></MatchListCard>
      <MatchListCard></MatchListCard>
      <MatchListCard></MatchListCard>
    </div>
  );
};

export default MatchList;
