import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavReg.css";

const NavReg = () => {
  return (
    <div>
      {/* <Navbar bg="light" variant="light">
        <Nav style={{ fontWeight: 700, fontSize: 17 }}>
          <Link to="/personal">
            <Nav.Item>Personal Details</Nav.Item>
          </Link>
          <Link to="/career">
            <Nav.Item>Career Details</Nav.Item>
          </Link>
          <Link to="/lifestyle">
            <Nav.Item>Lifestyle & Family Details</Nav.Item>
          </Link>
        </Nav>
      </Navbar> */}
      <div className="row text-center d-flex align-items-center reg-nav-link justify-content-center mb-3 ">
        <div className="col reg-nav">
          <Link to="/personal">Personal Details</Link>
        </div>
        <div className="col reg-nav">
          <Link to="/career">Career Details</Link>
        </div>
        <div className="col reg-nav ">
          <Link to="/lifestyle">Family Details</Link>
        </div>
        <div className="col reg-nav ">
          <Link to="/physical">Physical Details</Link>
        </div>
        <div className="col reg-nav ">
          <Link to="/preference">Preference</Link>
        </div>
      </div>
    </div>
  );
};

export default NavReg;
