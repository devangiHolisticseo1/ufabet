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
        </p>
        {showFullText["1"] && (
          <>
            <p>
              {" "}
              Authenticity plays a vital role in building trust, with licensed
              operations and transparent odds contributing to fair gameplay.
              Verified providers display clear terms, consistent payout
              structures, and regulated betting environments. Customer support
              ensures smooth resolution of issues through live chat, hotline
              services, and multilingual assistance. Fast response times and
              knowledgeable staff improve user satisfaction and reduce downtime
              during technical or account-related concerns. Each of the elements
              contributes to a stable, rewarding, and trustworthy betting
              experience.
              <span
                className="read-more-btn"
                onClick={() => toggleReadMore("1")}
              >
                Read Less
              </span>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default TheBest;
