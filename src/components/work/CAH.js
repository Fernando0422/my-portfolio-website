import React from "react";
import "./CAH.css";

const CAH = () => {
  return (
    <div className="cah-container">
      {/* Hero Section with Image */}
      <section className="cah-hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/cah.png`} 
          alt="Center for the Arts and Humanities Hero"
          className="cah-hero-image"
        />
      </section>

      {/* Description Section */}
      <section className="cah-description-section">
        <div className="cah-left">
          <h1 className="cah-title">CENTER FOR THE ARTS AND HUMANITIES</h1>
          <h2 className="cah-subtitle">
            Promoting cultural engagement and creative expression.
          </h2>
        </div>
        <div className="cah-right">
          <p className="cah-description">
            The Center for the Arts and Humanities (CAH) at SCU fosters cultural engagement
            and creative expression through innovative programming and research.
            CAH collaborates with artists, scholars, and the community to produce
            impactful experiences that promote reflection, dialogue, and transformation.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="cah-images">
        <div className="cah-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/CAHimg1.png`} 
            alt="Center for the Arts and Humanities Logo"
            className="cah-img"
          />
        </div>
        <div className="cah-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/CAHimg2.png`} 
            alt="Belonging, Community, and Home graphic"
            className="cah-img"
          />
        </div>
      </section>
    </div>
  );
};

export default CAH;
