import React from "react";
import { Link } from "react-router-dom";
import CaseStudyVanta from "./CaseStudyVanta";
import "./caseStudy.css";
import "./CAH.css";

const base = process.env.PUBLIC_URL || "";

const CAH = () => {
  return (
    <article className="caseStudy caseStudy--cah" aria-label="CAH case study">
      <CaseStudyVanta />
      <div className="caseStudy__shell">
        <Link to="/portfolio" className="caseStudy__back">
          ← BACK
        </Link>

        <header className="caseStudy__hero">
          <p className="caseStudy__eyebrow">
            SANTA CLARA UNIVERSITY · CENTER FOR THE ARTS AND HUMANITIES · SANTA
            CLARA, CA
          </p>
          <h1 className="caseStudy__title">WEB DEVELOPER</h1>
          <p className="caseStudy__subhead caseStudy__subhead--cahIntro">
            <span className="caseStudy__subheadBody">
              Institutional web platforms, accessible UX, and reliable delivery across
              academic and public-facing properties.
            </span>
          </p>
        </header>

        <div className="caseStudy__meta" role="list">
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">CHALLENGE ↘</span>
            <p className="caseStudy__metaValue">
              EVOLVE ACCESSIBLE, DATA-INFORMED WEB EXPERIENCES THAT SERVE STUDENTS,
              FACULTY, AND PUBLIC AUDIENCES WHILE KEEPING CAH PROPERTIES STABLE AND
              CONSISTENT.
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">FOCUS ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>UX &amp; ANALYTICS</li>
              <li>INTERACTIVE PROTOTYPES</li>
              <li>ACCESSIBILITY</li>
              <li>STAKEHOLDER RELEASES</li>
              <li>PERFORMANCE &amp; TROUBLESHOOTING</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">INDUSTRY ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>HIGHER EDUCATION</li>
              <li>ARTS &amp; HUMANITIES</li>
              <li>PUBLIC WEB &amp; ACADEMIC SYSTEMS</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">TIMELINE ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>APRIL 2023 – JUNE 2025 · WEB DEVELOPER</li>
            </ul>
          </div>
        </div>

        <figure className="caseStudy__heroMedia caseStudy__heroMedia--browser caseStudy__heroMedia--cah">
          <img
            src={`${base}/images/CAHimg2.png`}
            alt="Center for the Arts and Humanities website interface and navigation"
            className="caseStudy__heroImg"
          />
        </figure>

        <section className="caseStudy__section" aria-labelledby="cah-overview">
          <h2 id="cah-overview" className="caseStudy__sectionTitle">
            OVERVIEW ↘
          </h2>
          <div className="caseStudy__prose">
            <p>
              At the Center for the Arts and Humanities I owned the web work end to
              end—less “someone should fix the site,” more turning real stakeholder
              asks into UX we could actually ship and stand behind.
            </p>
            <p>
              That meant prototyping with accessibility in the loop, not as an
              afterthought, and keeping public and academic-facing properties stable
              while priorities and content kept moving around the rest of the
              university. The job was dependable delivery inside an ecosystem that
              does not slow down for you.
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="cah-impact">
          <h2 id="cah-impact" className="caseStudy__sectionTitle">
            KEY IMPACT ↘
          </h2>
          <ul className="caseStudy__list">
            <li>
              <span className="caseStudy__listLead">Platforms &amp; engagement</span>
              <span className="caseStudy__listBody">
                Built and maintained institutional web platforms, implementing
                data-informed UX and system improvements that increased user
                interaction by 20%.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Prototypes &amp; accessibility</span>
              <span className="caseStudy__listBody">
                Designed, tested, and validated interactive prototypes, incorporating
                accessibility standards and stakeholder requirements to improve
                usability and platform consistency.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Stakeholders &amp; reliability</span>
              <span className="caseStudy__listBody">
                Ran coordination with internal stakeholders to deploy updates,
                troubleshoot platform issues, and ensure reliable site performance
                across academic and public-facing properties.
              </span>
            </li>
          </ul>
        </section>

        <section className="caseStudy__section" aria-labelledby="cah-tools">
          <h2 id="cah-tools" className="caseStudy__sectionTitle">
            TOOLS &amp; PRACTICES ↘
          </h2>
          <div className="caseStudy__tools">
            <p>
              <span className="caseStudy__toolsLabel">LANGUAGES &amp; FRAMEWORKS</span>
              HTML, CSS, JAVASCRIPT, REACT
            </p>
            <p>
              <span className="caseStudy__toolsLabel">DESIGN &amp; QA</span>
              FIGMA · ADOBE PHOTOSHOP · BROWSERSTACK · CROSSBROWSERTESTING
            </p>
            <p>
              <span className="caseStudy__toolsLabel">ENGINEERING</span>
              GIT · GITHUB · WCAG · ARIA · RESPONSIVE &amp; MOBILE-FIRST DEVELOPMENT
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="cah-gallery">
          <h2 id="cah-gallery" className="caseStudy__sectionTitle">
            IN THE WORK ↘
          </h2>
          <div className="caseStudy__gallery">
            <figure className="caseStudy__galleryItem">
              <img
                src={`${base}/images/CAHimg1.png`}
                alt="Center for the Arts and Humanities brand and visual storytelling"
              />
            </figure>
            <figure className="caseStudy__galleryItem caseStudy__galleryItem--cahLogo">
              <img
                src={`${base}/images/cah.png`}
                alt="Center for the Arts and Humanities logo mark"
              />
            </figure>
          </div>
        </section>

        <footer className="caseStudy__footer">
          <a
            href="https://www.scu.edu/cas/center-for-the-arts-and-humanities/"
            className="caseStudy__cta"
            target="_blank"
            rel="noreferrer noopener"
          >
            VISIT SCU CAH ↗
          </a>
          <a
            href="mailto:Fernando.rojas0422@gmail.com"
            className="caseStudy__cta caseStudy__cta--muted"
          >
            EMAIL ME ABOUT THIS PROJECT ↗
          </a>
        </footer>
      </div>
    </article>
  );
};

export default CAH;
