import { useState } from 'react';
import './football-accumulator.css';

const leagues = [
    { key: 'premier-league', label: 'Premier League' },
    { key: 'la-liga', label: 'La Liga' },
    { key: 'serie-a', label: 'Serie A' },
    { key: 'bundesliga', label: 'Bundesliga' },
    { key: 'ligue-1', label: 'Ligue 1' },
];

const sampleMatches = {
    'premier-league': [
        {
            id: 1,
            home: 'Everton',
            away: 'Aston Villa',
            score: '0 - 0',
            stadium: 'Goodison Park',
            date: 'Sept 13, 2025',
            time: '07:00 AM BST',
            possession: { home: '47%', away: '53%', homeTeam: 'Everton', awayTeam: 'Villa' },
            shots: { home: 5, away: 3 },
            yellowCards: '1 (Villa)',
            status: 'LIVE'
        },
        {
            id: 2,
            home: 'Everton',
            away: 'Aston Villa',
            score: '0 - 0',
            stadium: 'Goodison Park',
            date: 'Sept 13, 2025',
            time: '07:00 AM BST',
            possession: { home: '47%', away: '53%', homeTeam: 'Everton', awayTeam: 'Villa' },
            shots: { home: 5, away: 3 },
            yellowCards: '1 (Villa)',
            status: 'UPCOMING'
        }
    ],
    'la-liga': [],
    'serie-a': [],
    'bundesliga': [],
    'ligue-1': []
};

const FootballAccumulator = () => {
    const [activeLeague, setActiveLeague] = useState('premier-league');

    const matches = sampleMatches[activeLeague] || [];

    return (
        <section className="football-accumulator">
            <div className="container">
                <h2 className="main-heading">Today's Football Accumulator</h2>
                <p className="heading-para">Today's Football Accumulator allows bettors to select various football matches scheduled on the same day and predict the outcomes. A football accumulator is a single wager that combines multiple selections from different matches. Each selection must result in a win for the entire bet to succeed. The odds from each leg are multiplied together, which increases the potential payout from a small stake. For example, a bettor who selects Manchester City, Juventus, and Bayern Munich to win their respective matches creates a three-fold accumulator. The bet pays out based on the combined odds if the three teams win. The entire bet loses if one team fails to win.</p>
                <p className="heading-para">A bettor selects outcomes from separate fixtures and adds each one to the bet slip to use an accumulator. The bet is confirmed after entering the stake amount. Accumulators are popular for their ability to generate high returns from modest investments. A common strategy involves selecting favorites with shorter odds to reduce risk while maintaining a multiplied payout. Football betting platforms offer features (partial cash-out or insurance), which minimize exposure to loss if one leg fails. The แทงบอล Direct Website supports single bets and accumulators. The platform allows direct access without intermediaries, which increases transaction speed and improves account control. Platforms provide real-time odds, live match listings, and secure payment systems. The structure of a direct website of แทงบอล supports various betting formats, including accumulators, across major leagues.</p>

                {/* League Tabs */}
                <div className="fa-league-tabs" role="tablist" aria-label="Leagues">
                    {leagues.map(l => (
                        <button
                            key={l.key}
                            role="tab"
                            aria-selected={activeLeague === l.key}
                            className={`fa-league-tab ${activeLeague === l.key ? 'active' : ''}`}
                            onClick={() => setActiveLeague(l.key)}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                {/* Match List */}
                <div className="fa-match-list">
                    {matches.length === 0 && (
                        <div className="fa-empty">No matches available for this league today.</div>
                    )}
                    {matches.map(match => (
                        <div key={match.id} className="fa-match-card">
                            <div className="fa-row">
                                <div className="fa-col teams">
                                    <div className="team-block">
                                        <span className="team-logo placeholder" aria-hidden="true" />
                                        <span className="team-name">{match.home}</span>
                                    </div>
                                    <div className="score-line">
                                        {match.status === 'LIVE' && <span className="badge live">LIVE</span>}
                                        {match.status === 'UPCOMING' && <span className="badge upcoming">UPCOMING</span>}
                                        <span className="score">{match.score}</span>
                                    </div>
                                    <div className="team-block">
                                        <span className="team-logo placeholder" aria-hidden="true" />
                                        <span className="team-name">{match.away}</span>
                                    </div>
                                </div>
                                <div className="fa-col stadium">
                                    <span className="label">Stadium</span>
                                    <span className="value">{match.stadium}</span>
                                </div>
                                <div className="fa-col date">
                                    <span className="label">Date</span>
                                    <span className="value">{match.date}</span>
                                </div>
                                <div className="fa-col time">
                                    <span className="label">Time</span>
                                    <span className="value">{match.time}</span>
                                </div>
                                <div className="fa-col possession">
                                    <span className="label">Possession</span>
                                    <span className="value">{match.home} {match.possession.home} – {match.away} {match.possession.away}</span>
                                </div>
                                <div className="fa-col shots">
                                    <span className="label">Shots</span>
                                    <span className="value">{match.shots.home} – {match.shots.away}</span>
                                </div>
                                <div className="fa-col yellow">
                                    <span className="label">Yellow Cards</span>
                                    <span className="value">{match.yellowCards}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FootballAccumulator;