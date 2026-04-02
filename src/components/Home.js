import React from "react";
import "./Home.css";
import GradientBackdrop from "./backgrounds/GradientBackdrop";

export default function Home() {
  return (
    <>
      <GradientBackdrop />

      <main className="home">
        <section className="olhaHero" aria-label="Hero">
          <div className="olhaHero__titleRow">
            <h1 className="olhaHero__title">VENTURE OPERATOR</h1>
          <div className="olhaHero__location">
            <span>BASED</span>
            <span className="olhaHero__locationMiddle">IN</span>
            <span>LOS ANGELES</span>
          </div>
          </div>

          <div className="olhaHero__workRow">
            <div className="olhaHero__list">
              <span>REAL ESTATE TECH</span>
              <span>PRODUCT SYSTEMS</span>
              <span>GLOBAL MARKETS</span>
            </div>

            <div className="olhaHero__photo" aria-hidden="true">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-olha.png`}
                alt=""
                draggable="false"
              />
            </div>
          </div>

          <div className="olhaHero__copy">
            <div>
              I BUILD VENTURES AT THE INTERSECTION OF TECHNOLOGY AND REAL ESTATE.
            </div>
            <div>
              DESIGN, ENGINEERING, AND BUSINESS STRATEGY IN ONE PERSON.
            </div>
          </div>

          <a className="olhaHero__recentWork" href="/#/portfolio">
            RECENT WORK <span aria-hidden="true">↓</span>
          </a>
        </section>
      </main>
    </>
  );
}