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
    title: "Premiere League",
    description: "GO AHEAD EAGLES",
  },
  {
    title: "Premiere League",
    description: "GO AHEAD EAGLES",
  },
  {
    title: "Premiere League",
    description: "GO AHEAD EAGLES",
  },
  {
    title: "Premiere League",
    description: "GO AHEAD EAGLES",
  },
];

const statusColors = {
  LIVE: "danger",
  UPCOMING: "warning",
  FINISHED: "dark",
};

const PremierLeague = () => {
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
          <h2 className="main-heading">Live Football Betting Odds for Leagues and Team Matches</h2>
          <div className="row">
            <aside className="col-md-3 tab-sidebar">
              <h5 className="tab-sidebar-title">
                Premier League
              </h5>
              <hr className="tab-sidebar-divider" />
              <ListGroup variant="flush">
                {menuItems.map((item, idx) => (
                  <ListGroup.Item
                    key={idx}
                    action
                    className={`tab-menu-item ${item.includes(selectedLeague) ? "active" : ""}`}
                    onClick={() => handleLeagueClick(item.split(" for ")[1])}
                  >
                    {item}
                    <span className="tab-arrow">{">"}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </aside>
            <article className="col-md-9 vertical-tab-content">
              <header>
                <h3 className="tab-content-heading">แทงบอล for Premier League</h3>
              </header>
              <p>แทงบอล on the Premier League is wagering on England’s top-tier football, where matches are fast-paced and unpredictable. Team form, injuries, and home advantage shape odds. For example, the odds are Liverpool 2.00, Draw 3.40, and Chelsea 3.60, in a game of Liverpool vs. Chelsea. Mid-table clashes offer value in markets (Both Teams to Score or Over/Under goals) because of the league’s competitiveness.</p>
            </article>
          </div>
        </div>
      </section>
    );
  };

  return (
    <section className="live-football">
      <div className="container">
        <h2 className="main-heading">Live Football Betting Odds for Leagues and Team Matches</h2>
        <div
          className="accordion home_sec7_reuse_6_accordion accordion-flush"
          id="homeSec6Accordion"
        >
          {matches.map((item, idx) => (
            <article className="accordion-item home_sec7_reuse_6_item" key={idx}>
              <h3 className="accordion-header">
                <button
                  className={`res-tab-menu-item ${openItem === item.key ? "" : "active"
                    }`}
                  type="button"
                  onClick={() => toggleAccordion(item.key)}
                  aria-expanded={openItem === item.key}
                >
                  {item.title}
                  <span className="res-tab-arrow"></span>
                </button>
              </h3>
              <div
                className={`accordion-collapse collapse ${openItem === item.key ? "show" : ""
                  }`}
              >
                <div className="res-accordion-body">
                  <h3 className="tab-content-heading">แทงบอล for Premier League</h3>
                  {item.description && (
                    <p>{item.description}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PremierLeague;