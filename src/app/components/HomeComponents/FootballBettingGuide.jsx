"use client";
import React, { useState } from "react";
const FootballBettingGuide = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <section className="bet-on-football">
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
                    <strong>
                      Choose a Trusted Bookmaker or Direct Website
                    </strong>
                    <p>
                      Select a platform with a strong reputation for fair odds,
                      secure transactions, and transparent policies. Direct
                      websites offer immediate access without intermediaries,
                      which reduces delays and ensures full control over betting
                      activity.
                    </p>
                  </li>
                  <li>
                    <strong>Register and Verify Account</strong>
                    <p>
                      Create an account by entering basic personal details.
                      Verification may require uploading identification
                      documents to confirm age and identity. Completing the step
                      unlocks access to deposits, withdrawals, and full betting
                      features.
                    </p>
                  </li>
                  <li>
                    <strong>Deposit Funds</strong>
                    <p>
                      Add money to the account using available payment methods.
                      Direct websites offer instant processing, allowing funds
                      to appear immediately for use in betting.
                    </p>
                  </li>
                  <li>
                    <strong>Select Football Section</strong>
                    <p>
                      Navigate to the football category, which includes domestic
                      leagues, international tournaments, and live matches. The
                      section is organized by region, competition, or match
                      schedule.
                    </p>
                  </li>
                  <li>
                    <strong>Pick a league or a match</strong>
                    <p>
                      Choose a specific league or fixture based on interest or
                      strategy. Options range from Premier League and UEFA
                      Champions League to Thai League 1 and Copa América. Each
                      match includes multiple betting markets.
                    </p>
                  </li>
                  <li>
                    <strong>Compare Odds and Markets</strong>
                    <p>
                      Review available odds for each outcome and compare across
                      markets (Full-Time Result, Over/Under goals, or Asian
                      Handicap). Higher odds offer greater returns but reflect
                      lower probability.
                    </p>
                  </li>
                  <li>
                    <strong>
                      Choose bet type (1X2, Over/Under, Handicap, etc.)
                    </strong>
                    <p>
                      Select a betting format that matches the prediction. For
                      example, 1X2 covers win, draw, loss, “Over/Under” focuses
                      on total goals, and Handicap adjusts the scoreline to
                      balance team strength.
                    </p>
                  </li>
                  <li>
                    <strong>Enter Stake Amount</strong>
                    <p>
                      Input the amount to wager. The system automatically
                      calculates potential returns based on selected odds.
                      Platforms display minimum and maximum stake limits.
                    </p>
                  </li>
                  <li>
                    <strong>Confirm Bet Slip</strong>
                    <p>
                      Review the bet slip for accuracy (match, market, odds, and
                      stake). Submit the slip to finalize the wager. Bet becomes
                      active and fixed once confirmed.
                    </p>
                  </li>
                  <li>
                    <strong>Track Match and Outcome</strong>
                    <p>
                      Monitor the match in real time through live scores or
                      streaming. Direct websites provide in-play statistics and
                      updated odds for additional betting opportunities.
                    </p>
                  </li>
                  <li>
                    <strong>Withdraw Winnings</strong>
                    <p>
                      Request a withdrawal through the account dashboard after
                      the match concludes and the bet settles. Funds are
                      transferred using the selected method, with processing
                      time depending on the platform and payment provider.
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
                <ol>
                  <li>
                    <strong>Review recent form</strong>
                    <p>
                      Check how each team has performed in their last 5–10 matches. Focus on wins, losses, and draws, but look at match context. Direct websites provide match summaries and performance graphs to help spot trends.
                    </p>
                  </li>
                  <li>
                    <strong>Compare home vs. away records</strong>
                    <p>
                      Teams play differently depending on location. Use the platform’s stats section to see how a team performs at home versus away. A strong home record does not translate to away success, which affects betting choices.
                    </p>
                  </li>
                  <li>
                    <strong>Analyze head-to-head history</strong>
                    <p>
                      Look at previous encounters between the two teams. Clubs consistently outperform others due to tactical matchups or psychological edges. Direct betting sites include head-to-head data under each fixture.
                    </p>
                  </li>
                  <li>
                    <strong>Check squad news and injuries</strong>
                    <p>
                      Missing key players drastically change a team’s strength. Use the website’s news feed or match preview section to find updates on injuries, suspensions, or lineup changes before placing a bet.
                    </p>
                  </li>
                  <li>
                    <strong>Evaluate motivation and stakes</strong>
                    <p>
                      Consider what’s at stake, title race, relegation battle, or mid-table comfort. Teams with something to fight for tend to play with more urgency. Direct sites highlight league standings and match importance to guide the analysis.
                    </p>
                  </li>
                  <li>
                    <strong>Assess offensive and defensive stats</strong>
                    <p>
                      Look at goals scored and conceded per match. A team with high scoring, but weak defense is better suited for Over/Under bets. Direct platforms offer stat breakdowns to help identify betting angles.
                    </p>
                  </li>
                  <li>
                    <strong>Study tactical style and matchups</strong>
                    <p>
                      Teams struggle against specific formations or pressing styles. Use match previews or expert analysis sections to understand tactical dynamics. The step predicts how a game unfold beyond raw stats.
                    </p>
                  </li>
                  <li>
                    <strong>Use in-platform tools and insights</strong>
                    <p>
                      Direct betting websites include prediction models, betting tips, and AI-driven insights. The tools validate the analysis or highlight overlooked factors, making bets more calculated.
                    </p>
                  </li>
                </ol>
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
                <ol>
                  <li>
                    <strong>Analyze match data and team statistics</strong>
                    <p>
                      Direct websites begin by processing vast amounts of football data, team form, player performance, injuries, weather, and historical match outcomes. It helps estimate the probability of each result. The more popular the league, the more refined the data modeling becomes due to higher betting volume and scrutiny.
                    </p>
                  </li>
                  <li>
                    <strong>Convert probabilities into Odds Formats</strong>
                    <p>
                      The probabilities are determined when converted into odds formats (decimal, fractional, or American). For example, the decimal odds would be 2.00 if a team has a 50% chance to win. The step translates raw into user-friendly betting options.
                    </p>
                  </li>
                  <li>
                    <strong>Adjust for market behavior and cash flow</strong>
                    <p>
                      Bookmakers monitor betting trends and adjust odds based on expected user behavior. The odds for that team drop to reduce risk if most users bet on a popular team. Direct websites use algorithms to predict cash distribution and balance exposure across outcomes.
                    </p>
                  </li>
                  <li>
                    <strong>Include profit margin (overround)</strong>
                    <p>
                      Platforms include a margin to ensure profit. The combined implied probabilities of outcomes exceed 100%. The site guarantees returns regardless of match results.
                    </p>
                  </li>
                  <li>
                    <strong>Update odds in real time</strong>
                    <p>
                      Odds are dynamic. Direct websites update odds instantly for live betting, to reflect changing probabilities and market shifts.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FootballBettingGuide;
