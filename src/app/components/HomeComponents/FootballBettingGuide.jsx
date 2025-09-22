"use client";
import React, { useState } from "react";
const FootballBettingGuide = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className="bet-on-football">
      <div className="container">
        <div className="accordion" id="accordionExample">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <div className="accordion-header" id="headingOne">
              <button
                className={`bet-on-football-btn accordion-button ${
                  openAccordion === 1 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion(1)}
                aria-expanded={openAccordion === 1}
                aria-controls="collapseOne"
              >
                How to bet on football?
                {/* <i className={`bi ${openAccordion === 1 ? "bi-dash" : "bi-plus"}`}></i> */}
              </button>
            </div>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse ${
                openAccordion === 1 ? "show" : ""
              }`}
              aria-labelledby="headingOne"
            >
              <div className="accordion-body">
                <ol>
                  <li>
                    <strong>Choose a Trusted Bookmaker / Direct Website</strong>
                    <p>
                      Start by selecting a reliable and licensed platform such
                      as UFABET or SBOBET. Always go for the official or direct
                      website instead of third-party agents to ensure:
                    </p>
                    <ul>
                      <li>Secure transactions</li>
                      <li>Fair play and transparent odds</li>
                      <li>Quick withdrawals without hidden fees</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Register and Verify Account</strong>
                    <p>
                      Create a new account by entering your personal details.
                      Some platforms may require ID verification. Once
                      registered, log in with your credentials.
                    </p>
                  </li>
                  <li>
                    <strong>Deposit Funds</strong>
                    <p>Top up your account using safe payment methods:</p>
                    <ul>
                      <li>TrueWallet</li>
                      <li>QR Code Online Banking</li>
                      <li>Bank Transfer / Credit Card</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Select Football Section</strong>
                    <p>
                      Browse through popular options like Premier League, La
                      Liga, Champions League, World Cup Qualifiers.
                    </p>
                  </li>
                  <li>
                    <strong>Compare Odds and Markets</strong>
                    <p>
                      Each bookmaker offers slightly different odds. Compare
                      markets such as:
                    </p>
                    <ul>
                      <li>Match Result (1x2)</li>
                      <li>Over/Under Goals</li>
                      <li>Asian Handicap</li>
                      <li>Half-time/Full-time</li>
                      <li>
                        Special bets (corners, red cards, first goalscorer,
                        etc.)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Choose Bet Type</strong>
                    <ul>
                      <li>1X2 → Home win, draw, or away win.</li>
                      <li>
                        Over/Under → Predict if total goals will be higher or
                        lower than a given number.
                      </li>
                      <li>
                        Handicap → One team starts with a virtual
                        advantage/disadvantage.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Enter Stake Amount</strong>
                    <p>
                      Decide how much money you want to bet. The bet slip shows
                      your potential payout.
                    </p>
                  </li>
                  <li>
                    <strong>Confirm Bet Slip</strong>
                    <p>
                      Double-check your selections and click Confirm Bet. Your
                      wager is now placed and locked in.
                    </p>
                  </li>
                  <li>
                    <strong>Track Match and Outcome</strong>
                    <p>
                      Watch live or follow updates. Live betting allows placing
                      new bets during the match.
                    </p>
                  </li>
                  <li>
                    <strong>Withdraw Winnings</strong>
                    <p>
                      If your prediction is correct, winnings are added to your
                      account. Withdraw via TrueWallet, Online Banking, or other
                      options.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <div className="accordion-header" id="headingTwo">
              <button
                className={`bet-on-football-btn accordion-button ${
                  openAccordion === 2 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion(2)}
                aria-expanded={openAccordion === 2}
                aria-controls="collapseTwo"
              >
                How to perform Team Analysis before playing on Football Betting?
                {/* <i className={`bi ${openAccordion === 2 ? "bi-dash" : "bi-plus"}`}></i> */}
              </button>
            </div>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${
                openAccordion === 2 ? "show" : ""
              }`}
              aria-labelledby="headingTwo"
            >
              <div className="accordion-body">
                Content for accordion 2 goes here...
              </div>
            </div>
          </div>
          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <div className="accordion-header" id="headingThree">
              <button
                className={`bet-on-football-btn accordion-button ${
                  openAccordion === 3 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion(3)}
                aria-expanded={openAccordion === 3}
                aria-controls="collapseThree"
              >
                How are Football Betting Odds Calculated on The Direct Football
                Betting Website?
                {/* <i className={`bi ${openAccordion === 3 ? "bi-dash" : "bi-plus"}`}></i> */}
              </button>
            </div>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse ${
                openAccordion === 3 ? "show" : ""
              }`}
              aria-labelledby="headingThree"
            >
              <div className="accordion-body">
                Content for accordion 3 goes here...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballBettingGuide;
