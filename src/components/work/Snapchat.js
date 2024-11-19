import React from "react";
import "./Snapchat.css";

const Snapchat = () => {
  return (
    <div className="snapchat-container">
      {/* Hero Section */}
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
            As a Snap Lens Academy Scholar, I collaborated with cross-functional teams to
            design and implement augmented reality (AR) experiences. By leveraging Snap's Lens
            Studio and other tools, I contributed to creative and educational lenses that
            showcased Snapchat's leadership in AR innovation.
          </p>
        </div>
      </section>

      {/* Key Projects & Skills Section */}
      <section className="snapchat-projects-skills-section">
        {/* Key Projects */}
        <div className="snapchat-projects-section">
          <h3 className="snapchat-projects-title">Key Projects</h3>
          <ul className="snapchat-projects-list">
            <li>
              <strong>Immersive AR Experiences:</strong> Created innovative augmented reality experiences using Snap’s Lens Studio technology to drive engagement and creativity.
            </li>
            <li>
              <strong>Streamlined Performance:</strong> Improved AR feature performance by optimizing load times, ensuring a seamless user experience for enterprise applications.
            </li>
            <li>
              <strong>User-Centered Design:</strong> Conducted user testing and analytics to refine designs, enhancing usability and aligning features with business objectives.
            </li>
            <li>
              <strong>Creative Lens Development:</strong> Designed 10+ AR lenses, achieving <strong>1.1M total views on Snapchat</strong> through creative storytelling and innovative design.
            </li>
          </ul>
        </div>

        {/* Skills & Tools */}
        <div className="snapchat-skills-section">
          <h3 className="snapchat-skills-title">Skills & Tools</h3>
          <p className="snapchat-skills-description">
            <strong>Technologies & Frameworks:</strong> JavaScript, Lens Studio<br />
            <strong>Design Tools:</strong> Blender, Photoshop, After Effects<br />
            <strong>Collaboration Tools:</strong> Slack, Google Workspace<br />
            <strong>Development Practices:</strong> Agile Development, User Testing, Performance Optimization
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
