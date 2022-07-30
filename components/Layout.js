import React, { useState, useEffect } from "react";
import NavigationBar from "./Navbar";
import Footer from "./Footer";
// import videos from "../videos.json";
import VideoCard from "./VideoCard";
import TextSection from "./TextSection";
import FakesiteLinks from "./FakesiteLinks";
import Jumbotron from "./Jumbotron";
// import fetch from "../utils/fetch";

export default function Layout() {
  const [videos, setVideos] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://vimeo.com/api/v2/channel/staffpicks/videos.json`)
      .then((response) => response.json())
      .then((data) => setVideos(data));
    setLoading(false);
  }, []);
  console.log(videos);
  if (isLoading) return <p>Loading...</p>;
  if (!videos) return <p>No video data</p>;
  return (
    <div className="content">
      <NavigationBar />
      <Jumbotron />

      {videos != undefined &&
        videos.map((video, i) => {
          return <VideoCard key={i} video={video} />;
        })}
      <TextSection />
      <FakesiteLinks />
      <Footer />
    </div>
  );
}
