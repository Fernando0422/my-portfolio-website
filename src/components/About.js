import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VantaGlobeBackdrop from "./backgrounds/VantaGlobeBackdrop";
import { WorkPageHero } from "./work/widgets";
import "./Portfolio.css";
import "./About.css";

const education = [
  {
    dates: "September 2025 – Present",
    degree:
      "Master of Liberal Arts, Computer Science (In Progress)",
    school: "Harvard University, Extension School",
    location: "Boston, MA",
  },
  {
    dates: "September 2022 – June 2025",
    degree: "BS, Web Design and Engineering",
    school: "Santa Clara University",
    location: "Santa Clara, CA",
  },
  {
    dates: "June 2023 – August 2023",
    degree: "Summer Session",
    school: "Stanford University",
    location: "Palo Alto, CA",
  },
  {
    dates: "August 2018 – May 2022",
    degree: "AA, Marketing",
    school: "College of the Canyons",
    location: "Santa Clarita, CA",
  },
];

const skillGroups = [
  {
    title: "Programming & Data",
    body: "Python, Java, C, C++, JavaScript, TypeScript, Swift",
  },
  {
    title: "Web & Systems",
    body: "React, Node.js, Flask, RESTful APIs, CMS (Phenom, Radancy, WordPress)",
  },
  {
    title: "Analytics & Optimization",
    body: "Adobe Analytics, performance metrics, data-driven optimization",
  },
  {
    title: "Tools & Platforms",
    body: "Heroku, Jira, Asana, Notion, Figma, Adobe Creative Suite",
  },
  {
    title: "Languages",
    body: "Spanish (Native), English (Native)",
  },
];

const experiences = [
  {
    year: "April 2026 – Present",
    role: "Digital Marketing Coordinator, Talent Acquisition Marketing",
    org: "The Walt Disney Company",
    blurb:
      "Previously Marketing and Digital Media Intern (June 2025–April 2026). Now running enterprise-scale career site platforms across Radancy and Phenom—platform sustainment, UX improvements, content systems, and AI-enabled candidate experience work across global business units.",
    tags: [
      "Digital Marketing",
      "Employer Brand",
      "Content Systems",
      "Phenom",
      "Radancy",
      "UX",
      "AI",
      "Analytics",
    ],
  },
  {
    year: "2024",
    role: "Online & E-commerce Intern",
    org: "La Mer, The Estée Lauder Companies",
    blurb:
      "Ran luxury e-commerce operations through digital merchandising, content updates, and cross-functional work across UX, engineering, and marketing.",
    tags: [
      "E-commerce",
      "Digital Merchandising",
      "Brand Content",
      "UX",
      "Luxury Retail",
    ],
  },
  {
    year: "2023 - 2025",
    role: "Web Developer",
    org: "Santa Clara University Center for Arts & Humanities",
    blurb:
      "Built and maintained institutional web properties, improving usability and accessibility while shipping content and UX updates across public-facing platforms.",
    tags: [
      "Frontend Development",
      "Accessibility",
      "UX",
      "Web Design",
      "Performance",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Project Manager & Frontend Developer",
    org: "MayanRoots",
    blurb:
      "Led product planning and frontend execution for a trilingual offline-first mobile app preserving Mayan agricultural knowledge in Yucatán. Built in Flutter, backed by Firebase, developed in collaboration with Universidad de Oriente and backed by the National Geographic Society.",
    tags: [
      "Flutter",
      "Firebase",
      "Google Maps SDK",
      "Project Management",
      "Mobile",
      "API Integration",
      "GIS",
    ],
  },
  {
    year: "2023 - 2025",
    role: "Latinos in Technology Scholar",
    org: "Silicon Valley Community Foundation",
    blurb:
      "Recognized for academic achievement and leadership potential across technical and creative disciplines.",
    tags: [],
  },
  {
    year: "2023",
    role: "Computer Science Student",
    org: "Stanford Summer Session",
    blurb:
      "Intensive coursework in computer science fundamentals, data structures, and public speaking.",
    tags: [],
  },
  {
    year: "2022",
    role: "Full-Stack Builder",
    org: "Dorothy's Calculator",
    blurb:
      "Built a mission-driven student tool recognized through the T-Mobile Changemaker Challenge, reaching over 22,000 students in the William S. Hart School District.",
    tags: [
      "JavaScript",
      "Full-Stack",
      "Product Thinking",
      "Social Impact",
    ],
  },
  {
    year: "2022",
    role: "Snap Lens Academy Scholar",
    org: "Snapchat",
    blurb:
      "Nationwide Snap Lens Academy cohort (remote): built 10+ augmented reality experiences using Lens Studio, Blender, and JavaScript, with combined reach over one million views. Snap Philanthropy later chose me from Snap Academies alumni for a full-ride Stanford Summer Session scholarship.",
    tags: [
      "AR",
      "Lens Studio",
      "JavaScript",
      "Blender",
      "Adobe Creative Suite",
    ],
  },
];

function About() {
  useEffect(() => {
    document.documentElement.classList.add("about-page");
    return () => document.documentElement.classList.remove("about-page");
  }, []);

  useEffect(() => {
    const el = document.documentElement;

    const updateGlass = () => {
      // After the hero intro region is passed, switch main copy onto glass for readability.
      const next = window.scrollY > 260;
      el.classList.toggle("about-scrolled", next);
    };

    updateGlass();
    window.addEventListener("scroll", updateGlass, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateGlass);
      el.classList.remove("about-scrolled");
    };
  }, []);

  return (
    <section className="workPage aboutPage" aria-label="About Fernando Rojas">
      <VantaGlobeBackdrop />
      <WorkPageHero title="ABOUT" indexLabel={null} />

      <div className="aboutPage__main">
        <header className="about__intro" aria-label="About intro">
          <div className="about__introRow">
            <div className="about__introPhoto">
              <img
                src={`${process.env.PUBLIC_URL}/images/about-fernando-image.png`}
                alt="Professional headshot of Fernando Rojas wearing a dark blazer and smiling"
                className="about__introPhotoImg"
                width={640}
                height={640}
              />
            </div>
            <div className="about__introMeta">
              <p className="about__introName">FERNANDO ROJAS</p>
              <h2 className="about__introTitle">Designer, Engineer &amp; Founder</h2>
              <p className="about__introBio">
                I work end to end across design, engineering, and product—from enterprise
                career platforms and luxury e-commerce to higher-ed web and mission-driven
                tools, with accessibility and real users in the loop the whole way.
              </p>
            </div>
          </div>
          <p className="about__introLead">
            I&apos;m especially drawn to work where physical space, digital systems, and
            community overlap. Everything below is how I got here—education, skills, and
            the roles that shaped me.{" "}
            <a
              className="about__heroLink"
              href="mailto:fernando.rojas0422@gmail.com"
            >
              <em>Get in touch.</em>
            </a>
          </p>
        </header>

        <section
          className="about__section about__section--education"
          aria-labelledby="about-education"
        >
          <div className="about__sectionHead">
            <h2 className="about__sectionH2" id="about-education">
              EDUCATION ↘
            </h2>
          </div>
          <div className="about__educationList">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.dates}`}
                className="about__eduCard"
              >
                <span className="about__eduDates">{item.dates}</span>
                <div className="about__eduMain">
                  <h3 className="about__eduDegree">{item.degree}</h3>
                  <p className="about__eduSchool">{item.school}</p>
                  <p className="about__eduLocation">{item.location}</p>
                  {item.detail ? <p className="about__eduDetail">{item.detail}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about__section about__section--skills" aria-labelledby="about-skills">
          <div className="about__sectionHead">
            <h2 className="about__sectionH2" id="about-skills">
              SKILLS ↘
            </h2>
          </div>
          <div className="about__skillsList">
            {skillGroups.map((group) => (
              <div className="about__skillGroup" key={group.title}>
                <h3 className="about__skillTitle">{group.title}</h3>
                <p className="about__skillBody">{group.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="about__section about__section--career"
          aria-labelledby="about-background"
        >
          <div className="about__sectionHead">
            <h2 className="about__sectionH2" id="about-background">
              BACKGROUND ↘
            </h2>
          </div>

          <div className="about__timelineModern">
            {experiences.map((item) => (
              <article
                key={`${item.year}-${item.role}-${item.org}`}
                className="about__timelineCard"
              >
                <div className="about__timelineCol about__timelineCol--year">
                  <span className="about__timelineYearNatural">{item.year}</span>
                </div>

                <div className="about__timelineCol about__timelineCol--main">
                  <h3 className="about__timelineRoleNatural">{item.role}</h3>
                  <p className="about__timelineOrgNatural">{item.org}</p>
                </div>

                <div className="about__timelineCol about__timelineCol--detail">
                  <p className="about__timelineBlurbNatural">{item.blurb}</p>

                  {item.tags.length > 0 ? (
                    <div
                      className="about__timelineTags about__timelineTags--natural"
                    >
                      {item.tags.map((tag) => (
                        <span className="about__timelineTagNatural" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer id="about-contact" className="about__brutalistFooter">
          <div className="about__footerContact">
            <h2 className="about__footerContactTitle">GET IN TOUCH</h2>
            <p className="about__footerContactBody">
              If you&apos;re building something real and want to talk, I&apos;m here.
              I&apos;m particularly interested in conversations about real estate
              technology, product systems, and anything that reaches communities tech
              usually ignores. The best way to reach me is email.
            </p>
          </div>
          <div className="about__footerActions">
            <Link to="/portfolio" className="about__footerLink">
              [ VIEW ALL WORK ]
            </Link>
            <a
              href="mailto:Fernando.rojas0422@gmail.com"
              className="about__footerLink about__footerLink--cta"
            >
              CONTACT ME ↗
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default About;
