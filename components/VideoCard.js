import React, { useState } from "react";
import videos from "../videos.json";
import Vimeo from "@u-wave/react-vimeo";
import parse from "html-react-parser";

export default function VideoCard() {
  const [checked, setChecked] = useState(false);

  const revealVideo = () => {
    !checked ? setChecked(true) : setChecked(false);
  };

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id} className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{parse(video.description)}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card border-0">
              {checked ? (
                <div className="video card-body active">
                  <button
                    className="video-button btn"
                    onClick={() => revealVideo()}
                  ></button>

                  <Vimeo className="vimeo d-block" video={video.url} />
                </div>
              ) : (
                <div
                  className="video card-body"
                  style={{
                    backgroundImage: `url(${video.thumbnail_large})`,
                  }}
                >
                  <button
                    className="video-button btn"
                    onClick={() => revealVideo()}
                  ></button>
                  <Vimeo className="vimeo d-none" video={video.url} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
