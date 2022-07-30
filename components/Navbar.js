import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import Image from "next/image";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <>
      <Navbar scrolling="dark" expand="md" fixed="top">
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
            <Nav
              className="ms-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Navbar.Text className="nav-item">
                <Nav.Link className="nav-link" href="#action1">
                  Home
                </Nav.Link>
              </Navbar.Text>
              <Navbar.Text className="nav-item">
                <Nav.Link className="nav-link" href="#action2">
                  Link
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
      {/* <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              width="60"
              className="d-inline-block align-top"
              alt="Fox logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Navbar.Text className="nav-item">
                <Nav.Link className="nav-link" href="#home">
                  Home
                </Nav.Link>
              </Navbar.Text>
              <Navbar.Text className="nav-item">
                <Nav.Link className="nav-link" href="#link">
                  Link
                </Nav.Link>
              </Navbar.Text>
              <Navbar.Text className="nav-item">
                <Nav.Link>
                  <Image
                    src={avatar}
                    width="45"
                    height="45"
                    alt="avatar"
                    className="bg-none"
                  />
                </Nav.Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
    // <Navbar expand="lg" className="navbar position-absolute bg-none">
    //   <Container>
    //     <Navbar.Brand className="navbar-brand" href="#">
    //       <Image
    //         src={logo}
    //         width="60"
    //         className="d-inline-block align-top"
    //         alt="Fox logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   </Container>
    // </Navbar>
  );
}
