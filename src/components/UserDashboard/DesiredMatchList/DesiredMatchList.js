import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMatchLists } from "../../../actions";
import DesiredMatchListCard from "../DesiredMatchListCard/DesiredMatchListCard";

const DesiredMatchList = () => {
  const [token, setToken] = useState(null);
  const [newMatchLists, setNewMatchLists] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setToken(sessionStorage.getItem("Token"));
    fetch("https://biyekorun-staging.techserve4u.com/user/new-match-list", {
      method: "GET",
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
              method: "GET",
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

  console.log(newMatchLists);
  return (
    <div className="shadow p-3 mt-3">
      <h4 className="text-center my-3">Desired Match List</h4>

      {newMatchLists?.length >= 1 &&
        newMatchLists?.map((match) => (
          <DesiredMatchListCard
            id={match?.user?.uid}
            key={match.id}
            name={match?.user_profile[0]?.profile_name}
            dateOfBirth={match?.user_profile[0]?.dateOfBirth}
            score={match.score}
            height={match?.user_profile[0]?.height}
            address={match?.user_family?.contact_address}
          />
        ))}

      {newMatchLists?.length > 4 && (
        <Link className="text-center" style={{ color: "#8e8be6" }} to="/">
          <p>
            <small>View All</small>
          </p>
        </Link>
      )}
    </div>
  );
};

export default DesiredMatchList;
