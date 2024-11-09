import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Lamer from './components/work/lamer';
import CAH from './components/work/CAH';
import Snapchat from './components/work/Snapchat';
import DorothysCalculator from './components/work/DorothysCalculator';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedRoutes = () => {
  const location = useLocation();

  const cleanupScrollTriggers = () => {
    const triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => trigger.kill());

    const scrollElements = document.querySelectorAll('[data-scroll-container]');
    scrollElements.forEach(element => {
      const locomotiveScroll = element._locomotive;
      if (locomotiveScroll) {
        window.removeEventListener('resize', locomotiveScroll.update);
        locomotiveScroll.destroy();
      }
    });

    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh(true);
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        cleanupScrollTriggers();
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/lamer" element={<Lamer />} />
        <Route path="/cah" element={<CAH />} />
        <Route path="/snapchat" element={<Snapchat />} />
        <Route path="/dorothys-calculator" element={<DorothysCalculator />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  React.useEffect(() => {
    return () => {
      const cleanup = () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
        ScrollTrigger.clearScrollMemory();
        ScrollTrigger.refresh(true);
      };
      cleanup();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
