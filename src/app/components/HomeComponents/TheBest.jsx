"use client";

import { useState } from "react";

const TheBest = () => {
  const [showFullText, setShowFullText] = useState({});

  const toggleReadMore = (id) => {
    setShowFullText((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="the-best-sec">
      <div className="container">
        <h2 className="main-heading">The Best แทงบอล Website</h2>
        <p>
          The best แทงบอล website offers unique advantages when evaluated
          through bonuses, security, authenticity, and customer support. Bonuses
          provide direct value to players through cashback offers, free credits,
          and seasonal promotions. For example, daily login rewards and referral
          incentives increase engagement and extend playtime without additional
          deposits. Security measures protect personal data and financial
          transactions through encrypted systems and verified payment gateways.
          Platforms that maintain strict protocols reduce risks associated with
          fraud and unauthorized access.
          {!showFullText["1"] && (
            <span className="read-more-btn" onClick={() => toggleReadMore("1")}>
              Read More
            </span>
          )}
          {showFullText["1"] && (
            <>
              <span>
                {" "}
                Additional content for the first card can go here. This is the
                expanded content that shows when Read More is clicked. You can
                add more detailed information about minimum bet football betting
                here.
              </span>
              <span
                className="read-more-btn"
                onClick={() => toggleReadMore("1")}
              >
                Read Less
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default TheBest;
