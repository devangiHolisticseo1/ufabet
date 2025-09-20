"use client";

import { useState } from "react";

const TheBest = () => {
    const [showFullText, setShowFullText] = useState(false);
    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="the-best-sec">
            <div className="container">
                <h2 className="main-heading">The Best แทงบอล Website</h2>
                <p>
                    The best แทงบอล website offers unique advantages when evaluated
                    through bonuses, security, authenticity, and customer support.
                    Bonuses provide direct value to players through cashback offers,
                    free credits, and seasonal promotions. For example, daily login
                    rewards and referral incentives increase engagement and extend
                    playtime without additional deposits. Security measures protect
                    personal data and financial transactions through encrypted systems
                    and verified payment gateways. Platforms that maintain strict
                    protocols reduce risks associated with fraud and unauthorized
                    access.
                    {!showFullText && (
                        <span className="read-more-btn" onClick={toggleReadMore}>
                            Read More
                        </span>
                    )}
                </p>
            </div>
        </div>
    )
};

export default TheBest;