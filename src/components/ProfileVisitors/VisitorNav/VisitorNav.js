import React from "react";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const VisitorNav = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between">
            <Nav.Link
              href="/visitor"
              style={{ fontWeight: 700, fontHeight: 80 }}
            >
              Recent Visitors
            </Nav.Link>
            <Nav.Link
              href="/user/topMatches"
              style={{ fontWeight: 700, fontHeight: 80 }}
            >
              Top Match
            </Nav.Link>
            <Nav.Link
              href="/user/profileMatch"
              style={{ fontWeight: 700, fontHeight: 80 }}
            >
              Match Profile List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default VisitorNav;
