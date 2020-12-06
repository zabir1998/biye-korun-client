import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://zc64xuggxl-flywheel.netdna-ssl.com/wp-content/uploads/2019/04/team.png"
          alt="Card image cap"
          style={{ borderRadius: 200, padding: 30 }}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
