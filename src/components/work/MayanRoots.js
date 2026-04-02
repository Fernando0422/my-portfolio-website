import React from "react";
import { Link } from "react-router-dom";
import CaseStudyVanta from "./CaseStudyVanta";
import "./caseStudy.css";
import "./mayanroots.css";

const base = process.env.PUBLIC_URL || "";

const SCU_FEATURE_STORY_URL =
  "https://www.scu.edu/news-and-events/feature-stories/2025-feature-stories/stories/this-new-app-combines-lidar-based-mapping-and-indigenous-agricultural-knowledge-.html";

const MAYANROOTS_THESIS_SCHOLAR_COMMONS_URL =
  "https://scholarcommons.scu.edu/cseng_senior/331/";

const MayanRoots = () => {
  return (
    <article
      className="caseStudy caseStudy--mayanroots"
      aria-label="MayanRoots case study"
    >
      <CaseStudyVanta />
      <div className="caseStudy__shell">
        <Link to="/portfolio" className="caseStudy__back">
          ← BACK
        </Link>

        <header className="caseStudy__hero">
          <p className="caseStudy__eyebrow">
            SANTA CLARA UNIVERSITY · COMPUTER SCIENCE &amp; WEB DESIGN AND
            ENGINEERING
          </p>
          <h1 className="caseStudy__title">MAYANROOTS</h1>
          <p className="caseStudy__subhead caseStudy__subhead--mayanrootsIntro">
            <span className="caseStudy__subheadBody">
              Three languages. Works offline. Built for the people who actually
              needed it—Milpa guidance, weather, and moon timing on budget Android,
              not the phone I test on in San Jose.
            </span>
          </p>
        </header>

        <div className="caseStudy__meta" role="list">
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">CHALLENGE ↘</span>
            <p className="caseStudy__metaValue">
              MILPA KNOWLEDGE IS UNDER PRESSURE WHILE MOST AG TOOLS IGNORE
              YUCATEC MAYA, LOW LITERACY PATTERNS, SPOTTY CONNECTIVITY, AND THE
              HARDWARE PEOPLE ACTUALLY CARRY IN THE FIELD.
            </p>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">FOCUS ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>OFFLINE-FIRST MOBILE (FLUTTER)</li>
              <li>MILPA CYCLE &amp; LUNAR TIMING</li>
              <li>WEATHER &amp; CLIMATE DATA PIPELINE</li>
              <li>TRILINGUAL UI (EN / ES / YUCATEC MAYA)</li>
              <li>CULTURAL &amp; ACADEMIC PARTNERS</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">INDUSTRY ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>AGTECH &amp; FIELD TOOLS</li>
              <li>INDIGENOUS AGRICULTURAL KNOWLEDGE</li>
              <li>YUCATÁN · MILPA SYSTEMS</li>
            </ul>
          </div>
          <div className="caseStudy__metaCol" role="listitem">
            <span className="caseStudy__metaLabel">TIMELINE ↘</span>
            <ul className="caseStudy__metaValue caseStudy__metaStack">
              <li>ACADEMIC YEAR 2024–2025</li>
              <li>JUNE 2025 · SCU SENIOR THESIS</li>
            </ul>
          </div>
        </div>

        <figure
          className="caseStudy__heroMedia caseStudy__heroMedia--browser caseStudy__heroMedia--mayanroots"
          aria-label="MayanRoots in a Yucatán milpa"
        >
          <img
            src={`${base}/images/mayanroots-milpa-fieldwork.png`}
            alt="Two people review the MayanRoots app on a smartphone in a tall green cornfield, a milpa in Yucatán, with a rural building behind them"
            className="caseStudy__heroImg"
          />
          <figcaption className="caseStudy__heroCaption">
            FIELDWORK · YUCATÁN · 2025
          </figcaption>
        </figure>

        <section className="caseStudy__section" aria-labelledby="mr-overview">
          <h2 id="mr-overview" className="caseStudy__sectionTitle">
            OVERVIEW ↘
          </h2>
          <div className="caseStudy__prose caseStudy__prose--mayanrootsOverview">
            <p>
              Agriculture still supports a large share of Yucatán&apos;s workforce,
              but pay and prospects on the land are often not enough to keep young
              people there—many leave for Mérida and Cancún. The milpa knowledge
              behind real planting decisions—rotation, soil health, lunar timing,
              weather—is concentrated among elders who are aging out faster than
              younger farmers are learning it. Most agricultural apps assume Spanish or
              English, reliable connectivity, and a new phone. That is not how rural
              Yucatán actually works day to day. We built against that gap.
            </p>
            <p>
              I grew up partly in Playa del Carmen, Mexico. Years in the water and on reefs
              teach you that ecosystems are fragile: when something breaks, it does
              not repair itself because someone built a slide deck. I did not pick
              this thesis for the flashiest GitHub story. I picked it because it
              served real people in a region I care about, under constraints—offline
              use, inexpensive Android hardware, three languages—that product teams
              too often wave off.
            </p>
            <p>
              MayanRoots is a Flutter and Firebase app. It brings together milpa
              walkthroughs, weather from a Node pipeline (CHIRPS-GEFS, IRI) with
              local caching when service drops, moon phases aligned with how farmers
              already time planting, Google Maps around Tahcabo, and a trilingual
              interface in English, Spanish, and Yucatec Maya. I led product and most
              of the implementation. Our cohort documented what we shipped; the
              product itself keeps moving with following-year students and new teams
              who are extending GIS, field work, and upkeep—work too big for one thesis
              class to finish alone.
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="mr-impact">
          <h2 id="mr-impact" className="caseStudy__sectionTitle">
            KEY IMPACT ↘
          </h2>
          <ul className="caseStudy__list">
            <li>
              <span className="caseStudy__listLead">Product &amp; sprints</span>
              <span className="caseStudy__listBody">
                Ran week-to-week planning, kept scope blunt, and made demos show
                builds—not decks. When we cut, we cut early and said so instead of
                pretending we would catch up later.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Weather &amp; climate</span>
              <span className="caseStudy__listBody">
                Client-side forecasting on a Node.js pipeline from CHIRPS-GEFS and
                IRI data, cached locally so forecasts still read when the
                connection drops—which, in rural Yucatán, is often.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Milpa cycle screens</span>
              <span className="caseStudy__listBody">
                Turned generations of agricultural knowledge into steps you can
                follow on a small screen, with our cultural advisor in the loop so
                we did not flatten something complex into something wrong.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Lunar calendar</span>
              <span className="caseStudy__listBody">
                Moon phases matched to timing farmers already use—not a checkbox
                feature, but how planting decisions actually get made on the
                ground.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Maps</span>
              <span className="caseStudy__listBody">
                Google Maps SDK centered on Tahcabo with permissions handled
                cleanly. Following-year students at SCU picked up the torch after our
                cohort shipped the core product; they are extending mapping,
                maintenance, and field impact. We built the foundation and lit the
                starting fire—keeping it going is their ongoing chapter.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Trilingual UI</span>
              <span className="caseStudy__listBody">
                Full language switching across English, Spanish, and Yucatec Maya
                from the first screen, not bolted on after the fact.
              </span>
            </li>
            <li>
              <span className="caseStudy__listLead">Thesis</span>
              <span className="caseStudy__listBody">
                Co-wrote the academic document—requirements, UML, and ethics.
              </span>
            </li>
          </ul>
        </section>

        <section className="caseStudy__section" aria-labelledby="mr-phone">
          <h2 id="mr-phone" className="caseStudy__sectionTitle">
            ON THE PHONE ↘
          </h2>
          <div className="caseStudy__gallery caseStudy__gallery--mayanrootsPhone">
            <figure className="caseStudy__galleryItem caseStudy__galleryItem--mayanrootsPhone">
              <img
                src={`${base}/images/mayanroots-app-in-field.png`}
                alt="Hands hold a phone in a cornfield showing the MayanRoots home menu in Spanish: Mapas, Ciclos Agrícolas, and Pronóstico y Datos Históricos"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="mr-collab">
          <h2 id="mr-collab" className="caseStudy__sectionTitle">
            THE COLLABORATION ↘
          </h2>
          <div className="caseStudy__prose">
            <p>
              The project ran through SCU&apos;s Frugal Innovation Hub, which helped
              coordinate our collaboration with Dr. Iván Batún (Universidad de
              Oriente). Feature decisions went through him first so Mayan
              agricultural knowledge stayed accurate and treated with respect—not
              vibes from a sprint board. Dr. Maia Dedrick (Yucatán food systems)
              and our SCU faculty advisors rounded out the team.
            </p>
            <p>
              I took on more of the project-management work over time: backlog
              hygiene, sprint planning and demos, and keeping delivery aligned with a
              Scrum-style agile cadence—the same rhythm you would expect on a product
              team. That stretch is where I built project-management muscle I still
              lean on alongside the engineering work.
            </p>
            <p>
              Working through academics instead of running our own field study was
              an honest choice for our timeline and our position as students. Dr.
              Batún kept us from making cultural calls alone. The thesis is clear:
              deeper field validation and long-term stewardship belong to the teams
              that follow—including SCU cohorts still building on MayanRoots—not a box
              we pretend we checked at graduation.
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="mr-tools">
          <h2 id="mr-tools" className="caseStudy__sectionTitle">
            THE STACK ↘
          </h2>
          <div className="caseStudy__tools">
            <p>
              Flutter · Firebase · Node.js · Google Maps SDK · CHIRPS-GEFS · IRI
              NMME · SQLite · Firestore · Cloud Functions · SharedPreferences ·
              Flutter TTS · i18n
            </p>
          </div>
        </section>

        <section className="caseStudy__section" aria-labelledby="mr-matters">
          <h2 id="mr-matters" className="caseStudy__sectionTitle">
            WHY IT MATTERS TO ME ↘
          </h2>
          <div className="caseStudy__prose">
            <p>
              My family has deep roots in Mexico. Time in Playa del Carmen, Mexico is
              not a tourism anecdote for me—it is how I grew up. I have been in that water since I
              was a kid; I have seen what happens when people with tools ignore
              ecosystems and communities that do not sit in their default user
              persona.
            </p>
            <p>
              MayanRoots was an early proof of the line I keep coming back to:
              build for whoever needs the thing most, not whoever already pays for
              the premium tier. Trilingual, offline-first, budget Android, thesis
              rigor, National Geographic and SCU behind the public story, partners
              who actually know the culture—that is the shape of work I want to
              keep doing.
            </p>
          </div>
        </section>

        <footer className="caseStudy__footer">
          <a
            href={MAYANROOTS_THESIS_SCHOLAR_COMMONS_URL}
            className="caseStudy__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW THESIS ON SCHOLAR COMMONS ↗
          </a>
          <a
            href={SCU_FEATURE_STORY_URL}
            className="caseStudy__cta caseStudy__cta--muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ SCU FEATURE STORY ↗
          </a>
          <a
            href="mailto:Fernando.roja0422@gmail.com"
            className="caseStudy__cta caseStudy__cta--muted"
          >
            EMAIL ME ABOUT THIS PROJECT ↗
          </a>
        </footer>
      </div>
    </article>
  );
};

export default MayanRoots;
