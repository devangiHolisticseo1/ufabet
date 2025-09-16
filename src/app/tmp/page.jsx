"use client"
import React, { useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./tmp.css";

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

const tmp = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container className="my-4">
  <h4 className="mb-3">Live Football Betting Odds</h4>

  <Accordion activeKey={activeKey}>
    <Accordion.Item eventKey="0">
      <Accordion.Header onClick={() => toggleAccordion("0")}>
        แทงบอล for Premiere League
      </Accordion.Header>
      <Accordion.Body>
        {matches.map((match, idx) => (
          <Card key={idx} className="mb-3 shadow-sm">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>{match.league}</span>
              <Badge bg={statusColors[match.status]}>{match.status}</Badge>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center text-center">
                <Col>
                  <img
                    src={match.homeLogo}
                    alt="home logo"
                    width={40}
                    height={40}
                  />
                  <div>{match.homeTeam}</div>
                </Col>
                <Col>
                  <div>VS</div>
                </Col>
                <Col>
                  <img
                    src={match.awayLogo}
                    alt="away logo"
                    width={40}
                    height={40}
                  />
                  <div>{match.awayTeam}</div>
                </Col>
              </Row>
              <Row className="text-center mt-3">
                <Col>
                  <Button variant="outline-dark" size="sm" className="w-100">
                    HOME WIN <br /> {match.odds.home}
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-dark" size="sm" className="w-100">
                    DRAW <br /> {match.odds.draw}
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-dark" size="sm" className="w-100">
                    AWAY WIN <br /> {match.odds.away}
                  </Button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="text-muted text-center">
                  {match.matchDate} | Kickoff: {match.kickOff}{" "}
                  {match.score && `| Score: ${match.score}`}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Accordion.Body>
    </Accordion.Item>

    {/* Other League Menus */}
    {menuItems.slice(1).map((item, idx) => (
      <Accordion.Item eventKey={`${idx + 1}`} key={idx + 1}>
        <Accordion.Header onClick={() => toggleAccordion(`${idx + 1}`)}>
          {item}
        </Accordion.Header>
        <Accordion.Body>
          <p className="text-muted">No matches available yet.</p>
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
</Container>

  );
};

export default tmp;
