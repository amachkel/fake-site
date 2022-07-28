import React from "react";
import videos from "../videos.json";
import Vimeo from "@u-wave/react-vimeo";

export default function VideoCard() {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.id} className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <Vimeo video={video.url} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
