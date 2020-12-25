import React from 'react';
import visitor from '../../../images/visitor.jpg';

const SearchCard = ({
  id,
  religion,
  degree,
  professionalArea,
  contactAddress,
  height,
  maritalStatus,
}) => {
  return (
    <div className="row p-4">
      <div className="col-md-3">
        <img className="img-fluid" src={visitor} alt="" />
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col">
            <h4>Sufia Begum</h4>
            <p>{id}</p>
          </div>
        </div>
        <div className="row d-flex justify-content-start">
          <div className="col-md-6">
            <p className="small">21 Years , {height} cm</p>
            <p className="small">{religion}</p>
            <p className="small">{contactAddress}</p>
          </div>
          <div className="col-md-6">
            <p className="small">{degree}</p>
            <p className="small">{professionalArea}</p>
            <p className="small">{maritalStatus}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-items-center">
        <button className="btn premium-btn">Send Request</button>
      </div>
    </div>
  );
};

export default SearchCard;
