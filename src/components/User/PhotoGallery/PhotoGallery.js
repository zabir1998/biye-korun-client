import React, { useState, useEffect } from 'react';
import { faCamera, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fakeUser } from '../../../fakeData/fakeUser';
import { Button } from '@material-ui/core';
import FileReader from 'filereader';

const PhotoGallery = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(sessionStorage.getItem('Token'));
    fetch('https://biyekorun-staging.techserve4u.com/user/image/gallery', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setImages(json.data);
      });
  }, [token]);

  const handleUpload = async () => {
    let imageFile = image;
    let formData = new FormData();
    await formData.append('file', imageFile);

    await fetch(
      'https://biyekorun-staging.techserve4u.com/user/image/gallery/upload/',
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
        alert(json.message);
      });

    setImage(null);
    window.location.reload();
  };
  return (
    <div className="shadow mt-5">
      <div className="pt-3">
        <h3 className="text-center">
          <span className="mr-4">
            <FontAwesomeIcon className="icon-bar-icon" icon={faCamera} />
          </span>
          Uploaded Photos
        </h3>
      </div>
      <div className="row  justify-content-center d-flex ">
        <div className="col-md-6 p-4">
          {images?.length >= 1 &&
            images?.map((image) => (
              <img
                key={image.id}
                style={{ width: '9rem' }}
                src={image?.url}
                alt=""
              />
            ))}
        </div>
      </div>
      <center className="p-3">
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="contained-button-file"
        />
        <Button
          onClick={handleUpload}
          variant="contained"
          color="primary"
          component="span"
          disabled={!image}
        >
          Upload
        </Button>
      </center>
    </div>
  );
};

export default PhotoGallery;
