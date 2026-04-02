import React from "react";
import { Link } from "react-router-dom";
import CaseStudyVanta from "./CaseStudyVanta";
import "./caseStudy.css";
import "./lamer.css";

const base = process.env.PUBLIC_URL || "";

const Lamer = () => {
  return (
    <article
      className="caseStudy caseStudy--lamer"
      aria-label="La Mer case study"
    >
      <CaseStudyVanta />
      <div className="caseStudy__shell">
        <Link to="/portfolio" className="caseStudy__back">
          ← BACK
        </Link>

        <header className="caseStudy__hero">
          <p className="caseStudy__eyebrow">
            LA MER / THE ESTÉE LAUDER COMPANIES · SOHO, NEW YORK, NY
          </p>
          <h1 className="caseStudy__title">ONLINE &amp; E-COMMERCE</h1>
          <p className="caseStudy__subhead caseStudy__subhead--lamerIntro">
            <span className="caseStudy__subheadBody">
              Summer internship scaling global digital programs: promo asset access,
              lifecycle email governance, reviews intelligence, and localized brand
              storytelling on LaMer.com.
            </span>
          </p>
        </header>

        <div className="caseStudy__meta" role="list">
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">CHALLENGE ↘</span>
            <p className="caseStudy__metaValue">
              ENABLE AFFILIATE TEAMS WORLDWIDE TO SHIP ON-BRAND, COMPLIANT CAMPAIGNS
              WITH CURRENT ASSETS, WHILE BASELINING EMAIL, REVIEWS, AND CONTENT HUB
              QUALITY ACROSS MARKETS.
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">FOCUS ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>PROMO ASSET LIBRARY</li>
              <li>WELCOME EMAIL &amp; SERIES AUDITS</li>
              <li>RATINGS &amp; REVIEWS</li>
              <li>DISCOVER GNAV &amp; BRAND STORIES</li>
              <li>LOCALIZATION QA</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">INDUSTRY ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>LUXURY BEAUTY</li>
              <li>GLOBAL E-COMMERCE</li>
              <li>AFFILIATE &amp; DAM OPERATIONS</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">TIMELINE ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>JUNE 2024 – AUGUST 2024 · ONLINE &amp; E-COMMERCE INTERN</li>
            </ul>
          </div>
        </div>

        <figure className="caseStudy__heroMedia caseStudy__heroMedia--browser caseStudy__heroMedia--lamer">
          <img
            src={`${base}/images/lamerlandingpage.png`}
            alt="La Mer ecommerce and campaign landing experience"
            className="caseStudy__heroImg"
          />
        </figure>

        <section className="caseStudy__section" aria-labelledby="lamer-overview">
          <h2 id="lamer-overview" className="caseStudy__sectionTitle">
            OVERVIEW ↘
          </h2>
          <div className="caseStudy__prose">
            <p>
              La Mer is the gold standard of prestige skincare brands. The
              product&apos;s effectiveness is based on the sea, craftsmanship is
              meticulous, and the price point demands that every interaction with the
              brand online should match the level of care and attention to detail of
              the product in the jar.
            </p>
            <p>
              My summer internship was the place where the digital version of that
              brand story meets the reality of being operational at a global level
              with online and e-commerce partners who take the brand into every
              marketplace around the world every day. The task was to ensure the
              experience on LaMer.com was just as polished as it is in a campaign,
              not as a one-off hero moment but as the entire cadence of how the brand
              shows up to the actual customer.
            </p>
            <p>
              I worked with the online and e-commerce teams around the world on the
              operational rigor behind the polish. That included the rules of
              engagement for approved affiliate creative, the lifecycle programs so
              they are always visible when you are in the weeds of the work, and the
              product page where trust is part of the luxury brand&apos;s promise,
              from ratings and reviews to the brand narratives we prioritized in
              Discover.
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="lamer-impact">
          <h2 id="lamer-impact" className="caseStudy__sectionTitle">
            KEY PROJECTS ↘
          </h2>
          <ul className="caseStudy__list">
            <li>
              <span className="caseStudy__listLead">Promo asset library</span>
              <span className="caseStudy__listBody">
                Built a promo asset library so affiliate teams in all global markets
                could easily access non-expired promotional assets with SKU data and
                DAM links, eliminating a manual review process.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Welcome email audit</span>
              <span className="caseStudy__listBody">
                Ran a welcome email and welcome series audit across global markets,
                establishing a baseline of live in-market programs after the oversight
                transition from Global Online.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Ratings &amp; reviews audit</span>
              <span className="caseStudy__listBody">
                Conducted a ratings and reviews audit of fifteen hero products in all
                global markets, analyzing review quantity, star ratings, and top review
                quality to inform conversion optimization.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Discover GNAV content hub</span>
              <span className="caseStudy__listBody">
                Audited the Discover GNAV content hub in all global markets to confirm
                localization and implementation of globally recommended brand stories on
                LaMer.com.
              </span>
            </li>
          </ul>
        </section>

        <section className="caseStudy__section" aria-labelledby="lamer-tools">
          <h2 id="lamer-tools" className="caseStudy__sectionTitle">
            TOOLS &amp; PRACTICES ↘
          </h2>
          <div className="caseStudy__tools">
            <p>
              <span className="caseStudy__toolsLabel">STACK &amp; ANALYTICS</span>
              HTML, CSS, JAVASCRIPT · GOOGLE ANALYTICS
            </p>
            <p>
              <span className="caseStudy__toolsLabel">CREATIVE &amp; CONTENT</span>
              ADOBE CREATIVE SUITE · DAM WORKFLOWS · PROMOTIONAL ASSET GOVERNANCE
            </p>
            <p>
              <span className="caseStudy__toolsLabel">WAYS OF WORKING</span>
              CONTENT STRATEGY · WORKFLOW OPTIMIZATION · CROSS-FUNCTIONAL
              COLLABORATION · GLOBAL LOCALIZATION QA
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="lamer-gallery">
          <h2 id="lamer-gallery" className="caseStudy__sectionTitle">
            IN THE WORK ↘
          </h2>
          <div className="caseStudy__gallery caseStudy__gallery--three caseStudy__gallery--lamerWork">
            <figure className="caseStudy__galleryItem">
              <img
                src={`${base}/images/lamerimage1.png`}
                alt="La Mer digital campaign or product storytelling implementation"
              />
            </figure>
            <figure className="caseStudy__galleryItem">
              <img
                src={`${base}/images/lamerimage2.png`}
                alt="La Mer seasonal or ecommerce creative sample"
              />
            </figure>
            <figure className="caseStudy__galleryItem caseStudy__galleryItem--logo">
              <img
                src={`${base}/images/La-Mer-logo.jpg`}
                alt="La Mer brand mark"
              />
            </figure>
          </div>
        </section>

        <footer className="caseStudy__footer">
          <a
            href="https://www.cremedelamer.com/"
            className="caseStudy__cta"
            target="_blank"
            rel="noreferrer noopener"
          >
            VISIT LA MER ↗
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

export default Lamer;
