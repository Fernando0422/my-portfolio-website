import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollContainerRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    const initScrollTrigger = () => {
      if (!scrollContainerRef.current) return;

      // Kill any existing ScrollTriggers to avoid duplicates
      ScrollTrigger.getAll().forEach((st) => st.kill());

      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        direction: "vertical",
      });

      locomotiveScrollRef.current.on("scroll", () => {
        ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locomotiveScrollRef.current.scrollTo(value, 0, 0)
            : locomotiveScrollRef.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollContainerRef.current.style.transform ? "transform" : "fixed",
      });

      gsap.to(".work-text", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".work-banner",
          scroller: scrollContainerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });

      ScrollTrigger.refresh();
    };

    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
        ScrollTrigger.refresh();
      } else {
        initScrollTrigger();
      }
    };

    initScrollTrigger();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="about-page-container" data-scroll-container ref={scrollContainerRef}>
      <div className="about-page-banner">
        <span className="about-page-text">ABOUT FERNANDO</span>
      </div>
      <div className="content-layout">
        <div className="about-content">
          <p>
            FERNANDO BRINGS A UNIQUE BLEND OF TECHNICAL SKILL AND CREATIVE INSIGHT
            TO DIGITAL DESIGN. WITH A BACKGROUND IN WEB ENGINEERING AND EXPERIENCE
            FROM SANTA CLARA UNIVERSITY TO INDUSTRY ROLES, HE CRAFTS ENGAGING USER
            EXPERIENCES THAT MERGE INNOVATION WITH PRACTICAL DESIGN. FERNANDO'S
            WORK REIMAGINES DIGITAL INTERACTION, ENHANCING ACCESSIBILITY AND IMPACT.
          </p>
        </div>

        <div className="image-and-text">
          <div className="photo-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/Headshot.png`}
              alt="Fernando Rojas"
              className="headshot"
            />
          </div>
          <div className="additional-content">
            <p>
              FERNANDO'S CORE DRIVE LIES IN CRAFTING INTERACTIVE AND INCLUSIVE DIGITAL EXPERIENCES.
              WITH A STRONG FOUNDATION IN WEB ENGINEERING AND DESIGN, HE MERGES TECHNICAL PRECISION
              WITH CREATIVE VISION, FOCUSING ON ENHANCING ACCESSIBILITY AND ENGAGEMENT. HIS PROJECTS
              STRIVE TO BRIDGE THE GAP BETWEEN FUNCTIONALITY AND AESTHETICS, BRINGING USERS CLOSER
              TO INTUITIVE, IMPACTFUL DESIGN.
            </p>
          </div>
        </div>
      </div>

      <div className="awards-section">
        <h2 className="awards-title">EXPERIENCE & RECOGNITIONS</h2>
        <div className="awards-list">
          <div className="award-item">
            <span className="award-year">2024</span>
            <span className="award-title">Online & E-commerce Intern</span>
            <span className="award-organization">La Mer, Estee Lauder Companies</span>
          </div>
          <div className="award-item">
            <span className="award-year">2023-25</span>
            <span className="award-title">Latino's in Technology Scholar</span>
            <span className="award-organization">Silicon Valley Community Foundation</span>
          </div>
          <div className="award-item">
            <span className="award-year">2023</span>
            <span className="award-title">Frontend Developer</span>
            <span className="award-organization">Santa Clara University</span>
          </div>
          <div className="award-item">
            <span className="award-year">2023</span>
            <span className="award-title">Stanford University - Computer Science</span>
            <span className="award-organization">Stanford Summer Session</span>
          </div>
          <div className="award-item">
            <span className="award-year">2022</span>
            <span className="award-title">Full-stack Developer</span>
            <span className="award-organization">Dorothy's Calculator (Recipient of T-Mobile Changemaker Challenge)</span>
          </div>
          <div className="award-item">
            <span className="award-year">2022</span>
            <span className="award-title">Snap Lens Academy</span>
            <span className="award-organization">Snapchat Inc.</span>
          </div>
        </div>
      </div>

      <div className="work-banner">
        <span className="work-text" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">
          WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓ WORK ↓
        </span>
      </div>

      <div className="work-page-rounded-rectangles">
        <Link to="/lamer" className="work-page-rectangle-link">
          <div className="work-page-rectangle">
            <img
              src={`${process.env.PUBLIC_URL}/images/lamer.png`}
              alt="La Mer"
              className="work-page-rectangle-image"
            />
            <div className="work-page-company-name">LA MER</div>
            <div className="work-page-blurb">Crafting luxury in the digital space.</div>
          </div>
        </Link>

        <Link to="/cah" className="work-page-rectangle-link">
          <div className="work-page-rectangle">
            <img
              src={`${process.env.PUBLIC_URL}/images/cah.png`}
              alt="CAH"
              className="work-page-rectangle-image"
            />
            <div className="work-page-company-name">CAH</div>
            <div className="work-page-blurb">Bridging art and digital innovation.</div>
          </div>
        </Link>
      </div>

      <div className="work-page-rounded-rectangles">
        <Link to="/snapchat" className="work-page-rectangle-link">
          <div className="work-page-rectangle">
            <img
              src={`${process.env.PUBLIC_URL}/images/snapchat.jpg`}
              alt="Snapchat"
              className="work-page-rectangle-image"
            />
            <div className="work-page-company-name">SNAPCHAT</div>
            <div className="work-page-blurb">Pioneering the future of AR experiences.</div>
          </div> 
        </Link>

        <Link to="/dorothys-calculator" className="work-page-rectangle-link">
          <div className="work-page-rectangle">
            <img
              src={`${process.env.PUBLIC_URL}/images/Dorothys Calculator.png`}
              alt="Dorothy's Calculator"
              className="work-page-rectangle-image"
            />
            <div className="work-page-company-name">DOROTHY'S CALCULATOR</div>
            <div className="work-page-blurb">Empowering students through tech-driven tools.</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
