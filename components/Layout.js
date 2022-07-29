import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import videos from "../videos.json";
import VideoCard from "./VideoCard";
import TextSection from "./TextSection";
import FakesiteLinks from "./FakesiteLinks";
import Jumbotron from "./Jumbotron";

export default function Layout() {
  return (
    <div className="content">
      <Navbar />
      <Jumbotron />
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      <TextSection />
      <FakesiteLinks />
      <Footer />
    </div>
  );
}
