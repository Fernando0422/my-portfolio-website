import React from "react";
import "./lamer.css";

const Lamer = () => {
  return (
    <div className="lamer-container">
      {/* Hero Section with Image */}
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
        </div>
        <div className="lamer-right">
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
    </div>
  );
};

export default Lamer;
