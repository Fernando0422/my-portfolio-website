import React from "react";
import "./lamer.css";

const Lamer = () => {
  return (
    <div className="lamer-container">
      {/* Hero Section */}
      <section className="lamer-hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/lamerlandingpage.png`}
          alt="La Mer Hero"
          className="lamer-hero-image"
        />
      </section>

      {/* Description Section */}
      <section className="lamer-description-section">
        <div className="lamer-left">
          <h1 className="lamer-title">LA MER</h1>
          <h2 className="lamer-subtitle">
            Elevating luxury skincare with the power of the sea.
          </h2>
          <p className="lamer-description">
            La Mer is renowned for its transformational approach to skincare,
            using a unique blend of sustainably sourced ingredients from the
            ocean. Its iconic Miracle Broth™ powers a range of high-performance
            treatments designed to renew, hydrate, and revitalize the skin.
            Synonymous with indulgence and visible results, La Mer continues to
            set the standard for luxury in the beauty industry, connecting
            consumers with an experience that goes beyond skincare—delivering
            self-care rooted in science, nature, and craftsmanship.
          </p>
        </div>
        <div className="lamer-right">
          <p className="lamer-description">
            As part of my work with La Mer, I developed strategies and solutions
            to enhance their digital presence, ensuring seamless user experiences
            and effective cross-functional collaboration.
          </p>
          <h3 className="lamer-skills-title">Skills & Tools</h3>
          <p className="lamer-skills-description">
            <strong>Technologies & Frameworks:</strong> HTML, CSS, JavaScript, Google Analytics<br />
            <strong>Design Tools:</strong> Adobe Creative Suite<br />
            <strong>Practices:</strong> Content Strategy, Workflow Optimization, Cross-functional Collaboration
          </p>
        </div>
      </section>

      {/* Key Projects & Skills Section */}
      <section className="lamer-projects-skills-section">
        {/* Key Projects */}
        <div className="lamer-projects-section">
          <h3 className="lamer-projects-title">Key Projects</h3>
          <ul className="lamer-projects-list">
            <li>
              <strong>Asset Library Development:</strong> Streamlined the process
              for reusing promotional and seasonal materials by creating a
              centralized asset library, enabling efficient global campaign
              management.
            </li>
            <li>
              <strong>Welcome Email Audit:</strong> Reviewed and optimized La
              Mer’s email campaigns, ensuring alignment with brand messaging and
              supporting localization efforts across global markets.
            </li>
            <li>
              <strong>Ratings & Reviews Audit:</strong> Evaluated hero products
              to identify opportunities for improving customer feedback coverage,
              enhancing the online shopping experience.
            </li>
            <li>
              <strong>Discover GNAV & Content Audit:</strong> Assessed the global
              navigation and content hub to ensure priority brand stories were
              localized and effectively presented.
            </li>
          </ul>
        </div>
      </section>

      {/* Images Section */}
      <section className="lamer-images">
        <div className="lamer-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/lamerimage1.png`}
            alt="La Mer Image 1"
            className="lamer-img"
          />
        </div>
        <div className="lamer-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/lamerimage2.png`}
            alt="La Mer Image 2"
            className="lamer-img"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="lamer-cta-section">
        <p>
          Want to know more about my work at La Mer?{" "}
          <a href="mailto:Fernando.rojas0422@gmail.com">Let’s connect!</a>
        </p>
      </section>
    </div>
  );
};

export default Lamer;
