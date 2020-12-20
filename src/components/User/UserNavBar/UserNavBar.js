import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserNavBar.css";

const UserNavBar = ({ className }) => {
  return (
    <div>
      {/* <Navbar className="shadow" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/user/dashboard">
              <Nav.Item className={className}>Dashboard</Nav.Item>
            </Link>
            <Link to="/user">
              <Nav.Item className={className}>Profile</Nav.Item>
            </Link>
            <Nav.Link className={className} href="#">
              Inbox
            </Nav.Link>
            <Nav.Link className={className} href="/user/profileMatch">
              Matches
            </Nav.Link>
            <Nav.Link className={className} href="/searchResult">
              Saved Search
            </Nav.Link>
            <Nav.Link className={className} href="/nearPeople">
              Near Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="row text-center d-flex align-items-center user-nav-link  justify-content-center mb-3 shadow">
        <div className="px-3">
          <Link to="/user/dashboard">Dashboard</Link>
        </div>
        <div className="px-3">
          <Link to="/user">Profile</Link>
        </div>
        <div className="px-3">
          <Link to="/lifestyle">Inbox</Link>
        </div>
        <div className="px-3">
          <Link to="/personal">Matches</Link>
        </div>
        <div className="px-3">
          <Link to="/searchResult">Saved Search</Link>
        </div>
        <div className="px-3">
          <Link to="/nearPeople">Near Me</Link>
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;
