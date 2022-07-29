import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import Image from "next/image";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar position-absolute w-100 bg-none">
      <Container>
        <Navbar.Brand className="navbar-brand" href="#">
          <Image
            src={logo}
            width="60"
            className="d-inline-block align-top"
            alt="Fox logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
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
    </Navbar>
  );
}
