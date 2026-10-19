import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import GradientBackdrop from "./backgrounds/GradientBackdrop";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("home-page");
    return () => document.documentElement.classList.remove("home-page");
  }, []);

  return (
    <>
      <GradientBackdrop />

      <main className="home">
        <section className="olhaHero" aria-label="Hero">
          <div className="olhaHero__titleBlock">
            <h1 className="olhaHero__title">FERNANDO ROJAS</h1>
            <div className="olhaHero__location">
              <span>BASED</span>
              <span className="olhaHero__locationMiddle">IN</span>
              <span>SANTA CLARITA, CA</span>
            </div>
          </div>

          <div className="olhaHero__workRow">
            <div className="olhaHero__list">
              <span>DISNEY — TALENT CONNECTIONS</span>
              <span>PRIME AI CONSULTANTS — CO-FOUNDER</span>
              <span>WEB DESIGN — AI SYSTEMS</span>
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
              I DESIGN AND BUILD FOR THE WEB.
            </div>
            <div>
              MARKETING SPECIALIST AT DISNEY BY DAY, CO-FOUNDER OF PRIME AI CONSULTANTS BY NIGHT.
            </div>
          </div>

          <Link className="olhaHero__workBtn" to="/portfolio">
            VIEW WORK
          </Link>
        </section>

        <section className="primeSection" aria-label="Prime AI Consultants">
          <div className="primeSection__inner">
            <span className="primeSection__eyebrow">Currently building</span>
            <h2 className="primeSection__title">PRIME AI CONSULTANTS</h2>
            <p className="primeSection__body">
              An AI consultancy I co-founded with my father. We find where
              local service businesses lose money and fix it, with AI where it
              fits. Our AI Search Visibility Audit scores what ChatGPT,
              Perplexity, and Google say about your business, out of 100.
            </p>
            <a
              className="primeSection__link"
              href="https://www.primeaiconsultants.com/audit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get your audit &#8599;
            </a>
          </div>
        </section>
      </main>
    </>
  );
}