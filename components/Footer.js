import React from "react";
import Image from "next/dist/client/image";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer
      className="card-footer pt-3"
      style={{ borderTop: "1px solid #e8e8e8" }}
    >
      <a className="footer-brand" href="#">
        <Image src={logo} width="60" alt="Fox logo" />
      </a>

      <ul className="footer-nav">
        <li className="footer-item">
          <a className="footer-link" href="#">
            Terms
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Privacy
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Site Map
          </a>
        </li>
      </ul>
    </footer>
  );
}
