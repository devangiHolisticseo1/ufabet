import React, { useState, useEffect } from "react";
import { Badge, Button, Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import "./home_sec5_p2.css";

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

const HomeSec5P2 = () => {
  const [selectedLeague, setSelectedLeague] = useState("Premiere League");
  const [selectedBet, setSelectedBet] = useState(null);

  // handle sidebar click
  const handleLeagueClick = (league) => {
    setSelectedLeague(league);
    setSelectedBet(null);
  };

  // handle bet click
  const handleBetClick = (match, type, odd) => {
    setSelectedBet({
      match: `${match.homeTeam} vs ${match.awayTeam}`,
      betType: type,
      odd,
    });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const [openItem, setOpenItem] = useState('collapseOne'); // First item open by default

  const toggleAccordion2 = (targetId) => {
    setOpenItem(openItem === targetId ? null : targetId);
  };

  const toggleAccordion = (league) => {
    setOpenItem(openItem === league ? null : league);
  };



  if (!isMobile) {
    return (

      <Container fluid className="home_sec5_p2_container">
        <Row>
          {/* Sidebar */}
          <Col md={3} className="home_sec5_p2_sidebar">
            <h5 className="home_sec5_p2_sidebar_title">
              Live Football <br /> Betting Odds
            </h5>
            <hr className="home_sec5_p2_sidebar_divider" />
            <ListGroup variant="flush" className="home_sec5_p2_sidebar_divider_flush">
              {menuItems.map((item, idx) => (
                <ListGroup.Item
                  key={idx}
                  action
                  className={`home_sec5_p2_menu_item ${item.includes(selectedLeague) ? "active" : ""
                    } d-flex justify-content-between align-items-center`}
                  onClick={() => handleLeagueClick(item.split(" for ")[1])}
                >
                  {item}
                  <span className="home_sec5_p2_arrow">{">"}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={9} className="home_sec5_p2_main">
            <h3 className="home_sec5_p2_heading">Live Football Betting Odds</h3>
            <p className="home_sec5_p2_subheading">Showing matches for: {selectedLeague}</p>


            <div className="home_sec5_card_uper_div">
              {/* <h3 >Premier League Live Score </h3> */}
              {matches
                .filter((m) => m.league === selectedLeague)
                .map((match, idx) => (


                  <Card key={idx} className="home_sec5_p2_card ">
                    <Card.Body className="home_sec5_card-body">
                      {/* Header Row */}
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center home_sec5_p2_card_logo_team_div ">
                          <img
                            src={match.homeLogo}
                            alt={match.homeTeam}
                            width={40}
                            height={40}
                            className="me-2"
                          />
                          <div className="text-uppercase home_sec5_homeTeam">{match.homeTeam}</div>
                        </div>

                        <div className="home_sec5_p2_vs text-muted">VS</div>

                        <div className="d-flex align-items-center home_sec5_p2_card_logo_team_div">
                          <img
                            src={match.awayLogo}
                            alt={match.awayTeam}
                            width={40}
                            height={40}
                            className="me-2"
                          />
                          <div className="text-uppercase home_sec5_homeTeam">{match.awayTeam}</div>
                        </div>

                        <Badge bg={statusColors[match.status]} className="text-uppercase ">
                          {match.status}
                        </Badge>
                      </div>

                      {/* Odds Row */}
                      <Row className="mb-3 text-center home_sec5_row_to_flex_col">
                        <Col>
                          <Button
                            className="home_sec5_p2_odds_btn"
                            onClick={() => handleBetClick(match, "HOME WIN", match.odds.home)}
                          >
                            <div className="label">HOME WIN</div>
                            <div className="odd">{match.odds.home.toFixed(2)}</div>
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            className="home_sec5_p2_odds_btn"
                            onClick={() => handleBetClick(match, "DRAW", match.odds.draw)}
                          >
                            <div className="label">DRAW</div>
                            <div className="odd">{match.odds.draw.toFixed(2)}</div>
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            className="home_sec5_p2_odds_btn"
                            onClick={() => handleBetClick(match, "AWAY WIN", match.odds.away)}
                          >
                            <div className="label">ALWAYS WIN</div>
                            <div className="odd">{match.odds.away.toFixed(2)}</div>
                          </Button>
                        </Col>
                      </Row>

                      {/* Call-to-action Button */}
                      <div className="text-center mb-3">
                        <Button variant="dark" className="home_sec5_p2_cta_btn" data-bs-placement="top">
                          Click on an odd to place a bet.
                        </Button>
                      </div>

                      {/* Footer Info */}
                      <div className="text-center small text-muted border-top  home_sec5_match_date_kick_off_div">
                        Match Date: {match.matchDate} &nbsp;|&nbsp; Kick-off: {match.kickOff}{" "}
                        {match.score ? `| Score: ${match.score}` : ""}
                      </div>
                    </Card.Body>
                  </Card>

                ))}
            </div>

          </Col>
        </Row>
      </Container>
    );
  };


  return (
    <div>
      <h1>mobile view</h1>
      <section className="container home_sec7_reuse_5_accordion_container " aria-label="Matches by League">
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
                  >
                    {item}
                      <span className="home_sec7_reuse_5_triangle"></span>
                  </button>
                </h3>
                <div
                  className={`accordion-collapse collapse ${openItem === league ? "show" : ""}`}
                >
                  <div className="accordion-body home_sec7_reuse_5_body text-white">
                    {leagueMatches.length > 0 ? (
                      leagueMatches.map((match, idx) => (
                        <Card key={idx} className="home_sec5_p2_card ">
                          <Card.Body className="home_sec5_card-body">
                            {/* Header Row */}
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div className="d-flex align-items-center home_sec5_p2_card_logo_team_div ">
                                <img
                                  src={match.homeLogo}
                                  alt={match.homeTeam}
                                  width={40}
                                  height={40}
                                  className="me-2"
                                />
                                <div className="text-uppercase home_sec5_homeTeam">{match.homeTeam}</div>
                              </div>

                              <div className="home_sec5_p2_vs text-muted">VS</div>

                              <div className="d-flex align-items-center home_sec5_p2_card_logo_team_div">
                                <img
                                  src={match.awayLogo}
                                  alt={match.awayTeam}
                                  width={40}
                                  height={40}
                                  className="me-2"
                                />
                                <div className="text-uppercase home_sec5_homeTeam">{match.awayTeam}</div>
                              </div>

                              <Badge bg={statusColors[match.status]} className="text-uppercase ">
                                {match.status}
                              </Badge>
                            </div>

                            {/* Odds Row */}
                            <Row className="mb-3 text-center home_sec5_row_to_flex_col">
                              <Col>
                                <Button
                                  className="home_sec5_p2_odds_btn"
                                  onClick={() => handleBetClick(match, "HOME WIN", match.odds.home)}
                                >
                                  <div className="label">HOME WIN</div>
                                  <div className="odd">{match.odds.home.toFixed(2)}</div>
                                </Button>
                              </Col>
                              <Col>
                                <Button
                                  className="home_sec5_p2_odds_btn"
                                  onClick={() => handleBetClick(match, "DRAW", match.odds.draw)}
                                >
                                  <div className="label">DRAW</div>
                                  <div className="odd">{match.odds.draw.toFixed(2)}</div>
                                </Button>
                              </Col>
                              <Col>
                                <Button
                                  className="home_sec5_p2_odds_btn"
                                  onClick={() => handleBetClick(match, "AWAY WIN", match.odds.away)}
                                >
                                  <div className="label">ALWAYS WIN</div>
                                  <div className="odd">{match.odds.away.toFixed(2)}</div>
                                </Button>
                              </Col>
                            </Row>

                            {/* Call-to-action Button */}
                            <div className="text-center mb-3">
                              <Button variant="dark" className="home_sec5_p2_cta_btn" data-bs-placement="top">
                                Click on an odd to place a bet.
                              </Button>
                            </div>

                            {/* Footer Info */}
                            <div className="text-center small text-muted border-top  home_sec5_match_date_kick_off_div">
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
      </section>
    </div>
  );
}

export default HomeSec5P2;