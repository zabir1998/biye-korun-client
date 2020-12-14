import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import SummaryCard from '../SummaryCard/SummaryCard';

const ActivitySummary = () => {
  const [token, setToken] = useState(null);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch('https://biyekorun-staging.techserve4u.com/user/activity-summery', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        //console.log(json.data);
        setActivity(json.data);
      });
  }, [token]);
  return (
    <div className="shadow">
      <div className="row d-flex justify-content-between mt-3 pt-3 mx-4 px-3 pb-2 table-header-row">
        <h4>Your Activity Summary</h4>
      </div>
      <div className="row p-3">
        <div className="col">
          <SummaryCard
            digit={activity?.pendingRequest}
            title="Pending Invitations"
          ></SummaryCard>
          <SummaryCard
            digit={activity?.contactViewers}
            title="Contacts Viewed"
          ></SummaryCard>
        </div>
        <div className="col">
          <SummaryCard
            digit={activity?.acceptedRequest}
            title="Accepted Invitations"
          ></SummaryCard>
          <SummaryCard
            digit={activity?.chatInitiated}
            title="Chats Initiated"
          ></SummaryCard>
        </div>
        <div className="col-md-3">
          <div className="summary-card">
            <p>?</p>
            <p style={{ fontSize: 12 }}>Recent Visitors</p>
            <FontAwesomeIcon
              style={{
                padding: 7,
                color: '#8e8be6',
                border: '1px solid #8e8be6',
                borderRadius: 20,
                fontSize: 35,
              }}
              className="text-center"
              icon={faLock}
            ></FontAwesomeIcon>
            <p style={{ fontSize: 13 }}>
              Only <span style={{ color: '#8e8be6' }}>Premium</span> members can
              avail this benefit{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySummary;
