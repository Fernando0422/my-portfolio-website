import React from "react";
import "./Snapchat.css";

const Snapchat = () => {
  return (
    <div className="snapchat-container">
      {/* Hero Section with Image */}
      <section className="snapchat-hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/snapchathero.jpg`}
          alt="Snapchat Hero"
          className="snapchat-hero-image"
        />
      </section>

      {/* Description Section */}
      <section className="snapchat-description-section">
        <div className="snapchat-left">
          <h1 className="snapchat-title">SNAPCHAT</h1>
          <h2 className="snapchat-subtitle">Pioneering the Future of AR Experiences</h2>
        </div>
        <div className="snapchat-right">
          <p className="snapchat-description">
            Snapchat has been at the forefront of augmented reality, empowering users to explore the digital world in 
            creative ways. By pioneering advancements in AR technology, Snapchat brings immersive and interactive 
            experiences to users worldwide, making it a leader in digital innovation.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="snapchat-images">
        <div className="snapchat-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/snapchat.jpg`}
            alt="Snapchat AR Experiences"
            className="snapchat-img"
          />
        </div>
        <div className="snapchat-video">
          <video
            src={`${process.env.PUBLIC_URL}/images/snap1.mp4`}
            className="snapchat-video-loop"
            autoPlay
            loop
            muted
          />
        </div>
      </section>
    </div>
  );
};

export default Snapchat;
