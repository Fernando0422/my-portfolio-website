import React from "react";
import { Link } from "react-router-dom";
import CaseStudyVanta from "./CaseStudyVanta";
import "./caseStudy.css";
import "./DorothysCalculator.css";

const base = process.env.PUBLIC_URL || "";

const DorothysCalculator = () => {
  return (
    <article
      className="caseStudy caseStudy--dorothy"
      aria-label="Dorothy's Calculator case study"
    >
      <CaseStudyVanta />
      <div className="caseStudy__shell">
        <Link to="/portfolio" className="caseStudy__back">
          ← BACK
        </Link>

        <header className="caseStudy__hero">
          <p className="caseStudy__eyebrow">
            WILLIAM S. HART SCHOOL DISTRICT · GREATER LOS ANGELES
          </p>
          <h1 className="caseStudy__title">DOROTHY&apos;S CALCULATOR</h1>
          <p className="caseStudy__subhead caseStudy__subhead--dorothyIntro">
            <span className="caseStudy__subheadBody">
              T-Mobile Changemaker funded platform for Hart district students.
              Full-stack web work, Google Maps layers for trans youth resources in
              LA, and JavaScript-first experiences including the pronoun dressing
              room.
            </span>
          </p>
        </header>

        <div className="caseStudy__meta" role="list">
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">CHALLENGE ↘</span>
            <p className="caseStudy__metaValue">
              SCALE AN EDUCATIONAL PLATFORM TO TENS OF THOUSANDS OF STUDENTS WHILE
              SURFACING LOCAL RESOURCES AND INCLUSIVE, INTERACTIVE EXPERIENCES BUILT
              WITH JAVASCRIPT.
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">FOCUS ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>JAVASCRIPT &amp; FRONT-END INTERACTIVITY</li>
              <li>REST APIS</li>
              <li>GOOGLE MAPS API</li>
              <li>FULL-STACK DEPLOYMENT</li>
              <li>EQUITY &amp; ACCESS</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">INDUSTRY ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>EDTECH</li>
              <li>COMMUNITY HEALTH &amp; RESOURCES</li>
              <li>YOUTH EQUITY</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">RECOGNITION ↘</span>
            <p className="caseStudy__metaValue">
              T-MOBILE CHANGEMAKER CHALLENGE · EQUITY IN ACTION CATEGORY
            </p>
          </div>
        </div>

        <figure className="caseStudy__heroMedia caseStudy__heroMedia--dcHero caseStudy__heroMedia--dcChangemakerHero">
          <img
            src={`${base}/images/tmobile.png`}
            alt="T-Mobile Changemaker Challenge 2022, Equity in Action winner recognition"
            className="caseStudy__heroImg"
          />
          <figcaption className="caseStudy__heroCaption">
            2022 CHANGEMAKER CHALLENGE · EQUITY IN ACTION · T-MOBILE FOUNDATION &amp;
            ASHOKA
          </figcaption>
        </figure>

        <section className="caseStudy__section" aria-labelledby="dc-overview">
          <h2 id="dc-overview" className="caseStudy__sectionTitle">
            OVERVIEW ↘
          </h2>
          <div className="caseStudy__prose">
            <p>
              Growing up I saw difference as something normal, not a reason for
              hostility. When a close friend came out as trans and faced harassment,
              bullying, and too little real support from school, I did not want them to
              feel alone in that. They were not going to be the only student who needed
              more than a district handout, so we started Dorothy&apos;s Calculator
              together. They held the community needs at the center; I brought HTML, CSS,
              and JavaScript so we could ship a space where trans youth in Los Angeles
              could learn themselves and explore identity, with those needs in the work
              from the first wireframe, not bolted on at the end. It was never about what
              I could list on a resume. It was about the kind of resources a school
              should already give students who are questioning. Factual toolkits, an
              updated pronoun dressing room for language many are denied at home or in
              school, and Google Maps layers put dozens of LA clinics and community
              supports on the map.
            </p>
            <p>
              We curated information across transgender and non-binary identities to
              foster education, understanding, and self-discovery, with the same rigor we
              brought to the toolkits and maps. Inclusive interaction patterns sat next to
              emergency exit flows because the person on the other side of the screen
              always came first. The site shipped to more than twenty thousand high
              school students across the William S. Hart district and earned T-Mobile
              Changemaker Equity in Action funding, the kind of reach that reads like
              infrastructure, not a semester demo.
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="dc-impact">
          <h2 id="dc-impact" className="caseStudy__sectionTitle">
            KEY IMPACT ↘
          </h2>
          <ul className="caseStudy__list">
            <li>
              <span className="caseStudy__listLead">Full-stack platform</span>
              <span className="caseStudy__listBody">
                Designed, built, and deployed an educational platform reaching over
                22,000 high school students in the William S. Hart School District.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Google Maps API</span>
              <span className="caseStudy__listBody">
                Built a feature displaying 23+ in-person clinics and resource centers
                for trans youth in Los Angeles, improving discoverability and access.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Pronoun Dressing Room (JavaScript)</span>
              <span className="caseStudy__listBody">
                Built an interactive experience in JavaScript so users could explore
                pronoun representation in a safe, personalized virtual environment.
                Front-end logic, state, and UX tied directly to inclusive product goals.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Funding &amp; recognition</span>
              <span className="caseStudy__listBody">
                Secured funding through the T-Mobile Changemaker Challenge for the
                &quot;Equity in Action&quot; category.{" "}
                <a
                  href="https://www.t-mobile.com/news/press/changemaker-challenge-2022-winners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caseStudy__inlineLink"
                >
                  READ PRESS RELEASE ↗
                </a>
              </span>
            </li>
          </ul>
        </section>

        <section className="caseStudy__section" aria-labelledby="dc-tools">
          <h2 id="dc-tools" className="caseStudy__sectionTitle">
            TOOLS &amp; PRACTICES ↘
          </h2>
          <div className="caseStudy__tools">
            <p>
              <span className="caseStudy__toolsLabel">JAVASCRIPT &amp; WEB</span>
              JAVASCRIPT · HTML · CSS · REST APIS · INTERACTIVE UI &amp; STATE
            </p>
            <p>
              <span className="caseStudy__toolsLabel">APIS &amp; SHIPPING</span>
              GOOGLE MAPS API · GIT · GITHUB · AGILE · STAKEHOLDER ENGAGEMENT
            </p>
            <p>
              <span className="caseStudy__toolsLabel">DESIGN</span>
              FIGMA · ADOBE PHOTOSHOP
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="dc-gallery">
          <h2 id="dc-gallery" className="caseStudy__sectionTitle">
            IN THE WORK ↘
          </h2>
          <div className="caseStudy__gallery">
            <figure className="caseStudy__galleryItem caseStudy__galleryItem--dcLogo">
              <img
                src={`${base}/images/Dorothys Calculator.png`}
                alt="Dorothy's Calculator brand and product identity, calculator icon"
              />
            </figure>
            <figure className="caseStudy__galleryItem">
              <img
                src={`${base}/images/DCright.png`}
                alt="Bringing resources to trans youth in Los Angeles, platform preview"
              />
            </figure>
          </div>
        </section>

        <footer className="caseStudy__footer">
          <a
            href="https://www.t-mobile.com/news/press/changemaker-challenge-2022-winners"
            className="caseStudy__cta"
            target="_blank"
            rel="noreferrer noopener"
          >
            CHANGEMAKER CHALLENGE ↗
          </a>
          <a
            href={`${base}/Changemaker-Challenge-2022-Winner-Lookbook.pdf`}
            className="caseStudy__cta caseStudy__cta--muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            2022 WINNER LOOKBOOK (PDF) ↗
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

export default DorothysCalculator;
