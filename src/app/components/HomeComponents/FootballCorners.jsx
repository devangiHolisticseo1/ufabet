"use client";

import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

const categories = [
  {
    title: "แทงบอล for World Cup",
    key: "world_cup",
    description1:
      "The FIFA World Cup is the pinnacle of international football, held every four years. It brings together the best national teams from around the globe to compete for the most prestigious trophy in sports.",
    description2:
      "Betting on the World Cup offers an unparalleled experience, with numerous markets available from group stage matches to the grand final. You can place wagers on match winners, total goals, goal scorers, handicaps, and outright tournament winners.",
    description3:
      'Instructional Definition: แทงบอล (Tang Ball) literally translates to "bet on football" in Thai. It refers to the act of placing wagers on football matches, encompassing various types of bets and markets offered by bookmakers.',
    image: "/images/home/sec6/world_cup_goal.png",
    tips: [
      "Research team forms and player injuries meticulously.",
      "Consider historical performance in previous World Cups.",
      "Look for value in underdog matches during the group stages.",
      "Pay attention to host nation advantages.",
    ],
  },
  {
    title: "แทงบอล for Euro",
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
    title: "แทงบอล for AFC Cup",
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

const FootballCorners = () => {
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
		<section className="vertical-tab">
			<div className="container">
				<h2 className="main-heading">แทงบอล for Corners, Posessions, Cleansheets</h2>
				<p className="heading-para">Football betting markets go beyond just goals and results. Many advanced bettors use team performance stats such as corners, possession, and clean sheets to find value.</p>
				{!isMobile ? (
					<div className="container">
						<div className="row">
							<div className="col-md-3 tab-sidebar">
								<h3 className="tab-sidebar-title">Select Tournament</h3>
								<hr className="tab-sidebar-divider" />
								<div aria-label="Tournament Navigation">
									<ListGroup variant="flush">
										{categories.map((item, idx) => (
											<ListGroup.Item
												key={idx}
												action
												className={`tab-menu-item ${item.key === selected.key ? "active" : "" }`}
												onClick={() => setSelected(item)}
											>
												{item.title}
												<span className="tab-arrow">{">"}</span>
											</ListGroup.Item>
										))}
									</ListGroup>
								</div>
							</div>
							<div className="col-md-9 vertical-tab-content">
								<header>
									<h3 className="tab-content-heading">{selected.title}</h3>
									<hr className="tab-content-heading-line" />
								</header>

								{selected.description1 && (
									<p>{selected.description1}</p>
								)}
								{selected.description2 && (
									<p>{selected.description2}</p>
								)}
								<Card className="key-insights-box">
									<Card.Body>
										<Card.Title className="key-insights-title">Key Insights:</Card.Title>
										<ul className="key-insights-list">
											{selected.tips.map((tip, i) => (
												<li key={i}>{tip}</li>
											))}
										</ul>
									</Card.Body>
								</Card>

								{selected.description3 && (
									<p className="home_sec6_p1_description">{selected.description3}</p>
								)}
							</div>
						</div>
					</div>
				) : (
					// ✅ Mobile Accordion Layout
					<div
						className="container"
						aria-label="Tournament Betting Guides"
					>

						{/* <h3 className="home_sec6_p1_sidebar_title">Select Tournament</h3> */}
						{/* <hr className="home_sec6_p1_sidebar_divider" /> */}

						<div
							className="accordion home_sec7_reuse_6_accordion accordion-flush"
							id="homeSec6Accordion"
						>
							{categories.map((item, idx) => (
								<article className="accordion-item home_sec7_reuse_6_item" key={idx}>
									<h3 className="accordion-header">
										<button
											className={`res-tab-menu-item ${openItem === item.key ? "" : "collapsed"
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

											<h3 className="tab-content-heading">แทงบอล for {selected.title}</h3>
											<hr className="home_sec6_p2_heading_bottom_line" />
											{item.description1 && (
												<p>{item.description1}</p>
											)}
											{item.description2 && (
												<p>{item.description2}</p>
											)}

											<Card className="key-insights-box">
												<Card.Body>
													<Card.Title className="key-insights-title">Key Insights:</Card.Title>
													<ul className="key-insights-list">
														{item.tips.map((tip, i) => (
															<li key={i}>{tip}</li>
														))}
													</ul>
												</Card.Body>
											</Card>

											{item.description3 && (
												<p>{item.description3}</p>
											)}
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default FootballCorners;