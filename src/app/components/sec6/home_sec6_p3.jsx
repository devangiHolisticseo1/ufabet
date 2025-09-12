import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import "./home_sec6_p3.css"; // ✅ UPDATED FILE NAME

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
        description1:
            "A corner kick (commonly called a corner) is awarded when:",
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

    return (
        <div className="container">
            <h2 className="home_sec6_p3_title">แทงบอล for Football Tournaments</h2>
            <p className="home_sec6_p3_p">Your ultimate guide to football betting with trusted strategies and insights.</p>

            <Container fluid className="home_sec6_p3_container">
                <Row>
                    {/* Sidebar */}
                    <Col md={3} className="home_sec6_p3_sidebar">
                        <h5 className="home_sec6_p3_sidebar_title">Headings</h5>
                        <hr className="home_sec6_p3_sidebar_divider" />
                        <ListGroup variant="flush">
                            {categories.map((item, idx) => (
                                <ListGroup.Item
                                    key={idx}
                                    action
                                    className={`home_sec6_p3_menu_item ${item.key === selected.key ? "active" : ""} d-flex justify-content-between align-items-center`}
                                    onClick={() => setSelected(item)}
                                >
                                    {item.title}
                                    <span className="home_sec6_p3_arrow">{">"}</span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Main Content */}
                    <Col md={9} className="home_sec6_p3_main">
                        <h3 className="home_sec6_p3_heading"> แทงบอล for  {selected.title}</h3>

                        {selected.description1 && (
                            <p className="home_sec6_p3_description">{selected.description1}</p>
                        )}
                        {selected.description2 && (
                            <p className="home_sec6_p3_description">{selected.description2}</p>
                        )}

                        <Card className="home_sec6_p3_card">
                            <Card.Body>
                                <Card.Title className="home_sec6_p3_card_title">Key Insights:</Card.Title>
                                <ul className="home_sec6_p3_list">
                                    {selected.tips.map((tip, i) => (
                                        <li key={i}>{tip}</li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>

                        {selected.description3 && (
                            <p className="home_sec6_p3_description">{selected.description3}</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeSec6P3;
