import React from "react";
import { Link } from "react-router-dom";
import CaseStudyVanta from "./CaseStudyVanta";
import "./caseStudy.css";
import "./Disney.css";

const Disney = () => {
  return (
    <article className="caseStudy caseStudy--disney" aria-label="Disney case study">
      <CaseStudyVanta />
      <div className="caseStudy__shell">
        <Link to="/portfolio" className="caseStudy__back">
          ← BACK
        </Link>

        <header className="caseStudy__hero">
          <p className="caseStudy__eyebrow">
            THE WALT DISNEY COMPANY · BURBANK, CA (REMOTE)
          </p>
          <h1 className="caseStudy__title">DIGITAL MARKETING COORDINATOR</h1>
          <p className="caseStudy__subhead caseStudy__subhead--disneyIntro">
            <span className="caseStudy__subheadBody">
              Talent Acquisition Marketing focused on Heroes Work Here, global careers
              experiences in Phenom and Radancy, and performance insights with Adobe
              Analytics.
            </span>
          </p>
        </header>

        <div className="caseStudy__meta" role="list">
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">CHALLENGE ↘</span>
            <p className="caseStudy__metaValue">
              Ship candidate-facing properties and CMS-driven careers pages with
              strong brand alignment, localization, and measurable quality.
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">SERVICE ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>WEB DEVELOPMENT</li>
              <li>CMS BUILD &amp; QA</li>
              <li>CROSS-FUNCTIONAL COORDINATION</li>
              <li>ANALYTICS</li>
            </ul>
          </div>

          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">INDUSTRY ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>MEDIA, ENTERTAINMENT &amp; EXPERIENCES</li>
              <li>TALENT ACQUISITION</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">TIMELINE ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>APRIL 2026 – PRESENT · DIGITAL MARKETING COORDINATOR</li>
              <li>JUNE 2025 – APRIL 2026 · MARKETING &amp; DIGITAL MEDIA INTERN</li>
            </ul>
          </div>
        </div>

        <figure className="caseStudy__heroMedia caseStudy__heroMedia--browser caseStudy__heroMedia--disney">
          <img
            src={`${process.env.PUBLIC_URL}/images/disney-careers-homepage.png`}
            alt="Disney Careers public homepage with hero and job search experience"
            className="caseStudy__heroImg"
          />
        </figure>

        <section className="caseStudy__section" aria-labelledby="cs-overview">
          <h2 id="cs-overview" className="caseStudy__sectionTitle">
            OVERVIEW ↘
          </h2>
          <div className="caseStudy__prose">
            <p>
              I started as a Marketing and Digital Media Intern (June 2025–April
              2026), then stepped into the Digital Marketing Coordinator role. I sit
              in Talent Acquisition Marketing: the work candidates actually see
              before they ever talk to a recruiter. Heroes Work Here was my lane in
              WordPress and Beaver Builder—shipping the site while creative, comms,
              marketing, and account teams all had a stake in how it looked and read.
            </p>
            <p>
              In parallel I build and manage careers pages in Phenom and Radancy:
              mockups in, production layouts out, then updates, revalidation, and the
              kind of QA you do when a global brand cannot afford a sloppy careers
              experience in the wild.
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="cs-impact">
          <h2 id="cs-impact" className="caseStudy__sectionTitle">
            KEY IMPACT ↘
          </h2>
          <ul className="caseStudy__list">
            <li>
              <span className="caseStudy__listLead">Heroes Work Here</span>
              <span className="caseStudy__listBody">
                Led the build in WordPress and Beaver Builder with regular
                coordination across creative, communications, marketing, and account
                management.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Careers CMS delivery</span>
              <span className="caseStudy__listBody">
                Built and managed career site pages in Phenom and Radancy,
                converting mockups into production-ready layouts for new development,
                updates, and revalidation.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Global Disney operations</span>
              <span className="caseStudy__listBody">
                Built and maintained Phenom career pages for global marketing needs
                across APAC, EMEA, LATAM, and other international audiences—turning
                mockups into production-ready layouts, auditing regional properties,
                and escalating CMS and widget issues to platform partners where needed.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Performance and optimization</span>
              <span className="caseStudy__listBody">
                Extracted and analyzed site performance metrics in Adobe Analytics to
                surface optimization opportunities.
              </span>
            </li>
          </ul>
        </section>

        <section className="caseStudy__section" aria-labelledby="cs-tools">
          <h2 id="cs-tools" className="caseStudy__sectionTitle">
            PLATFORMS &amp; PRACTICES ↘
          </h2>
          <div className="caseStudy__tools">
            <p>
              <span className="caseStudy__toolsLabel">CMS &amp; BUILD</span>
              WordPress, Beaver Builder, Phenom, Radancy
            </p>
            <p>
              <span className="caseStudy__toolsLabel">ANALYTICS</span>
              Adobe Analytics, performance metrics, data-driven optimization
            </p>
            <p>
              <span className="caseStudy__toolsLabel">COLLABORATION</span>
              Creative, communications, marketing, account management, vendor
              escalation (Phenom)
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="cs-gallery">
          <h2 id="cs-gallery" className="caseStudy__sectionTitle">
            IN THE WORK ↘
          </h2>
          <div className="caseStudy__gallery">
            <figure className="caseStudy__galleryItem">
              <img
                src={`${process.env.PUBLIC_URL}/images/disneycareers-1.png`}
                alt="Disney Careers page implementation detail"
              />
            </figure>
            <figure className="caseStudy__galleryItem">
              <img
                src={`${process.env.PUBLIC_URL}/images/disneycareers-2.png`}
                alt="Disney Careers CMS or localization-related work sample"
              />
            </figure>
          </div>
        </section>

        <footer className="caseStudy__footer">
          <a
            href="https://www.disneycareers.com/en/"
            className="caseStudy__cta"
            target="_blank"
            rel="noreferrer noopener"
          >
            VISIT DISNEY CAREERS ↗
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

export default Disney;
