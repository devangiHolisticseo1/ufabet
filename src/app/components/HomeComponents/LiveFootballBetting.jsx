import React, { useState, useEffect } from "react";
import { Badge, Button, Card, ListGroup, Row, Col } from "react-bootstrap";
import Image from "next/image";

const menuItems = [
  "แทงบอล for Premiere League",
  "แทงบอล for UEFA Champions League",
  "แทงบอล for La Liga",
  "แทงบอล for Serie A",
  "แทงบอล for Bundesliga",
  "แทงบอล for Ligue 1",
  "แทงบอล for Europa League",
  "แทงบอล for Thai League 1",
  "แทงบอล for FA Cup",
  "แทงบอล for EFL Cup",
  "แทงบอล for World Cup",
  "แทงบอล for UEFA European Championship",
  "แทงบอล for Copa América",
  "แทงบอล for AFC Champions League",
  "แทงบอล for Chinese Super League",
];

const matches = [
  {
    league: "Premiere League",
    homeTeam: "GO AHEAD EAGLES",
    awayTeam: "FORTUNA SITTARD",
    homeLogo: "/images/home/sec5/Image 132.png",
    awayLogo: "/images/home/sec5/sec5_2.png",
    odds: { home: 1.85, draw: 3.20, away: 4.50 },
    status: "LIVE",
    matchDate: "2024-05-15",
    kickOff: "19:30 GMT",
    score: "1 - 0 (HT)",
  },
  {
    league: "Premiere League",
    homeTeam: "LUSITANIA ACRORES",
    awayTeam: "ACADEMICA COIMBRA",
    homeLogo: "/images/home/sec5/Image 132 (1).png",
    awayLogo: "/images/home/sec5/Mask group.png",
    odds: { home: 1.85, draw: 3.20, away: 4.50 },
    status: "UPCOMING",
    matchDate: "2024-05-15",
    kickOff: "19:30 GMT",
    score: "",
  },
  {
    league: "Premiere League",
    homeTeam: "FC UTRECHT",
    awayTeam: "PEC ZWOLLE",
    homeLogo: "/images/home/sec5/Image 132 (2).png",
    awayLogo: "/images/home/sec5/Image 133.png",
    odds: { home: 1.85, draw: 3.20, away: 4.50 },
    status: "FINISHED",
    matchDate: "2024-05-15",
    kickOff: "19:30 GMT",
    score: "",
  },
];

const statusColors = {
  LIVE: "danger",
  UPCOMING: "warning",
  FINISHED: "dark",
};

const LiveFootballBetting = () => {
  const [selectedLeague, setSelectedLeague] = useState("Premiere League");
  const [isMobile, setIsMobile] = useState(false);
  const [openItem, setOpenItem] = useState('collapseOne');

  const handleLeagueClick = (league) => {
    setSelectedLeague(league);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (league) => {
    setOpenItem(openItem === league ? null : league);
  };

  if (!isMobile) {
    return (
      <section className="live-football">
        <div className="container">
          <h2 className="main-heading">Live Football Accurate Scores and Results</h2>
          <p className="heading-para">Live football scores and results provide real-time updates from ongoing matches across domestic and international competitions. Each update includes goal counts, match status, and final outcomes, allowing for precise tracking of performance. Accurate data supports betting decisions, statistical analysis, and fan engagement. Live football betting websites deliver match details from leagues. Immediate access to verified scores, consistent refresh rates, and coverage of fixtures from multiple regions.</p>
          <div className="row">
            <aside className="col-md-3 tab-sidebar">
              <h5 className="tab-sidebar-title">
                Live Football Betting Odds
              </h5>
              <hr className="tab-sidebar-divider" />
              <ListGroup variant="flush">
                {menuItems.map((item, idx) => (
                  <ListGroup.Item
                    key={idx}
                    action
                    className={`tab-menu-item ${item.includes(selectedLeague) ? "active" : "" }`}
                    onClick={() => handleLeagueClick(item.split(" for ")[1])}
                  >
                    {item}
                    <span className="tab-arrow">{">"}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </aside>
            <article className="col-md-9 vertical-tab-content">
              <div className="tab-content-uper-div">
                {matches
                  .filter((m) => m.league === selectedLeague)
                  .map((match, idx) => (
                    <Card key={idx}>
                      <Card.Body>
                        {/* Header Row */}
                        <div className="d-flex-center-between mb-3">
                          <div className="flex-item">
                            <Image
                              src={match.homeLogo}
                              alt={match.homeTeam}
                              width={40}
                              height={40}
                              className="me-2"
                              unoptimized={false}
                            />
                            <div className="team">{match.homeTeam}</div>
                          </div>
                          <div className="text-muted">VS</div>
                          <div className="flex-item">
                            <Image
                              src={match.awayLogo}
                              alt={match.awayTeam}
                              width={40}
                              height={40}
                              className="me-2"
                              unoptimized={false}
                            />
                            <div className="team">{match.awayTeam}</div>
                          </div>
                          <Badge bg={statusColors[match.status]} className="text-uppercase ">
                            {match.status}
                          </Badge>
                        </div>
                        {/* Odds Row */}
                        <Row className="mb-3 text-center home_sec5_row_to_flex_col">
                          <Col>
                            <Button
                              className="odds-btn"
                              onClick={() => handleBetClick(match, "HOME WIN", match.odds.home)}
                            >
                              <div className="label">HOME WIN</div>
                              <div className="odd">{match.odds.home.toFixed(2)}</div>
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              className="odds-btn"
                              onClick={() => handleBetClick(match, "DRAW", match.odds.draw)}
                            >
                              <div className="label">DRAW</div>
                              <div className="odd">{match.odds.draw.toFixed(2)}</div>
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              className="odds-btn"
                              onClick={() => handleBetClick(match, "AWAY WIN", match.odds.away)}
                            >
                              <div className="label">ALWAYS WIN</div>
                              <div className="odd">{match.odds.away.toFixed(2)}</div>
                            </Button>
                          </Col>
                        </Row>
                        {/* Call-to-action Button */}
                        <div className="text-center mb-3">
                          <Button variant="dark" className="hero-button" data-bs-placement="top">
                            Click on an odd to place a bet.
                          </Button>
                        </div>
                        {/* Footer Info */}
                        <div className="match-date-kick-off">
                          Match Date: {match.matchDate} &nbsp;|&nbsp; Kick-off: {match.kickOff}{" "}
                          {match.score ? `| Score: ${match.score}` : ""}
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <div className="container" aria-label="Matches by League">
        <h3 className="home_sec5_p2_heading">Live Football Betting Odds</h3>
        <div className="home_sec5_mobile_view_hor_line"></div>
        <div className="accordion home_sec7_reuse_5_accordion accordion-flush" id="homeSec7Accordion">
          {menuItems.map((item, idx) => {
            const league = item.split(" for ")[1];
            const leagueMatches = matches.filter((m) => m.league === league);
            return (
              <article className="accordion-item home_sec7_reuse_5_item" key={idx}>
                <h3 className="accordion-header">
                  <button
                    className={`accordion-button home_sec7_reuse_5_button ${openItem === league ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleAccordion(league)}
                    aria-expanded={openItem === league}   // for accessibility
                  >
                    {item}
                    <span className="home_sec7_reuse_5_triangle"></span>
                  </button>
                </h3>
                <div
                  className={`accordion-collapse collapse ${openItem === league ? "show" : ""}`}
                >
                  <div className="tab-content-uper-div">
                    {leagueMatches.length > 0 ? (
                      leagueMatches.map((match, idx) => (
                        <Card key={idx}>
                          <Card.Body>
                            <div className="d-flex-center-between mb-3">
                              <div className="flex-item">
                                <Image
                                  src={match.homeLogo}
                                  alt={match.homeTeam}
                                  width={40}
                                  height={40}
                                  className="me-2"
                                  unoptimized={false}
                                />
                                <div className="team">{match.homeTeam}</div>
                              </div>
                              <div className="text-muted">VS</div>
                              <div className="flex-item">
                                <Image
                                  src={match.awayLogo}
                                  alt={match.awayTeam}
                                  width={40}
                                  height={40}
                                  className="me-2"
                                  unoptimized={false}
                                />
                                <div className="team">{match.awayTeam}</div>
                              </div>
                              <Badge bg={statusColors[match.status]} className="text-uppercase ">
                                {match.status}
                              </Badge>
                            </div>
                            {/* Odds Row */}
                            <Row className="mb-3 text-center home_sec5_row_to_flex_col">
                              <Col>
                                <Button
                                  className="odds-btn"
                                  onClick={() => handleBetClick(match, "HOME WIN", match.odds.home)}
                                >
                                  <div className="label">HOME WIN</div>
                                  <div className="odd">{match.odds.home.toFixed(2)}</div>
                                </Button>
                              </Col>
                              <Col>
                                <Button
                                  className="odds-btn"
                                  onClick={() => handleBetClick(match, "DRAW", match.odds.draw)}
                                >
                                  <div className="label">DRAW</div>
                                  <div className="odd">{match.odds.draw.toFixed(2)}</div>
                                </Button>
                              </Col>
                              <Col>
                                <Button
                                  className="odds-btn"
                                  onClick={() => handleBetClick(match, "AWAY WIN", match.odds.away)}
                                >
                                  <div className="label">ALWAYS WIN</div>
                                  <div className="odd">{match.odds.away.toFixed(2)}</div>
                                </Button>
                              </Col>
                            </Row>
                            {/* Call-to-action Button */}
                            <div className="text-center mb-3">
                              <Button variant="dark" className="hero-button" data-bs-placement="top">
                                Click on an odd to place a bet.
                              </Button>
                            </div>
                            {/* Footer Info */}
                            <div className="match-date-kick-off">
                              Match Date: {match.matchDate} &nbsp;|&nbsp; Kick-off: {match.kickOff}{" "}
                              {match.score ? `| Score: ${match.score}` : ""}
                            </div>
                          </Card.Body>
                        </Card>
                      ))
                    ) : (
                      <p>No matches available</p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LiveFootballBetting;