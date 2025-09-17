
import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import "./home_sec6_p2.css"; // ✅ CSS retained

const categories = [
  {
    title: "Goals",
    key: "world_cup",
    description1:
      "Predict how many goals will be scored in the match (total goals, first scorer, anytime scorer).",
    description2:
      " Both UFABET and SBOBET support these markets through Direct Website แทงบอล, giving bettors live odds and real-time updates.",
    description3:
      'Instructional Definition: แทงบอล (Tang Ball) literally translates to "bet on football" in Thai. It refers to the act of placing wagers on football matches, encompassing various types of bets and markets offered by bookmakers.',
    image: "/images/home/sec6/world_cup_goal.png",
    tips: [
      "Bet on total goals (Over/Under).",
      "Bet on specific players to score first, last, or anytime.",
    ],
  },
  {
    title: "Assists",
    key: "euro",
    description1:
      "From last-minute strikes to penalty shootout drama, explore unforgettable moments from Euro Finals.",
    description2:
      "Betting on the World Cup offers an unparalleled experience, with numerous markets available from group stage matches to the grand final. You can place wagers on match winners, total goals, goal scorers, handicaps, and outright tournament winners.",
    description3:
      'Instructional Definition: แทงบอล (Tang Ball) literally translates to "bet on football" in Thai. It refers to the act of placing wagers on football matches, encompassing various types of bets and markets offered by bookmakers.',
    image: "/images/home/sec6/euro_moments.png",
    tips: [
      "Compare final moments across different years.",
      "Focus on crowd energy and reactions.",
      "Identify game-changing substitutions.",
    ],
  },
  {
    title: "Score",
    key: "afc_cup",
    description1:
      "Dive into the highlights of Asia's top tournament, where underdogs rose and giants clashed.",
    description2:
      "Betting on the World Cup offers an unparalleled experience, with numerous markets available from group stage matches to the grand final. You can place wagers on match winners, total goals, goal scorers, handicaps, and outright tournament winners.",
    description3:
      'Instructional Definition: แทงบอล (Tang Ball) literally translates to "bet on football" in Thai. It refers to the act of placing wagers on football matches, encompassing various types of bets and markets offered by bookmakers.',
    image: "/images/home/sec6/afc_cup_match.png",
    tips: [
      "Study tactics used by dominant teams.",
      "Appreciate technical finesse in midfield battles.",
      "Look for surprising upsets and their turning points.",
    ],
  },
];

const HomeSec6P2 = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <main className="container home_sec6_p2_wrapper">
      {/* Page Header */}
      <header className="home_sec6_p2_header">
        <h2 className="home_sec6_p2_title">
          แทงบอล for Goals, Assists and Scores
        </h2>
        <p className="home_sec6_p2_p">
          When betting on football, you are not limited to match outcomes
          (win/lose/draw). Many betting markets focus on player and match
          statistics, including:
        </p>
      </header>

      <Container fluid className="home_sec6_p2_container">
        <Row>
          {/* Sidebar */}
          <aside className="home_sec6_p2_sidebar col-md-3">
            <h5 className="home_sec6_p2_sidebar_title">Headings</h5>
            <hr className="home_sec6_p2_sidebar_divider" />
            <nav aria-label="Betting Categories">
              <ListGroup variant="flush">
                {categories.map((item, idx) => (
                  <ListGroup.Item
                    key={idx}
                    as="button"
                    action
                    className={`home_sec6_p2_menu_item ${
                      item.key === selected.key ? "active" : ""
                    } d-flex justify-content-between align-items-center`}
                    onClick={() => setSelected(item)}
                  >
                    {item.title}
                    <span className="home_sec6_p2_arrow">{">"}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </nav>
          </aside>

          {/* Main Content */}
          <article className="home_sec6_p2_main col-md-9">
            <header>
              <h3 className="home_sec6_p2_heading">
                แทงบอล for {selected.title}
              </h3>
              <hr className="home_sec6_p2_heading_bottom_line"></hr>
            </header>

            {selected.description1 && (
              <p className="home_sec6_p2_description">
                {selected.description1}
              </p>
            )}
            {selected.description2 && (
              <p className="home_sec6_p2_description">
                {selected.description2}
              </p>
            )}

            {/* <section className="home_sec6_p2_card"> */}
            <section>
              <Card className="home_sec6_p1_card mb-4 home_sec6_p2_shadow-left ">
                           
                <Card.Body>
                  <Card.Title className="home_sec6_p2_card_title">
                    In Betting (แทงบอล – {selected.title} Market)
                  </Card.Title>
                  <ul className="home_sec6_p2_list">
                    {selected.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </section>

            {selected.description3 && (
              <p className="home_sec6_p2_description">
                {selected.description3}
              </p>
            )}
          </article>
        </Row>
      </Container>
    </main>
  );
};

export default HomeSec6P2;

