import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Lamer from "./components/work/lamer";
import CAH from "./components/work/CAH";
import Snapchat from "./components/work/Snapchat";
import DorothysCalculator from "./components/work/DorothysCalculator";
import Disney from "./components/work/Disney";
import MayanRoots from "./components/work/MayanRoots";
// Portfolio assistant (OpenAI) — kept local only; not published. Re-enable import + JSX when wired to a hosted API.
// import PortfolioAssistant from "./components/PortfolioAssistant";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function AnimatedRoutes() {
  const location = useLocation();

  const cleanupScrollTriggers = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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

        <Route path="/work/disney" element={<Disney />} />
        <Route path="/work/lamer" element={<Lamer />} />
        <Route path="/cah" element={<CAH />} />
        <Route path="/snapchat" element={<Snapchat />} />
        <Route path="/dorothys-calculator" element={<DorothysCalculator />} />
        <Route path="/work/mayanroots" element={<MayanRoots />} />
        <Route path="/mayanroots" element={<MayanRoots />} />

        <Route path="/disney" element={<Navigate to="/work/disney" replace />} />
        <Route path="/lamer" element={<Navigate to="/work/lamer" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  React.useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        {/* <PortfolioAssistant /> */}
      </div>
    </Router>
  );
}

export default App;