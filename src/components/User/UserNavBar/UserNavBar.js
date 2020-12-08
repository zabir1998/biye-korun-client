import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./UserNavBar.css";

const UserNavBar = () => {
  return (
    <div>
      <Navbar className="shadow" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pl-3 d-flex justify-content-between">
            <Nav.Link className="user-nav-link" href="#">
              Profile
            </Nav.Link>
            <Nav.Link className="user-nav-link" href="#">
              Inbox
            </Nav.Link>
            <Nav.Link className="user-nav-link" href="#">
              Matches
            </Nav.Link>
            <Nav.Link className="user-nav-link" href="#">
              Saved Search
            </Nav.Link>
            <Nav.Link className="user-nav-link" href="#">
              Near Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default UserNavBar;
