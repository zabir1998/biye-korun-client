import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import "./NavBar.css";

const NavBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [registerModalIsOpen, RegisterSetIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          onClick={openModal}
          style={{ color: "#8e8be6" }}
          className="brand-text ml-3"
          href="#"
        >
          Login
        </Nav.Link>
        <Nav.Link
          onClick={openModal}
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
        <Login modalIsOpen={modalIsOpen} closeModal={closeModal}></Login>
        <Register
          registerModalIsOpen={registerModalIsOpen}
          closeModal={closeModal}
        ></Register>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
