import React from "react";

export default function Jumbotron() {
  return (
    <div className="section jumbo-wrapper">
      <div className="jumbotron bg-cover jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4 header">The World's greatest fake site</h1>
          <p className="lead">
            Create the world's greatest fake site and enjoy
            <br />
            the breeze of fresh air when you complete it
          </p>
          <p className="lead">
            <a className="btn btn-lg custom-btn" href="#" role="button">
              Do something awesome
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
