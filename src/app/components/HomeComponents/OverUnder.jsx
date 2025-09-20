"use client";

import Image from "next/image";
import { useState } from "react";

const matchData = [
  {
    id: 1,
    team: 'Liverpool',
    league: 'Premier League',
    opponent: 'Arsenal',
    category: 'leagues',
    time: '20:00',
    over: '1.85',
    under: '1.95',
    logo: '/images/home/sec4/Image 132.png'
  },
  {
    id: 2,
    team: 'Chelsea',
    league: 'Premier League',
    opponent: 'Man City',
    category: 'teams',
    time: '20:00',
    over: '1.85',
    under: '1.95',
    logo: '/images/home/sec4/Image 132 (1).png'
  },
  {
    id: 3,
    team: 'Liverpool',
    league: 'Premier League',
    opponent: 'Arsenal',
    category: 'others',
    time: '20:00',
    over: '1.85',
    under: '1.95',
    logo: '/images/home/sec4/Image 133.png'
  },
];

const OverUnder = () => {
    const [showFullText, setShowFullText] = useState(false);
    const [filter, setFilter] = useState('all');

    const filteredMatches = filter === 'all'
    ? matchData
    : matchData.filter(match => match.category === filter);

    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    };

    const getFilterIcon = (type) => {
        switch (type) {
            case 'all': return <Image src="/images/home/sec4/global--markets--bar_1_.png" alt="all markets" width={20} height={20} className='img-fluid' />;
            case 'leagues': return <Image src="/images/home/sec4/Group 87272.png" alt="leagus" width={20} height={20} className='img-fluid' />;
            case 'teams': return <Image src="/images/home/sec4/Vector.png" alt="teams" width={20} height={20} className='img-fluid' />;
            case 'others': return <Image src="/images/home/sec4/Vector (1).png" alt="others" width={20} height={20} className='img-fluid' />;
            default: return '';
        }
    };

    const getFilterLabel = (type) => {
        switch (type) {
            case 'all': return 'All Markets';
            case 'leagues': return 'Leagues';
            case 'teams': return 'Teams';
            case 'others': return 'Others';
            default: return type;
        }
    };

    return (
        <div className="over-under">
            <div className="container">
                <h2 className="main-heading">See แทงบอล Odds for Over/Under</h2>
                <p className="heading-para">Over/Under football betting presents a method for predicting the total number of goals scored in a match. The bookmaker sets a numerical threshold (goal line). A wager is placed on whether the combined goals from both teams exceed or fall below that number. The final score determines the outcome of the bet, regardless of which team wins.</p>
                <div className="row football-odd-wrap">
                    <div className="col-md-4">
                        <div className="football-odd-card">
                            <h3 className="card-title">ODDS</h3>
                            <p>
                                “Odds” refer to the numerical value assigned to a betting outcome. Decimal odds express the potential return
                                {!showFullText && (
                                    <span className="read-more-btn" onClick={toggleReadMore}>
                                        Read More
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="football-odd-card">
                            <h3 className="card-title">OVER</h3>
                            <p>
                                “Over” applies when the total number of goals scored exceeds the goal line. A match ending 3–1, 2–2, or 4–0
                                {!showFullText && (
                                    <span className="read-more-btn" onClick={toggleReadMore}>
                                        Read More
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="football-odd-card">
                            <h3 className="card-title">UNDER</h3>
                            <p>
                                “Under” applies when the total number of goals remains below the goal line. A score of 1–0, 1–1, or 2–0
                                {!showFullText && (
                                    <span className="read-more-btn" onClick={toggleReadMore}>
                                        Read More
                                    </span>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="theme-ul-wrapper mt-30">
                            <p className="ul-caption">
                                Advantages of using direct websites for football betting with UFABET and SBOBET are listed below:
                            </p>
                            <ul className="theme-ul">
                                <li>Real-time access to odds without third-party involvement.</li>
                                <li>Fast settlement and secure payment systems.</li>
                                <li>Filters for league, team, match time, and goal line.</li>
                                <li>Transparent pricing with consistent updates.</li>
                                <li>Mobile-friendly interface for quick navigation.</li>
                            </ul>
                            <p className="ul-footer-caption">Odds are indicative and for demonstration purposes only responsible gambling • 18+ only</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h3 className="sub-heading mt-70">Over/Under Football Betting Odds for 24 Hours (Today)</h3>
                        <p className="heading-para">Over/Under Football Betting Odds for 24 hours are the numerical values assigned to wagers predicting whether the total number of goals scored in a match falls above or below a predefined threshold. Bookmakers publish the odds for matches scheduled within the current day, covering various leagues and competitions. Each match receives a goal line (2.5), which serves as the benchmark for determining the outcome of the bet. A wager placed on Over expects the combined score from both teams to exceed the line, while a wager placed on Under anticipates fewer goals than the line.</p>
                        <div className="tabs-header">
                            {['all', 'leagues', 'teams', 'others'].map(type => (
                                <button
                                    key={type}
                                    className={`tabs-btn ${filter === type ? 'active' : ''} btn`}
                                    onClick={() => setFilter(type)}
                                >
                                    <span className="home_sec4_p1_filter_icon">{getFilterIcon(type)}</span>
                                    <p>{getFilterLabel(type)}</p>
                                </button>
                            ))}
                        </div>
                        <div className="container">
                            {filteredMatches.map(match => (
                                <div key={match.id} className="tab-content">
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
                                            </figure>
                                            <div>
                                                <div className="header-heading">
                                                    {match.team}
                                                </div>
                                                <div className="header-league">
                                                    {match.league}
                                                </div>
                                            </div>
                                        </div>
                                        <time className="match-time">{match.time}</time>
                                    </header>

                                    {/* Opponent */}
                                    <p className="opponent">
                                        vs {match.opponent}
                                    </p>

                                    {/* Odds Section */}
                                    <div className="odds-over-section row">
                                        {/* Over Section */}
                                        <div className="col-md-6">
                                            <div className="odds-over-box">
                                                <div className="odds-over-label">OVER</div>
                                                <div className="odds-over-trend">
                                                    <Image src="/images/home/sec4/up.png" className="img-fluid" alt="up" width={14} height={9} />
                                                </div>
                                                <div className="odds-over-value">2.5</div>
                                                <div className="odds-over-rate">{match.over}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="odds-over-box">
                                                <div className="odds-over-label">UNDER</div>
                                                <div className="odds-over-trend">
                                                    <Image src="/images/home/sec4/up.png" className="img-fluid" alt="up" width={14} height={9} />
                                                </div>
                                                <div className="odds-over-value">2.5</div>
                                                <div className="odds-over-rate">{match.under}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Match Footer */}
                                    <footer className="visually-hidden">
                                        {/* Reserved for semantic closure if needed */}
                                    </footer>
                                </div>
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
        </div>
    )
};

export default OverUnder;