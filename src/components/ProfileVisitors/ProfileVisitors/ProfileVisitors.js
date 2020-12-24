import React from 'react';
import InnerNavBar from '../../shared/InnerNavBar/InnerNavBar';
import VisitorCard from '../VisitorCard/VisitorCard';
import VisitorHeader from '../VisitorHeader/VisitorHeader';

const ProfileVisitors = () => {
  return (
    <div style={{ paddingLeft: 100, paddingRight: 100 }}>
      <InnerNavBar></InnerNavBar>
      <VisitorHeader></VisitorHeader>
    </div>
  );
};

export default ProfileVisitors;
