import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VideoCard from "./VideoCard";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <VideoCard />
      <Footer />
    </div>
  );
}
