"use client";

import { useState } from "react";
import GradientCollapse from "./GradientCollapse";

const descriptionContent = () => {
    return (
        <div className="theme-ul-wrapper">
            <p className="ul-caption">
                Our deposit conditions are designed for your convenience:
            </p>
            <ul className="theme-ul">
                <li><strong>Instant Processing</strong> : Deposits are processed instantly, so you can start betting without delay.</li>
                <li><strong>Multiple Payment Gateways</strong> : We support various payment methods including bank transfers, e-wallets, and QR payments.</li>
                <li><strong>No Hidden Fees</strong> : We believe in transparency; there are no hidden fees on deposits.</li>
                <li><strong>24/7 Support</strong> : Our customer service is available around the clock to assist with any deposit-related queries</li>
            </ul>
        </div>
    )
}

const dataSource = [
    {
        title: "What are the Deposit Conditions for แทงบอล?",
        description: descriptionContent()
    },
    {
        title: "Regulatory Compliance",
        description: descriptionContent()
    },
    {
        title: "Accurate Odds",
        description: descriptionContent()
    },
    {
        title: "Sports Betting Focus",
        description: descriptionContent()
    }
];

const FootballBetting = () => {
    const [showFullText, setShowFullText] = useState(false);
    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    };
    return (
        <div className="football-betting">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="football-betting-card">
                            <h3>Football Betting Website with A Minimum Bet of 10 Baht</h3>
                            <p>
                                A football betting website with a minimum bet of 10 baht allows access to wager without requiring a large financial commitment. The ability to test predictions with minimal risk. Broader participation among casual bettors who prefer smaller stakes. Flexibility in managing multiple bets across different matches. Football betting websites provide options for low-stake betting across various football leagues. Each platform offers structured odds, match listings, and betting categories that support informed decisions without requiring high investment.
                                {!showFullText && (
                                    <span className="read-more-btn" onClick={toggleReadMore}>
                                        Read More
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="football-betting-card">
                            <h3>Football Betting Website with No Minimum Deposit or Withdrawal</h3>
                            <p>A football betting website with no minimum deposit or withdrawal allows users to engage in wagering without strict financial entry barriers. Freedom to start betting with any amount, which supports flexible budgeting. The ability to withdraw winnings without meeting a fixe</p>
                            {!showFullText && (
                                <span className="read-more-btn" onClick={toggleReadMore}>
                                    Read More
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12 mt-65">
                        <GradientCollapse dataSource={dataSource} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FootballBetting;