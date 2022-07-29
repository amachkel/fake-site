import React, { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import parse from "html-react-parser";

export default function VideoCard(props) {
  const [checked, setChecked] = useState(false);

  const revealVideo = () => {
    !checked ? setChecked(true) : setChecked(false);
  };

  return (
    <div className="section">
      <div key={props.video.id} className="row">
        <div className="col-sm-12 col-md-6">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">{props.video.title}</h5>
              <p className="card-text">{parse(props.video.description)}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card border-0">
            {checked ? (
              <div className="video card-body active">
                <button
                  className="video-button btn btn-2"
                  style={{ border: "none " }}
                  onClick={() => revealVideo()}
                ></button>

                <Vimeo className="vimeo d-block" video={props.video.id} />
              </div>
            ) : (
              <div
                className="video card-body"
                style={{
                  backgroundImage: `url(${props.video.thumbnail_large})`,
                }}
              >
                <button
                  className="video-button btn"
                  onClick={() => revealVideo()}
                ></button>
                <Vimeo className="vimeo d-none" video={props.video.url} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
