import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IdSearchBar = () => {
  const [id, setId] = useState(null);
  return (
    <div>
      <div class="input-group input-group-lg mb-3">
        <input
          style={{ borderColor: '#8e8be6' }}
          type="search"
          class="form-control"
          placeholder="Enter user uid"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <div class=" input-group-append ">
          <span
            style={{ borderColor: '#8e8be6' }}
            class="input-group-text bg-transparent"
          >
            {id ? (
              <Link to={`/user/${id}`}>
                <FontAwesomeIcon
                  style={{ color: '#8e8be6' }}
                  icon={faSearch}
                ></FontAwesomeIcon>
              </Link>
            ) : (
              <Link to={`/user/dashboard`}>
                <FontAwesomeIcon
                  style={{ color: '#8e8be6' }}
                  icon={faSearch}
                ></FontAwesomeIcon>
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IdSearchBar;
