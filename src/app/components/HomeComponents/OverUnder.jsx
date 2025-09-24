"use client";

import Image from "next/image";
import { useState } from "react";

const matchData = [
  {
    id: 1,
    team: "Liverpool",
    league: "Premier League",
    opponent: "Arsenal",
    category: "leagues",
    time: "20:00",
    over: "1.85",
    under: "1.95",
    logo: "/images/home/sec4/Image 132.png",
  },
  {
    id: 2,
    team: "Chelsea",
    league: "Premier League",
    opponent: "Man City",
    category: "teams",
    time: "20:00",
    over: "1.85",
    under: "1.95",
    logo: "/images/home/sec4/Image 132 (1).png",
  },
  {
    id: 3,
    team: "Liverpool",
    league: "Premier League",
    opponent: "Arsenal",
    category: "others",
    time: "20:00",
    over: "1.85",
    under: "1.95",
    logo: "/images/home/sec4/Image 133.png",
  },
];

const OverUnder = () => {
  const [filter, setFilter] = useState("all");

  const filteredMatches =
    filter === "all"
      ? matchData
      : matchData.filter((match) => match.category === filter);

  const [showFullText, setShowFullText] = useState({});

  const toggleReadMore = (id) => {
    setShowFullText((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getFilterIcon = (type) => {
    switch (type) {
      case "all":
        return (
          <Image
            src="/images/home/sec4/global--markets--bar_1_.png"
            alt="all markets"
            width={20}
            height={20}
            className="img-fluid"
          />
        );
      case "leagues":
        return (
          <Image
            src="/images/home/sec4/Group 87272.png"
            alt="leagus"
            width={20}
            height={20}
            className="img-fluid"
          />
        );
      case "teams":
        return (
          <Image
            src="/images/home/sec4/Vector.png"
            alt="teams"
            width={20}
            height={20}
            className="img-fluid"
          />
        );
      case "others":
        return (
          <Image
            src="/images/home/sec4/Vector (1).png"
            alt="others"
            width={20}
            height={20}
            className="img-fluid"
          />
        );
      default:
        return "";
    }
  };

  const getFilterLabel = (type) => {
    switch (type) {
      case "all":
        return "All Markets";
      case "leagues":
        return "Leagues";
      case "teams":
        return "Teams";
      case "others":
        return "Others";
      default:
        return type;
    }
  };

  return (
    <section className="over-under">
      <div className="container">
        <h2 className="main-heading">See แทงบอล Odds for Over/Under</h2>
        <p className="heading-para">
          Over/Under football betting presents a method for predicting the total
          number of goals scored in a match. The bookmaker sets a numerical
          threshold (goal line). A wager is placed on whether the combined goals
          from both teams exceed or fall below that number. The final score
          determines the outcome of the bet, regardless of which team wins.
        </p>
        <div className="row football-odd-wrap">
          <div className="col-md-4">
            <article className="football-odd-card">
              <h3 className="card-title">ODDS</h3>
              <p>
                "Odds" refer to the numerical value assigned to a betting
                outcome. Decimal odds express the potential return
                {!showFullText["1"] && (
                  <span
                    className="read-more-btn"
                    onClick={() => toggleReadMore("1")}
                  >
                    Read More
                  </span>
                )}
                {showFullText["1"] && (
                  <>
                    <span>
                      {" "}
                      from a stake. For example, odds of 1.95 for Over 2.5 indicate that a stake of 100 units returns 195 units if the match produces three or more goals. Lower odds reflect a higher probability, while higher odds suggest a lower result. Factors influencing odds (team form, historical scoring patterns, and match conditions).
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
            </article>
          </div>
          <div className="col-md-4">
            <article className="football-odd-card">
              <h3 className="card-title">OVER</h3>
              <p>
                "Over" applies when the total number of goals scored exceeds the
                goal line. A match ending 3–1, 2–2, or 4–0
                {!showFullText["2"] && (
                  <span
                    className="read-more-btn"
                    onClick={() => toggleReadMore("2")}
                  >
                    Read More
                  </span>
                )}
                {showFullText["2"] && (
                  <>
                    <span>
                      {" "}
                      confirms an Over result if the line is set at 2.5. The goal line acts as the dividing point between the two outcomes.
                    </span>
                    <span
                      className="read-more-btn"
                      onClick={() => toggleReadMore("2")}
                    >
                      Read Less
                    </span>
                  </>
                )}
              </p>
            </article>
          </div>
          <div className="col-md-4">
            <article className="football-odd-card">
              <h3 className="card-title">UNDER</h3>
              <p>
                "Under" applies when the total number of goals remains below the
                goal line. A score of 1–0, 1–1, or 2–0
                {!showFullText["3"] && (
                  <span
                    className="read-more-btn"
                    onClick={() => toggleReadMore("3")}
                  >
                    Read More
                  </span>
                )}
                {showFullText["3"] && (
                  <>
                    <span>
                      {" "}
                      confirms an Under result under the same line. The goal line acts as the dividing point between the two outcomes.
                    </span>
                    <span
                      className="read-more-btn"
                      onClick={() => toggleReadMore("3")}
                    >
                      Read Less
                    </span>
                  </>
                )}
              </p>
            </article>
          </div>
          <div className="col-md-12">
            <div className="theme-ul-wrapper mt-30">
              <p className="ul-caption">
                Advantages of using direct websites for football betting with
                UFABET and SBOBET are listed below:
              </p>
              <ul className="theme-ul">
                <li>
                  Real-time access to odds without third-party involvement.
                </li>
                <li>Fast settlement and secure payment systems.</li>
                <li>Filters for league, team, match time, and goal line.</li>
                <li>Transparent pricing with consistent updates.</li>
                <li>Mobile-friendly interface for quick navigation.</li>
              </ul>
              <p className="ul-footer-caption">
                Odds are indicative and for demonstration purposes only
                responsible gambling • 18+ only
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <h3 className="sub-heading mt-70">
              Over/Under Football Betting Odds for 24 Hours (Today)
            </h3>
            <p className="heading-para">
              Over/Under Football Betting Odds for 24 hours are the numerical
              values assigned to wagers predicting whether the total number of
              goals scored in a match falls above or below a predefined
              threshold. Bookmakers publish the odds for matches scheduled
              within the current day, covering various leagues and competitions.
              Each match receives a goal line (2.5), which serves as the
              benchmark for determining the outcome of the bet. A wager placed
              on Over expects the combined score from both teams to exceed the
              line, while a wager placed on Under anticipates fewer goals than
              the line.
            </p>
            <div className="tabs-header">
              {["all", "leagues", "teams", "others"].map((type) => (
                <button
                  key={type}
                  className={`tabs-btn ${filter === type ? "active" : ""} btn`}
                  onClick={() => setFilter(type)}
                >
                  <span className="home_sec4_p1_filter_icon">
                    {getFilterIcon(type)}
                  </span>
                  <p>{getFilterLabel(type)}</p>
                </button>
              ))}
            </div>
            <div className="container">
              {filteredMatches.map((match) => (
                <article key={match.id} className="tab-content">
                  <span className="trending">TRENDING</span>
                  <header className="header-content">
                    <div className="d-flex align-items-center">
                      <figure className="header-team-logo">
                        <Image
                          src={match.logo}
                          alt={`${match.team} logo`}
                          width={32}
                          height={32}
                          className="rounded-circle img-fluid"
                        />
                        <figcaption className="visually-hidden">
                          {match.team} team logo
                        </figcaption>
                      </figure>
                      <div>
                        <h4 className="header-heading">{match.team}</h4>
                        <p className="header-league">{match.league}</p>
                      </div>
                    </div>
                    <time
                      className="match-time"
                      dateTime={`2024-01-15T${match.time}:00`}
                    >
                      {match.time}
                    </time>
                  </header>

                  {/* Opponent */}
                  <p className="opponent">vs {match.opponent}</p>

                  {/* Odds Section */}
                  <section className="odds-over-section row">
                    {/* Over Section */}
                    <div className="col-md-6">
                      <div className="odds-over-box">
                        <div className="odds-over-label">OVER</div>
                        <div className="odds-over-trend">
                          <Image
                            src="/images/home/sec4/up.png"
                            className="img-fluid"
                            alt="odds trending up"
                            width={14}
                            height={9}
                          />
                        </div>
                        <div className="odds-over-value">2.5</div>
                        <div className="odds-over-rate">{match.over}</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="odds-over-box">
                        <div className="odds-over-label">UNDER</div>
                        <div className="odds-over-trend">
                          <Image
                            src="/images/home/sec4/up.png"
                            className="img-fluid"
                            alt="odds trending up"
                            width={14}
                            height={9}
                          />
                        </div>
                        <div className="odds-over-value">2.5</div>
                        <div className="odds-over-rate">{match.under}</div>
                      </div>
                    </div>
                  </section>

                  {/* Match Footer */}
                  <footer className="visually-hidden">
                    <p>
                      Match odds for {match.team} vs {match.opponent} in{" "}
                      {match.league}
                    </p>
                  </footer>
                </article>
              ))}

              {filteredMatches.length === 0 && (
                <aside className="home_sec4_p1_no_matches text-center text-muted p-5">
                  No matches found for this category.
                </aside>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverUnder;
