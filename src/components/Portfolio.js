import React, { useEffect, useState } from "react";
import { workPageColumns } from "../data/workPageColumns";
import { WorkPageHero, WorkProjectCard } from "./work/widgets";
import VantaGlobeBackdrop from "./backgrounds/VantaGlobeBackdrop";
import "./Portfolio.css";

const Portfolio = () => {
  // Default expanded panel (matches the reference screenshot's 3rd column).
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    document.documentElement.classList.add("work-page");
    return () => document.documentElement.classList.remove("work-page");
  }, []);

  return (
    <section className="workPage" aria-label="Portfolio">
      <VantaGlobeBackdrop />
      <WorkPageHero indexLabel="SELECT WORK" />

      <div className="workPage__grid" role="list" aria-label="Selected work">
        {workPageColumns.map((item, idx) => (
          <WorkProjectCard
            key={item.to}
            item={item}
            idx={idx}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            defaultHoverIndex={null}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
