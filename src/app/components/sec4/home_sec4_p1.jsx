// Sec4P1.js
import { useState } from 'react';
import './home_sec4_p1.css';
import Image from 'next/image';

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
    <section className="home_sec4_p1_container">
      {/* Filter Buttons */}
      {/* <nav className="home_sec4_p1_filters d-flex justify-content-center mb-4" aria-label="Match filters">
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
      </nav> */}

      <nav
  className="home_sec4_p1_filters container mb-4"
  aria-label="Match filters"
>
  <div className="row">
    {['all', 'leagues', 'teams', 'others'].map(type => (
      <div key={type} className="col-6 col-md-3 mb-3 d-flex justify-content-center">
        <button
          className={`home_sec4_p1_filter_btn ${filter === type ? 'active' : ''} btn d-flex align-items-center`}
          onClick={() => setFilter(type)}
        >
          <span className="home_sec4_p1_filter_icon">{getFilterIcon(type)}</span>
          <p>{getFilterLabel(type)}</p>
        </button>
      </div>
    ))}
  </div>
</nav>


      {/* Match Cards */}
      <section className="container">
        {filteredMatches.map(match => (
          <article key={match.id} className="home_sec4_p1_match_card card mb-3">
            {/* Match Header */}
            <header className="home_sec4_p1_match_header d-flex justify-content-between align-items-center p-3">
              <div className="d-flex align-items-center">
                <figure className="home_sec4_p1_team_logo d-flex align-items-center justify-content-center rounded-circle me-3 mb-0">
                  <Image
                    src={match.logo}
                    alt={`${match.team} logo`}
                    width={32}
                    height={32}
                    className="rounded-circle img-fluid"
                  />
                </figure>
                <div>
                  <div className="home_sec4_p1_team_name fw-bold mb-1">
                    {match.team}
                  </div>
                  <div className="home_sec4_p1_league_name small">
                    {match.league}
                  </div>
                </div>
              </div>
              <time className="home_sec4_p1_match_time">{match.time}</time>
            </header>

            {/* Opponent */}
            <p className="home_sec4_p1_opponent p-2 px-3 mb-0">
              vs {match.opponent}
            </p>

            {/* Odds Section */}
            <section className="home_sec4_p1_odds_section d-flex">
              {/* Over Section */}
              <div className="home_sec4_p1_odds_box home_sec4_p1_over_box d-flex flex-column justify-content-center align-items-center position-relative">
                <div className="home_sec4_p1_odds_label position-absolute">OVER</div>
                <div className="home_sec4_p1_odds_trend position-absolute">
                  <Image src="/images/home/sec4/up.png" className="img-fluid" alt="up" width={14} height={9} />
                </div>
                <div className="home_sec4_p1_odds_value fw-bold mb-1">2.5</div>
                <div className="home_sec4_p1_odds_rate fw-bold">{match.over}</div>
              </div>

              {/* Under Section */}
              <div className="home_sec4_p1_odds_box home_sec4_p1_under_box d-flex flex-column justify-content-center align-items-center position-relative">
                <div className="home_sec4_p1_odds_label position-absolute">UNDER</div>
                <div className="home_sec4_p1_odds_trend position-absolute">
                  <Image src="/images/home/sec4/down.png" className="img-fluid" alt="down" width={14} height={9} />
                </div>
                <div className="home_sec4_p1_odds_value fw-bold mb-1">2.5</div>
                <div className="home_sec4_p1_odds_rate fw-bold">{match.under}</div>
              </div>
            </section>

            {/* Match Footer */}
            <footer className="visually-hidden">
              {/* Reserved for semantic closure if needed */}
            </footer>
          </article>
        ))}

        {filteredMatches.length === 0 && (
          <aside className="home_sec4_p1_no_matches text-center text-muted p-5">
            No matches found for this category.
          </aside>
        )}
      </section>
    </section>
  );
}

export default Sec4P1;

