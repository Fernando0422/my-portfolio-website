import React from "react";
import "./CAH.css";

const CAH = () => {
  return (
    <div className="cah-container">
      {/* Hero Section */}
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
            Empowering innovation through cultural engagement and creative expression.
          </h2>
        </div>
        <div className="cah-right">
          <p className="cah-description">
            As a Web Developer for CAH, I design and implement innovative web solutions,
            ensuring accessibility, usability, and engaging content delivery. I collaborate
            with interdisciplinary teams to enhance user experiences and support CAH’s mission
            of fostering cultural and creative excellence.
          </p>
        </div>
      </section>

      {/* Key Projects & Skills Section */}
      <section className="cah-projects-skills-section">
        {/* Key Projects */}
        <div className="cah-projects-section">
          <h3 className="cah-projects-title">Key Projects</h3>
          <ul className="cah-projects-list">
            <li>
              <strong>Accessible Web Redesign:</strong> Spearheaded a complete redesign of the CAH website, ensuring WCAG compliance and enhanced accessibility.
            </li>
            <li>
              <strong>Dynamic Event Listings:</strong> Developed a dynamic events feature, automatically syncing with the University’s calendar system.
            </li>
            <li>
              <strong>Feedback-Driven Enhancements:</strong> Launched a user feedback system to refine functionality and meet user needs.
            </li>
            <li>
              <strong>Cross-Platform Testing:</strong> Ensured seamless performance across devices through robust QA processes.
            </li>
          </ul>
        </div>

        {/* Skills & Tools */}
        <div className="cah-skills-section">
          <h3 className="cah-skills-title">Skills & Tools</h3>
          <p className="cah-skills-description">
            <strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, React<br />
            <strong>Design Tools:</strong> Figma, Adobe Photoshop<br />
            <strong>Version Control:</strong> Git, GitHub<br />
            <strong>Testing & QA:</strong> BrowserStack, CrossBrowserTesting<br />
            <strong>Accessibility:</strong> WCAG Standards, ARIA Roles<br />
            <strong>Development Practices:</strong> Responsive Design, Mobile-First Development
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
