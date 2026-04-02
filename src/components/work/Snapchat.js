import React from "react";
import { Link } from "react-router-dom";
import CaseStudyVanta from "./CaseStudyVanta";
import "./caseStudy.css";
import "./Snapchat.css";

const base = process.env.PUBLIC_URL || "";

const Snapchat = () => {
  return (
    <article
      className="caseStudy caseStudy--snapchat"
      aria-label="Snap Inc. case study"
    >
      <CaseStudyVanta />
      <div className="caseStudy__shell">
        <Link to="/portfolio" className="caseStudy__back">
          ← BACK
        </Link>

        <header className="caseStudy__hero">
          <p className="caseStudy__eyebrow">
            SNAP INC. · REMOTE
          </p>
          <h1 className="caseStudy__title">LENS ACADEMY SCHOLAR</h1>
          <p className="caseStudy__subhead caseStudy__subhead--snapIntro">
            <span className="caseStudy__subheadBody">
              Competitive nationwide Snap Lens Academy scholar (remote): JavaScript-driven
              lenses in Lens Studio with AR at millions of plays, then chosen from Snap
              Academies alumni across cohorts for a Snap Philanthropy full ride to Stanford
              Summer Session.
            </span>
          </p>
        </header>

        <div className="caseStudy__meta" role="list">
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">CHALLENGE ↘</span>
            <p className="caseStudy__metaValue">
              DESIGN AND SHIP POLISHED LENSES FAST: 3D, MOTION, JAVASCRIPT / LENS
              STUDIO SCRIPTING, AND PUBLICATION, WHILE LEADING A SMALL TEAM TO
              DEADLINE.
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">FOCUS ↘</span>
            <p className="caseStudy__metaValue">
              JAVASCRIPT (LENS STUDIO SCRIPTS &amp; INTERACTIVITY) · LENS STUDIO ·
              BLENDER · PHOTOSHOP · AFTER EFFECTS · TEAM WORKFLOW · PERFORMANCE &amp;
              PUBLISHING
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">INDUSTRY ↘</span>
            <p className="caseStudy__metaValue">
              SOCIAL AR · CREATIVE TECH · MOBILE · CAMERA EXPERIENCES
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">TIMELINE ↘</span>
            <p className="caseStudy__metaValue">
              JUNE 2022 – AUGUST 2022 · SNAP LENS ACADEMY SCHOLAR
              <br />
              SUMMER 2023 · STANFORD SUMMER SESSION (SNAP PHILANTHROPY FULL RIDE)
            </p>
          </div>
        </div>

        <figure className="caseStudy__heroMedia caseStudy__heroMedia--browser caseStudy__heroMedia--snapchat">
          <img
            src={`${base}/images/snapchathero.jpg`}
            alt="Snap Lens Academy hero creative, Snapchat ghost and AR branding"
            className="caseStudy__heroImg"
          />
        </figure>

        <section className="caseStudy__section" aria-labelledby="snap-overview">
          <h2 id="snap-overview" className="caseStudy__sectionTitle">
            OVERVIEW ↘
          </h2>
          <div className="caseStudy__prose caseStudy__prose--snapOverview">
            <p>
              Snap Academies do not hand out seats for show. In 2022 Design, Engineering,
              and Storytelling were mostly pulling from Southern California; Lens Academy
              recruited nationwide, so the applicant pool was wider and the bar felt real. I
              worked remotely as a Scholar and shipped actual lenses on Snapchat, Lens Studio
              and JavaScript for behaviors and logic, not pretty static scenes. The expectation
              was the same as it sounds: move fast, keep the craft high, and build AR that
              could hold up in front of a global audience.
            </p>
            <p>
              A year later Snap Philanthropy chose three people from across Snap Academies
              alumni for full rides to Stanford Summer Session, and I was one of them.
              Tuition for eight summer units, housing, and a stipend were covered. I studied
              in Palo Alto in CS 106B Programming Abstractions and ORALCOMM 118 Public
              Speaking: Romancing the Room.
            </p>
            <p>
              I did not treat that summer like a logo on a resume. CS 106B gave me rigor I
              had not pulled out of hobby projects: structure, tight reasoning, and saying
              plainly what my programs do. Romancing the Room was standing in front of people
              until an idea lands, not hiding behind a deck. Living beside majors that had
              nothing to do with mine gave me language I still use when I translate technical
              work for anyone who does not live in code. One toolkit now: engineering when
              I build and ship, and voice when a meeting, a deck, or an email has to carry
              weight.
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="snap-impact">
          <h2 id="snap-impact" className="caseStudy__sectionTitle">
            KEY IMPACT ↘
          </h2>
          <ul className="caseStudy__list">
            <li>
              <span className="caseStudy__listLead">Production &amp; reach</span>
              <span className="caseStudy__listBody">
                Built 10+ AR experiences using Blender, Lens Studio, Photoshop, After
                Effects, and JavaScript within five weeks, reaching 1.1 million total
                views.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Team &amp; delivery</span>
              <span className="caseStudy__listBody">
                Led a team of three in the lens creation development cycle, ensuring
                timely delivery of assets and meeting project deadlines.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Stanford Summer Session</span>
              <span className="caseStudy__listBody">
                Chosen from Snap Academies alumni across cohorts for a Snap Philanthropy
                full ride: tuition, housing, and a stipend. CS 106B and Romancing the Room
                on campus with two other people in our cohort. Still carry the rigor: sharper
                engineering habits from a university CS classroom and public speaking I use
                whenever a room or a stakeholder needs the idea to land.
              </span>
            </li>
          </ul>
        </section>

        <section className="caseStudy__section" aria-labelledby="snap-tools">
          <h2 id="snap-tools" className="caseStudy__sectionTitle">
            TOOLS &amp; PRACTICES ↘
          </h2>
          <div className="caseStudy__tools">
            <p>
              <span className="caseStudy__toolsLabel">JAVASCRIPT &amp; LENS STUDIO</span>
              JAVASCRIPT FOR LENS LOGIC, EVENTS, AND INTERACTIVITY · LENS STUDIO
              (BUILD, PREVIEW, PUBLISH)
            </p>
            <p>
              <span className="caseStudy__toolsLabel">CREATIVE &amp; 3D</span>
              BLENDER · PHOTOSHOP · AFTER EFFECTS
            </p>
            <p>
              <span className="caseStudy__toolsLabel">WAYS OF WORKING</span>
              SLACK · GOOGLE WORKSPACE · AGILE · USER TESTING · PERFORMANCE OPTIMIZATION
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="snap-gallery">
          <h2 id="snap-gallery" className="caseStudy__sectionTitle">
            IN THE WORK ↘
          </h2>
          <div className="caseStudy__gallery caseStudy__gallery--snapPhone">
            <figure className="caseStudy__galleryItem caseStudy__galleryItem--snapPoster">
              <img
                src={`${base}/images/snap-lens-academy-2022-sla.png`}
                alt="Snap Lens Academy 2022 cohort, presented by Snap Philanthropy and Next Shift Learning"
              />
            </figure>
            <figure className="caseStudy__galleryItem caseStudy__galleryItem--snapVideo">
              <div className="snapPhoneFrame">
                <div className="snapPhoneFrame__device">
                  <div className="snapPhoneFrame__notch" aria-hidden="true" />
                  <div className="snapPhoneFrame__screenWrap">
                    <video
                      src={`${base}/images/snap1.mp4`}
                      className="snapPhoneFrame__video"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <p className="caseStudy__snapAcademiesCallout">
            <a
              href="https://www.snapacademies.com/about"
              className="caseStudy__snapAcademiesLink"
              target="_blank"
              rel="noreferrer noopener"
            >
              Learn more about Snap Lens Academies ↗
            </a>
          </p>
        </section>

        <footer className="caseStudy__footer">
          <a
            href="https://ar.snap.com/lens-studio"
            className="caseStudy__cta"
            target="_blank"
            rel="noreferrer noopener"
          >
            EXPLORE LENS STUDIO ↗
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

export default Snapchat;
