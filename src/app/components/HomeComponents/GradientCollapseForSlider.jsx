"use client";

import { useEffect, useRef, useState } from "react";

const GradientCollapseForSlider = ({ dataSource, activeTab }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // Reset any open collapse when parent tab changes
  useEffect(() => {
    setOpenIndex(null);
  }, [activeTab]);

  const toggleCollapse = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="gradient-collapse">
      {dataSource.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="collapse-wrap" key={index}>
            <button
              className="collapse-header"
              onClick={() => toggleCollapse(index)}
            >
              <span className="collapse-index">{index + 1}.</span>
              {item.title}
              <span className={`arrow ${isOpen ? "open" : ""}`}>▾</span>
            </button>
            <div
              className="collapse-content"
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                height: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              }}
            >
              <div className="collapse-inner">{item.description}</div>
              {item.innerItem && (
                <ol className="golden-list">
                  {item.innerItem.map((inner, innerIndex) => (
                    <li key={innerIndex}>
                      <span className="index">
                        {innerIndex + 1}.&nbsp;&nbsp;
                      </span>
                      <strong className="golden-text">{inner.title} :</strong>{" "}
                      {inner.description}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GradientCollapseForSlider;
