import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LogOut from "../../Authentication/LogOut/LogOut";
import AccountSettings from "../../Settings/AccountSettings/AccountSettings";
import UserProfile from "../../User/UserProfile/UserProfile";
import Dashboard from "../../UserDashboard/Dashboard/Dashboard";
import "./InnerNavBar.css";

const InnerNavBar = () => {
  const profileData = useSelector((state) => state.profile);

  return (
    <Navbar className="shadow inner-nav-link" bg="light">
      <Navbar.Brand>
        <Link to="/">BiyeKorun</Link>
      </Navbar.Brand>
      <Form inline className="p-3 px-5">
        <FormControl type="text" className="searchbar" placeholder="Search" />
        <Button
          variant="outline-success"
          className=" btn premium-btn searchBtn"
        >
          Search
        </Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="#">Get Pro</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="#">Help</Link>{" "}
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon style={{ color: "#b9b8c9" }} icon={faBell} />
          </Nav.Link>

          <Dropdown>
            <Dropdown.Toggle className="dropdown-image" id="dropdown-basic">
              {/* <img
                src="https://i.imgur.com/8AIDC3f.png"
                alt=""
                style={{ width: 35, borderRadius: 35 }}
                className="ml-2"
              /> */}
              <img
                style={{ width: 35, borderRadius: 35 }}
                className="  ml-2"
                src={
                  profileData?.profile?.user_profile[0]?.photo_url === undefined
                    ? "https://i.imgur.com/8AIDC3f.png"
                    : profileData?.profile?.user_profile[0]?.photo_url
                }
                alt=""
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as="button">
                <Link to="/user/dashboard">Dashboard</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <Link to="/">Account</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <Link to="/user">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <LogOut></LogOut>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default InnerNavBar;
