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
            Dorothy's Calculator is a unique digital tool designed to assist students in their academic journey. With innovative features and user-friendly design, this calculator goes beyond basic functionality, providing insights and resources to foster learning and exploration in the field of mathematics and beyond.
          </p>
        </div>
      </section>

      {/* Images Section */}
      <section className="dorothys-calculator-images">
        <div className="dorothys-calculator-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/tmobile.png`}
            alt="T-Mobile"
            className="dorothys-calculator-img"
          />
        </div>
        <div className="dorothys-calculator-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/DCright.png`}
            alt="Dorothy's Calculator Right"
            className="dorothys-calculator-img"
          />
        </div>
      </section>
    </div>
  );
};

export default DorothysCalculator;
