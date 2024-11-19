import React from "react";
import "./DorothysCalculator.css";

const DorothysCalculator = () => {
  return (
    <div className="dorothys-calculator-container">
      {/* Hero Section */}
      <section className="dorothys-calculator-hero">
      <img
  src={`${process.env.PUBLIC_URL}/images/Dorothys Calculator.png`}
  alt="Dorothy's Calculator Hero"
  className="dorothys-calculator-hero-image"
/>

      </section>

      {/* Description Section */}
      <section className="dorothys-calculator-description-section">
        <div className="dorothys-calculator-left">
          <h1 className="dorothys-calculator-title">DOROTHY'S CALCULATOR</h1>
          <h2 className="dorothys-calculator-subtitle">
            Empowering Students through Digital Tools
          </h2>
        </div>
        <div className="dorothys-calculator-right">
          <p className="dorothys-calculator-description">
            Dorothy’s Calculator is a groundbreaking initiative designed to
            empower students and provide resources for underrepresented communities. By
            leveraging technology, we created a platform to address unique challenges faced by trans
            youth and students, ensuring access to education, support, and inclusivity.
          </p>
        </div>
      </section>

      {/* Key Projects & Skills Section */}
      <section className="dorothys-calculator-projects-skills-section">
        {/* Key Projects */}
        <div className="dorothys-calculator-projects-section">
          <h3 className="dorothys-calculator-projects-title">Key Projects</h3>
          <ul className="dorothys-calculator-projects-list">
            <li>
              <strong>Full-Stack Platform Development:</strong> Designed, developed, and deployed an educational platform, supporting over 22,000 high school students in the William S. Hart School District.
            </li>
            <li>
              <strong>Google Maps API Integration:</strong> Implemented a feature to display 23+ in-person clinics and resource centers for trans youth in Los Angeles, enhancing accessibility for the community.
            </li>
            <li>
              <strong>Pronoun Dressing Room:</strong> Developed an innovative feature using JavaScript, allowing users to explore pronoun representation in a safe and personalized virtual environment.
            </li>
            <li>
              <strong>Funding and Recognition:</strong> Secured funding through the T-Mobile Changemaker Challenge for the “Equity in Action” category. <a href="https://www.t-mobile.com/news/press/changemaker-challenge-2022-winners" target="_blank" rel="noopener noreferrer">Read More</a>
            </li>
          </ul>
        </div>

        {/* Skills & Tools */}
        <div className="dorothys-calculator-skills-section">
          <h3 className="dorothys-calculator-skills-title">Skills & Tools</h3>
          <p className="dorothys-calculator-skills-description">
            <strong>Technologies & Frameworks:</strong> HTML, CSS, JavaScript, REST APIs<br />
            <strong>Development Tools:</strong> Git, GitHub<br />
            <strong>API Integrations:</strong> Google Maps API<br />
            <strong>Design Tools:</strong> Figma, Adobe Photoshop<br />
            <strong>Collaboration:</strong> Agile Development, Stakeholder Engagement
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="dorothys-calculator-images">
        <div className="dorothys-calculator-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/tmobile.png`}
            alt="T-Mobile Changemaker Challenge"
            className="dorothys-calculator-img"
          />
        </div>
        <div className="dorothys-calculator-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/DCright.png`}
            alt="Dorothy's Calculator Platform"
            className="dorothys-calculator-img"
          />
        </div>
      </section>
    </div>
  );
};

export default DorothysCalculator;
