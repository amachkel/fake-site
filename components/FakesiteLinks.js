import React from "react";

export default function FakesiteLinks() {
  return (
    <div
      id="link-section"
      className="section text-md-left fake-site-links-container"
    >
      <div className="row">
        <div className="col-sm-2 mx-auto">
          <p className="fake-link-header">Fakesite</p>
          <ul className="fake-link-list">
            <li>
              <a className="fake-link" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="fake-link" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="fake-link" href="#">
                Policies
              </a>
            </li>
            <li>
              <a className="fake-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-10 mx-auto">
          <p className="fake-link-header">Account</p>
          <ul className="fake-link-list">
            <li>
              <a className="fake-link" href="#">
                Edit Profile
              </a>
            </li>
            <li>
              <a className="fake-link" href="#">
                Friends
              </a>
            </li>
            <li>
              <a className="fake-link" href="#">
                Social
              </a>
            </li>
            <li>
              <a className="fake-link" href="#">
                Delete Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
