import React from "react";
import { Link } from "react-router-dom";

/**
 * Single project column on the Work grid: headline, expandable details, preview image.
 */
const WorkProjectCard = ({
  item,
  idx,
  activeIndex,
  setActiveIndex,
  defaultHoverIndex = null,
}) => {
  const isActive = activeIndex === idx;
  const isDim = activeIndex !== null && activeIndex !== idx;

  return (
    <Link
      to={item.to}
      className={`workPage__card${isActive ? " is-active" : ""}${
        isDim ? " is-dim" : ""
      }`}
      role="listitem"
      onMouseEnter={() => setActiveIndex(idx)}
      onFocus={() => setActiveIndex(idx)}
      onMouseLeave={() => setActiveIndex(defaultHoverIndex)}
      onBlur={() => setActiveIndex(defaultHoverIndex)}
    >
      <div className="workPage__cardHead">
        <span className="workPage__number">{`00-${idx + 1}`}</span>
        <span className="workPage__cardTitle">{item.title}</span>
      </div>
      <span
        className="workPage__cardMeta workPage__cardMeta--collapsed"
        aria-hidden={isActive}
      >
        {item.subtitle}
      </span>
      <div className="workPage__details">
        <span
          className="workPage__cardMeta workPage__cardMeta--expanded"
          aria-hidden={!isActive}
        >
          {item.subtitle}
        </span>
          <div className="workPage__detailBody">
          <div className="workPage__detailList">
            {item.details.map((line) => (
              <span key={line} className="workPage__detailItem">
                <span className="workPage__detailSlash" aria-hidden="true">
                  /
                </span>
                <span className="workPage__detailText">{line}</span>
              </span>
            ))}
          </div>
          <div
            className={`workPage__previewWrap workPage__previewWrap--${item.previewTreat}`}
          >
            <img
              className="workPage__preview"
              src={item.preview}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <p className="workPage__blurb">{item.blurb}</p>
      </div>
    </Link>
  );
};

export default WorkProjectCard;
