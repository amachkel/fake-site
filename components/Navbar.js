import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import Image from "next/image";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavigationBar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      className={colorChange ? "navbar colorChange" : "navbar"}
      expand="md"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src={logo}
            width="60"
            // className="d-inline-block align-top"
            alt="Fox logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: "200px" }} navbarScroll>
            <Navbar.Text className="nav-item">
              <Nav.Link className="nav-link" href="#link-section">
                Account
              </Nav.Link>
            </Navbar.Text>
            <Navbar.Text className="nav-item">
              <Nav.Link className="nav-link" href="#link-section">
                Help
              </Nav.Link>
            </Navbar.Text>
          </Nav>
          <Nav.Link>
            <Image
              src={avatar}
              width="45"
              height="45"
              alt="avatar"
              className="bg-none"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
