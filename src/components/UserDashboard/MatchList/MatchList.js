import React, { useEffect, useState } from 'react';
import MatchListCard from '../MatchListCard/MatchListCard';
import { useDispatch } from 'react-redux';
import { getMatchLists } from '../../../actions';

const MatchList = () => {
  const [token, setToken] = useState(null);
  const [newMatchLists, setNewMatchLists] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch('https://biyekorun-staging.techserve4u.com/user/new-match-list', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        json?.data?.map((data) => {
          console.log(data.data.id);
          fetch(
            `https://biyekorun-staging.techserve4u.com/user/user-info-by-id/${data.data.id}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
            .then((res) => res.json())
            .then((json) => {
              console.log(json.data);
              json.data.score = data.score;
              setNewMatchLists([json.data]);
              dispatch(getMatchLists(json.data));
            });
        });
      });
  }, [token, dispatch]);
  return (
    <div className="shadow">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-4 px-3 pb-2 table-header-row">
        <h4>Recent Match List</h4>
      </div>

      {newMatchLists?.length >= 1 &&
        newMatchLists?.map((match) => (
          <MatchListCard
            uid={match?.user?.uid}
            key={match.id}
            id={match?.user?.id}
            name={match?.user_profile[0]?.profile_name}
            dateOfBirth={match?.user_profile[0]?.dateOfBirth}
            score={match.score}
            height={match?.user_profile[0]?.height}
            address={match?.user_family?.contact_address}
          />
        ))}
    </div>
  );
};

export default MatchList;
