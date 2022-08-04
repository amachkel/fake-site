import React, { useState, useEffect } from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
// import videos from "../videos.json";
import VideoCard from "../components/VideoCard";
import TextSection from "../components/TextSection";
import FakesiteLinks from "../components/FakesiteLinks";
import Jumbotron from "../components/Jumbotron";
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
