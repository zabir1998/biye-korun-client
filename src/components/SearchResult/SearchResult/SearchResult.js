import React, { useEffect, useState } from 'react';
import CopyRight from '../../CopyRight/CopyRight/CopyRight';
import VisitorCard from '../../ProfileVisitors/VisitorCard/VisitorCard';
import InnerNavBar from '../../shared/InnerNavBar/InnerNavBar';
import IdSearchBar from '../../User/IdSearchBar/IdSearchBar';
import ProfileCard from '../../User/ProfileCard/ProfileCard';
import UserNavBar from '../../User/UserNavBar/UserNavBar';
import NewMatchList from '../../UserDashboard/NewMatchList/NewMatchList';
import PaidMembersAccess from '../PaidMembersAccess/PaidMembersAccess';
import SearchCard from '../SearchCard/SearchCard';
import SearchResultBody from '../SearchResultBody/SearchResultBody';

const SearchResult = () => {
  const [token, setToken] = useState(null);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch('https://biyekorun-staging.techserve4u.com/search/get-saved-search', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setResults(json.data);
      });
  }, [token]);
  return (
    <div style={{ paddingLeft: 80, paddingRight: 80 }}>
      <div className="mb-5">
        <InnerNavBar></InnerNavBar>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ProfileCard></ProfileCard>
          <NewMatchList></NewMatchList>
          <NewMatchList></NewMatchList>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-8">
              <UserNavBar></UserNavBar>
            </div>
            <div className="col-md-4">
              <IdSearchBar></IdSearchBar>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <PaidMembersAccess></PaidMembersAccess>
            </div>
            <div className="col-md-8">
              {results?.length > 0 &&
                results?.map((result) => (
                  <div className="row shadow">
                    <SearchCard
                      id={result?.id}
                      height={result?.height}
                      religion={result?.religion}
                      degree={result?.degree}
                      professionalArea={result?.professional_area}
                      maritalStatus={result?.maritial_status}
                      contactAddress={result?.contact_address}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CopyRight></CopyRight>
      </div>
    </div>
  );
};

export default SearchResult;
