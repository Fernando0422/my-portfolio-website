import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./Portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const scrollContainerRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {});
    let locomotiveScroll;
    let scrollTimeout;

    const initScrollTrigger = () => {
      if (!scrollContainerRef.current) return;

      // Kill any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());

      // Initialize Locomotive Scroll
      locomotiveScroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        direction: "vertical",
        lerp: 0.05,
        multiplier: 0.7,
        getSpeed: true,
        getDirection: true,
        inertia: 0.6,
      });

      locomotiveScrollRef.current = locomotiveScroll;

      // Update ScrollTrigger whenever the scroll updates
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.on('scroll', () => {
          ScrollTrigger.update();
        });
      }

      // Set up ScrollTrigger proxy
      ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
        scrollTop(value) {
          if (locomotiveScrollRef.current) {
            return arguments.length
              ? locomotiveScrollRef.current.scrollTo(value, 0, 0)
              : locomotiveScrollRef.current.scroll.y;
          }
          return null;
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

      // Create GSAP animation for the portfolio banner
      gsap.to(".portfolio-page-text", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".portfolio-page-banner",
          scroller: scrollContainerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    };

    scrollTimeout = setTimeout(initScrollTrigger, 500);

    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      if (ctx) {
        ctx.revert();
      }

      ScrollTrigger.getAll().forEach(st => st.kill());

      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }

      locomotiveScrollRef.current = null;
      locomotiveScroll = null;

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    };
  }, []);

  return (
    <div className="portfolio-page-container" data-scroll-container ref={scrollContainerRef}>
      <div className="portfolio-page-banner">
        <span className="portfolio-page-text" data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">
          PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ 
          PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ 
          PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓ PORTFOLIO ↓
        </span>
      </div>

      {/* Project Rectangles */}
      <div className="portfolio-page-rounded-rectangles">
        <Link to="/lamer" className="portfolio-page-rectangle-link">
          <div className="portfolio-page-rectangle portfolio-page-left-rectangle">
            <img
              src={`${process.env.PUBLIC_URL}/images/lamer.png`}
              alt="La Mer"
              className="portfolio-page-rectangle-image"
            />
            <div className="portfolio-page-company-name">LA MER</div>
            <div className="portfolio-page-blurb">Crafting luxury in the digital space.</div>
          </div>
        </Link>

        <Link to="/cah" className="portfolio-page-rectangle-link">
          <div className="portfolio-page-rectangle portfolio-page-right-rectangle">
            <img 
              src={`${process.env.PUBLIC_URL}/images/cah.png`} 
              alt="CAH" 
              className="portfolio-page-rectangle-image" 
            />
            <div className="portfolio-page-company-name">CAH</div>
            <div className="portfolio-page-blurb">Bridging art and digital innovation.</div>
          </div>
        </Link>
      </div>

      {/* Additional Project Rectangles */}
      <div className="portfolio-page-rounded-rectangles">
        <Link to="/snapchat" className="portfolio-page-rectangle-link">
          <div className="portfolio-page-rectangle portfolio-page-left-rectangle">
            <img
              src={`${process.env.PUBLIC_URL}/images/snapchat.jpg`}
              alt="Snapchat"
              className="portfolio-page-rectangle-image"
            />
            <div className="portfolio-page-company-name">SNAPCHAT</div>
            <div className="portfolio-page-blurb">Pioneering the future of AR experiences.</div>
          </div>
        </Link>
        
        <Link to="/dorothys-calculator" className="portfolio-page-rectangle-link">
          <div className="portfolio-page-rectangle portfolio-page-right-rectangle">
            <img
              src={`${process.env.PUBLIC_URL}/images/Dorothys Calculator.png`}
              alt="Dorothy's Calculator"
              className="portfolio-page-rectangle-image"
            />
            <div className="portfolio-page-company-name">DOROTHY'S CALCULATOR</div>
            <div className="portfolio-page-blurb">Empowering students through tech-driven tools.</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
