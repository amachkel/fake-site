import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import videos from "../videos.json";
import VideoCard from "./VideoCard";
import TextSection from "./TextSection";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      <TextSection />
      <Footer />
    </div>
  );
}
