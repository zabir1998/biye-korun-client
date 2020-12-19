import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InnerNavBar.css";

const InnerNavBar = () => {
  return (
    <Navbar className="shadow inner-nav-link" bg="light">
      <Navbar.Brand>
        <Link to="/">BiyeKorun</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="#">Get Pro</Link>
          </Nav.Link>
          <NavDropdown title="Search" id="basic-nav-dropdown">
            <Form inline className="p-3">
              <FormControl type="text" placeholder="Search" />
              <Button variant="outline-success" className="mt-3">
                Search
              </Button>
            </Form>
          </NavDropdown>
          <Nav.Link>
            <Link to="#">Help</Link>{" "}
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon style={{ color: "#b9b8c9" }} icon={faBell} />
          </Nav.Link>
          <img
            src="https://i.imgur.com/8AIDC3f.png"
            alt=""
            style={{ width: 35, borderRadius: 35 }}
            className="ml-3"
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default InnerNavBar;
