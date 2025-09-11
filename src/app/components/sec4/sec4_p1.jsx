// Sec4P1.js
import { useState } from 'react';
import './sec4_p1.css';
import Image from 'next/image';

// import allMarketsIcon from '/images/home/sec4/global--markets--bar_1_.png';
// import leaguesIcon from '/images/home/sec4/Group 87272.png';
// import teamsIcon from '/images/home/sec4/Vector.png';
// import othersIcon from '/images/home/sec4/Vector (1).png';


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
    logo: '⚽'
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
    logo: '⚽'
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
    logo: '⚽'
  },
];

function Sec4P1() {
  const [filter, setFilter] = useState('all');

  const filteredMatches = filter === 'all'
    ? matchData
    : matchData.filter(match => match.category === filter);

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
    <div className="home_sec4_p1_container">
      {/* Header */}
      <div className="home_sec4_p1_header">
        24-Hour Over/Under Markets
      </div>

      {/* Filter Buttons */}
      <div className="home_sec4_p1_filters d-flex justify-content-center mb-4">
        {['all', 'leagues', 'teams', 'others'].map(type => (
          <button
            key={type}
            className={`home_sec4_p1_filter_btn ${filter === type ? 'active' : ''} btn d-flex align-items-center`}
            onClick={() => setFilter(type)}
          >
            <span className="home_sec4_p1_filter_icon">{getFilterIcon(type)}</span>
            {getFilterLabel(type)}
          </button>
        ))}
      </div>

      {/* Match Cards */}
      <div className=" container">
        {filteredMatches.map(match => (
          <div key={match.id} className="home_sec4_p1_match_card card mb-3">
            {/* Match Header */}
            <div className="home_sec4_p1_match_header d-flex justify-content-between align-items-center p-3 border-bottom">
              <div className="d-flex align-items-center">
                <div className="home_sec4_p1_team_logo d-flex align-items-center justify-content-center rounded-circle me-3">
                  {match.logo}
                </div>
                <div>
                  <div className="home_sec4_p1_team_name fw-bold mb-1">
                    {match.team}
                  </div>
                  <div className="home_sec4_p1_league_name small">
                    {match.league}
                  </div>
                </div>
              </div>
              <div className="home_sec4_p1_match_time">
                {match.time}
              </div>
            </div>

            {/* Opponent */}
            <div className="home_sec4_p1_opponent p-2 px-3 border-bottom small">
              vs {match.opponent}
            </div>

            {/* Odds Section */}
            <div className="home_sec4_p1_odds_section d-flex">
              {/* Over Section */}
              <div className="home_sec4_p1_odds_box home_sec4_p1_over_box d-flex flex-column justify-content-center align-items-center position-relative">
                <div className="home_sec4_p1_odds_label position-absolute">
                  OVER
                </div>
                <div className="home_sec4_p1_odds_trend position-absolute">

                  <Image src="/images/home/sec4/up.png" className="img-fluid" alt="up" width={14} height={9} />

                </div>
                <div className="home_sec4_p1_odds_value fw-bold mb-1">
                  2.5
                </div>
                <div className="home_sec4_p1_odds_rate fw-bold">
                  {match.over}
                </div>
              </div>

              {/* Under Section */}
              <div className="home_sec4_p1_odds_box home_sec4_p1_under_box d-flex flex-column justify-content-center align-items-center position-relative">
                <div className="home_sec4_p1_odds_label position-absolute">
                  UNDER
                </div>
                <div className="home_sec4_p1_odds_trend position-absolute">
                  <Image src="/images/home/sec4/down.png" className="img-fluid" alt="down" width={14} height={9} />


                </div>
                <div className="home_sec4_p1_odds_value fw-bold mb-1">
                  2.5
                </div>
                <div className="home_sec4_p1_odds_rate fw-bold">
                  {match.under}
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredMatches.length === 0 && (
          <div className="home_sec4_p1_no_matches text-center text-muted p-5">
            No matches found for this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default Sec4P1;
