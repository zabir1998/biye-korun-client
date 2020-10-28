import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="shadow" bg="light" variant="light">
      <Navbar.Brand href="#home">BiyeKorun</Navbar.Brand>
      <Nav className="ml-auto ">
        <Nav.Link
          style={{ color: "#8e8be6" }}
          className="brand-text ml-3"
          href="#"
        >
          Home
        </Nav.Link>
        <Nav.Link
          style={{ color: "#8e8be6" }}
          className="brand-text ml-3"
          href="#"
        >
          Membership
        </Nav.Link>
        <Nav.Link
          style={{ color: "#8e8be6" }}
          className="brand-text ml-3"
          href="#"
        >
          Help
        </Nav.Link>
        <Nav.Link
          style={{ color: "#8e8be6" }}
          className="brand-text ml-3"
          href="#"
        >
          Login
        </Nav.Link>
        <Nav.Link
          style={{
            backgroundColor: "#cf6ac6",
            color: "white",
            marginTop: "-8px",
            paddingTop: "16px",
            marginBottom: "-8px",
            paddingBottom: "16px",
          }}
          // style={{ color: "#8e8be6" }}
          className="ml-3 "
          href="#"
        >
          Register
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
