import React from "react";
import visitor from "../../../images/visitor.jpg";

const SearchCard = () => {
  return (
    <div class="card mb-3" style={{ maxWidth: 550, width: 800 }}>
      <div class="row g-0">
        <div class="col-md-2">
          <img
            src={visitor}
            style={{ height: 250, width: 160, padding: 5, borderRadius: 10 }}
            alt=""
          />
        </div>
        <div class="col-md-8">
          <div class="card-body" style={{ marginLeft: 50 }}>
            <h5 class="card-title">Kamali Begum</h5>
            <h6>KJ1QC89</h6>
            <hr />
            <p class="card-text row">
              <div className="col-md-6">
                <h6>25 Years 5'5"</h6>
                <h6>Paris,France</h6>
                <h6>Muslim</h6>
              </div>
              <div className="col-md-6">
                <h6>B.E.</h6>
                <h6>Software Engineer</h6>
                <h6>Never Married</h6>
              </div>
            </p>
          </div>
        </div>
        <div
          className="col-md-2"
          style={{ backgroundColor: "lightgrey", padding: 20 }}
        >
          <button
            style={{
              backgroundColor: " #8e8be6",
              color: "white",
              fontSize: 12,
              marginTop: 90,
            }}
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
