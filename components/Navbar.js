import React from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 bg-none justify-content-between">
      <a className="navbar-brand" href="#">
        <Image
          src={logo}
          width="60"
          className="d-inline-block align-top"
          alt="Fox logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end "
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Help
            </a>
          </li>
          <li className="nav-item">
            <Image
              src={avatar}
              width="45"
              height="45"
              alt="avatar"
              className="bg-none"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
