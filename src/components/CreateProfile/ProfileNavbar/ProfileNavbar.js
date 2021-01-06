import React from "react";
import { Navbar } from "react-bootstrap";

const ProfileNavbar = () => {
  return (
    <Navbar className="shadow px-5" bg="light" expand="lg">
      <Navbar.Brand href="/">BiyeKorun</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
    </Navbar>
  );
};

export default ProfileNavbar;
