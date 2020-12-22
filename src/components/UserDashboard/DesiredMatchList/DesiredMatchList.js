import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMatchLists } from '../../../actions';
import DesiredMatchListCard from '../DesiredMatchListCard/DesiredMatchListCard';

const DesiredMatchList = () => {
  const [token, setToken] = useState(null);
  const [newMatchLists, setNewMatchLists] = useState([]);
  const [desiredMatchList, setDesiredMatchList] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch(
      'https://biyekorun-staging.techserve4u.com/user/top-match-by-constraints',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (json) => {
          setDesiredMatchList(json?.data?.data);
        }

        // fetch(
        //   `https://biyekorun-staging.techserve4u.com/user/user-info-by-id/${data.data.id}`,
        //   {
        //     method: "GET",
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   }
        // )
        // .then((res) => res.json())
        // .then((json) => {
        //   console.log(json.data);
        //   json.data.score = data.score;
        //   setNewMatchLists([json.data]);
        //   dispatch(getMatchLists(json.data));
        // });
        //});
      );
  }, [token, setDesiredMatchList, dispatch]);

  console.log(newMatchLists);
  return (
    <div className="shadow p-3 mt-3">
      <h4 className="text-center my-3">Desired Match List</h4>
      <DesiredMatchListCard
        id="1"
        name="Sokhina Begum"
        dateOfBirth="2000-12-12"
        score="50"
        height={desiredMatchList?.height}
        address={desiredMatchList?.contact_address}
      />

      {/* {newMatchLists?.length > 4 && (
        <Link className="text-center" style={{ color: '#8e8be6' }} to="/">
          <p>
            <small>View All</small>
          </p>
        </Link>
      )} */}
    </div>
  );
};

export default DesiredMatchList;
