import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import getAge from 'get-age';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

const ProfileCard = ({ style }) => {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);
  const [urlError, setUrlError] = useState(false);
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);
  console.log(profileData?.profile?.user_profile[0]?.photo_url);
  //console.log(profileData);
  const handleUpload = () => {
    setToken(sessionStorage.getItem('Token'));
    let imageFile = image;
    let formData = new FormData();
    formData.append('file', imageFile);

    fetch(
      'https://biyekorun-staging.techserve4u.com/user/image/profile/upload',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        toast.success(json.message);
        window.location.reload();
      });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="card shadow profile-card"
        style={style}
        // style={{ width: "22rem" }}
      >
        <img
          className=" img-fluid profile-img rounded-circle"
          src={
            profileData?.profile?.user_profile[0]?.photo_url === undefined
              ? 'https://i.imgur.com/8AIDC3f.png'
              : profileData?.profile?.user_profile[0]?.photo_url
          }
          onError={() => setUrlError(true)}
          alt=""
        />
        <div className="form-group">
          <input
            type="file"
            name="myfile"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div class="upload-btn-wrapper">
            {/* <button disabled={!image} onClick={handleUpload} class="up-btn">
              Change photo
            </button> */}
          </div>
        </div>
        <div className="text-center">
          <button
            disabled={!image}
            onClick={handleUpload}
            style={{
              width: '50%',
              padding: '7px 19px',
              borderRadius: '5px',
              border: 'none',
            }}
            className="premium-btn"
          >
            Upload
          </button>
        </div>
        <div className="card-body text-center">
          {profileData.loading ? (
            <CircularProgress />
          ) : (
            <div>
              <h5 className="card-title">
                {profileData?.profile?.user_profile[0]?.profile_name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {profileData?.profile?.user_profile[0]?.user_id}
              </h6>
              <p>
                {getAge(profileData?.profile?.user_profile[0]?.dateOfBirth)}{' '}
                Years old
              </p>
              <p className="card-text mt-3">
                {' '}
                {profileData?.profile?.user_family?.family_living_place}
              </p>
              <Link to="/user" className="btn premium-btn mt-3">
                <span>
                  <FontAwesomeIcon
                    style={{ color: '#ffcc00' }}
                    className="mr-2"
                    icon={faCrown}
                  />
                </span>
                Get Premium
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

// 2-1-2007

// 20071594132019607
