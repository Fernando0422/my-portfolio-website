import React from "react";

/**
 * Hero band for the portfolio page.
 * Optional indexLabel (e.g. "5 PROJECTS") — pass null to hide the right label.
 */
const WorkPageHero = ({ title = "PORTFOLIO", indexLabel = null }) => (
  <header className="workPage__hero">
    <h1 className="workPage__title">{title}</h1>
    {indexLabel ? (
      <span className="workPage__index">{indexLabel}</span>
    ) : null}
  </header>
);

export default WorkPageHero;
