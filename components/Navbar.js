import React from "react";
import logo from "../assets/images/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav class="navbar position-absolute w-100 bg-none">
      <a class="navbar-brand" href="#">
        <Image
          src={logo}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="Fox logo"
        />
      </a>
    </nav>
  );
}
