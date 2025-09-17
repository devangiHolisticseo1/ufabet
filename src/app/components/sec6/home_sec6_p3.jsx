"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, ListGroup, Card } from "react-bootstrap";
import "./home_sec6_p3.css"; // ✅ CSS retained

const categories = [
  {
    title: "Corners",
    key: "world_cup",
    description1:
      "The FIFA World Cup is the pinnacle of international football, held every four years. It brings together the best national teams from around the globe to compete for the most prestigious trophy in sports.",
    description2:
      "Betting on the World Cup offers an unparalleled experience, with numerous markets available from group stage matches to the grand final. You can place wagers on match winners, total goals, goal scorers, handicaps, and outright tournament winners.",
    description3:
      'Instructional Definition: แทงบอล (Tang Ball) literally translates to "bet on football" in Thai. It refers to the act of placing wagers on football matches, encompassing various types of bets and markets offered by bookmakers.',
    image: "/images/home/sec6/world_cup_goal.png",
    tips: [
      "Bet on total corners in the match (Over/Under).",
      "Predict which team will get the most corners.",
      "Useful when betting on attacking teams that play wide.",
    ],
  },
  {
    title: "Posessions",
    key: "euro",
    description1:
      "From last-minute strikes to penalty shootout drama, explore unforgettable moments from Euro Finals.",
    description2:
      "Betting on the World Cup offers an unparalleled experience, with numerous markets available from group stage matches to the grand final. You can place wagers on match winners, total goals, goal scorers, handicaps, and outright tournament winners.",
    description3:
      'Instructional Definition: แทงบอล (Tang Ball) literally translates to "bet on football" in Thai. It refers to the act of placing wagers on football matches, encompassing various types of bets and markets offered by bookmakers.',
    image: "/images/home/sec6/euro_moments.png",
    tips: [
      "Bet on total corners in the match (Over/Under).",
      "Predict which team will get the most corners.",
      "Useful when betting on attacking teams that play wide.",
    ],
  },
  {
    title: "Cleansheets",
    key: "afc_cup",
    description1: "A corner kick (commonly called a corner) is awarded when:",
    description2:
      "Both UFABET and SBOBET direct websites support these markets with live, updated odds.",
    description3:
      'Instructional Definition: แทงบอล (Tang Ball) literally translates to "bet on football" in Thai. It refers to the act of placing wagers on football matches, encompassing various types of bets and markets offered by bookmakers.',
    image: "/images/home/sec6/afc_cup_match.png",
    tips: [
      "Bet on total corners in the match (Over/Under).",
      "Predict which team will get the most corners.",
      "Useful when betting on attacking teams that play wide.",
    ],
  },
];

const HomeSec6P3 = () => {
  const [selected, setSelected] = useState(categories[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [openItem, setOpenItem] = useState(categories[0].key);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (key) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <main className="home_sec6_p3_wrapper container">
      {/* Page Header */}
      <header className="home_sec6_p3_header text-center mb-4">
        <h2 className="home_sec6_p3_title">แทงบอล for Football Tournaments</h2>
        <p className="home_sec6_p3_p">
          Your ultimate guide to football betting with trusted strategies and
          insights.
        </p>
      </header>

      {/* ✅ Desktop Layout */}
      {!isMobile ? (
        <Container fluid className="home_sec6_p3_container">
          <Row>
            {/* Sidebar */}
            <aside className="home_sec6_p3_sidebar col-md-3">
              <h5 className="home_sec6_p3_sidebar_title">Headings</h5>
              <hr className="home_sec6_p3_sidebar_divider" />
              <nav aria-label="Betting Categories">
                <ListGroup variant="flush">
                  {categories.map((item, idx) => (
                    <ListGroup.Item
                      key={idx}
                      as="button"
                      action
                      className={`home_sec6_p3_menu_item ${item.key === selected.key ? "active" : ""
                        } d-flex justify-content-between align-items-center`}
                      onClick={() => setSelected(item)}
                    >
                      {item.title}
                      <span className="home_sec6_p3_arrow">{">"}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </nav>
            </aside>

            {/* Main Content */}
            <article className="home_sec6_p3_main col-md-9">
              <header>
                <h3 className="home_sec6_p3_heading">
                  แทงบอล for {selected.title}
                </h3>
                <hr className="home_sec6_p2_heading_bottom_line" />
              </header>

              {selected.description1 && (
                <p className="home_sec6_p3_description">
                  {selected.description1}
                </p>
              )}
              {selected.description2 && (
                <p className="home_sec6_p3_description">
                  {selected.description2}
                </p>
              )}

              <Card className="home_sec6_p1_card mb-4 home_sec6_p2_shadow-left">
                <Card.Body>
                  <Card.Title className="home_sec6_p3_card_title">
                    Key Insights:
                  </Card.Title>
                  <ul className="home_sec6_p3_list">
                    {selected.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>

              {selected.description3 && (
                <p className="home_sec6_p3_description">
                  {selected.description3}
                </p>
              )}
            </article>
          </Row>
        </Container>
      ) : (
        // ✅ Mobile Accordion Layout
        <section
          className="container home_sec7_reuse_6_accordion_container home_sec6_mobile_div_color"
          aria-label="Betting Markets Accordion"
        >
          <h5 className="home_sec6_p3_sidebar_title">Headings</h5>
          <hr className="home_sec6_p3_sidebar_divider" />

          <div
            className="accordion home_sec7_reuse_6_accordion accordion-flush"
            id="homeSec6P3Accordion"
          >
            {categories.map((item, idx) => (
              <article className="accordion-item home_sec7_reuse_6_item" key={idx}>
                <h3 className="accordion-header">
                  <button
                    className={`accordion-button home_sec7_reuse_6_button ${openItem === item.key ? "" : "collapsed"
                      }`}
                    type="button"
                    onClick={() => toggleAccordion(item.key)}
                    aria-expanded={openItem === item.key}
                  >
                    {item.title}
                    <span className="home_sec7_reuse_6_triangle"></span>
                  </button>
                </h3>
                <div
                  className={`accordion-collapse collapse ${openItem === item.key ? "show" : ""
                    }`}
                >
                  <div className="accordion-body home_sec7_reuse_6_body text-white home_sec6_mobile_div_color_accodian">
                    <h3 className="home_sec6_p3_heading">
                      แทงบอล for {item.title}
                    </h3>
                    <hr className="home_sec6_p2_heading_bottom_line" />

                    {item.description1 && (
                      <p className="home_sec6_p3_description">
                        {item.description1}
                      </p>
                    )}
                    {item.description2 && (
                      <p className="home_sec6_p3_description">
                        {item.description2}
                      </p>
                    )}

                    <Card className="home_sec6_p1_card mb-4 home_sec6_p2_shadow-left">
                      <Card.Body>
                        <Card.Title className="home_sec6_p3_card_title">
                          Key Insights:
                        </Card.Title>
                        <ul className="home_sec6_p3_list">
                          {item.tips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>

                    {item.description3 && (
                      <p className="home_sec6_p3_description">
                        {item.description3}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default HomeSec6P3;
