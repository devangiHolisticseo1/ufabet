import React, { useState } from 'react';

const bettingTypes = [
  'Handicap Betting (HDP)',
  'Over/Under (O/U)',
  '1X2 Football Betting (Money Line)',
  'Odd/Even (O/E) Betting',
  'Mix Parlay',
  'Correct Score',
  'Half Time/Full Time (HT/FT)',
  'Double Chance',
  'Draw No Bet (DNB)',
  'Both Teams to Score (BTTS)',
  'Asian Handicap',
  'Total Goals',
  'First Goal/Last Goal',
  'Clean Sheet Betting',
  'Exact Goals Betting',
  'Winning Margin',
  'Scorecast',
  'Wincast',
  'Live/In-Play Betting',
  'Outright/Futures Betting',
  'Cards Betting (Yellow/Red)',
  'Corners Betting',
  'Player Specials (Goals, Assists, Shots)',
  'Team Specials (Possession, Shots, Fouls)',
  'Penalty Taken/Scored',
  'First Half Betting',
  'Second Half Betting',
  'Accumulators',
  'System Bets',
  'Online football accumulator betting'
];

const bettingContent = {
  'Handicap Betting (HDP)': {
    title: 'Handicap Betting (HDP)',
    description:
      'Handicap betting is popular for evening out the playing field between two teams of different strengths. A virtual advantage or disadvantage is given to a team to adjust the odds.',
    types: [
      {
        name: 'Level Handicap',
        description:
          'No team is given a head start. If you bet on a team, they simply need to win the match outright for your bet to succeed.'
      },
      {
        name: 'Single Handicap',
        description:
          'One team is given a positive or negative goal advantage (e.g. +1 or -1). For instance, if Team A has -1 handicap, they must win by 2 or more goals for the bet to win.'
      },
      {
        name: 'Split Handicap (Quarter Handicap)',
        description:
          'Your stake is divided across two handicaps (e.g. -0.5 and -1.0). This helps reduce risk as part of your bet may still win or be refunded if the result is close.'
      },
      {
        name: 'Asian Handicap',
        description:
          'Eliminates the possibility of a draw by using half or quarter goal handicaps. This type is popular in football betting, ensuring more clarity on win/lose outcomes.'
      }
    ],
    expandable: [
      {
        title: 'Understanding Odds',
        content:
          'Odds represent the probability of an outcome and determine your potential winnings. Higher odds mean lower probability but greater rewards.'
      },
      {
        title: 'Strategic Consideration',
        content:
          'Consider team form, injuries, head-to-head records, and home advantage when making handicap bets.'
      }
    ],
    when: "Handicap betting is ideal when there's a clear favorite, but their win odds are too low to be attractive. By giving the favorite a handicap, you can get better odds. Conversely, betting on an underdog with a positive handicap can offer a safety net.",
    example: {
      title: 'Example Scenario',
      content:
        'Consider a match between Manchester City (strong favorite) and Fulham (underdog). The odds for a straight Man City win might be very low (e.g. 1.30). A bookmaker might offer a handicap like:',
      scenarios: [
        'Manchester City: -1.5 goals (odds: 1.80)',
        'Fulham: +1.5 goals (odds: 1.95)'
      ],
      explanation:
        'If you bet on Man City -1.5, they need to win by 2 or more goals (e.g. 2-0, 3-1). If you bet on Fulham +1.5, Fulham can lose by only 1 goal, draw, or win and your bet wins.'
    },
    takeaway:
      'Handicap betting requires a good understanding of team strengths and weaknesses to predict how a team will perform relative to a virtual head start or deficit.'
  },
  'Over/Under (O/U)': {
    title: 'Over/Under (O/U) Betting',
    description:
      'Over/Under betting involves predicting whether the total number of goals, points, or other statistics will be above (over) or below (under) a specified number set by the bookmaker.',
    types: [
      {
        name: 'Total Goals',
        description: 'Bet on whether the total number of goals in a match will be over or under a set number.'
      },
      {
        name: 'Team Total Goals',
        description: 'Bet on whether a specific team will score over or under a certain number of goals.'
      },
      {
        name: 'Half-Time Over/Under',
        description: 'Predict the number of goals scored in just the first half of the match.'
      }
    ],
    when:
      'Over/Under betting works well when you have insights into team playing styles, defensive strength, and attacking capabilities.',
    takeaway:
      'Analyze team statistics, recent form, and head-to-head records to make informed Over/Under predictions.'
  }
};

const TypesOnlineFootball = () => {
  const [selectedBetting, setSelectedBetting] = useState('Handicap Betting (HDP)');
  const [expandedSections, setExpandedSections] = useState({});

  const handleBettingClick = bettingType => {
    setSelectedBetting(bettingType);
    setExpandedSections({});
  };

  const toggleExpanded = section => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const currentContent = bettingContent[selectedBetting] || bettingContent['Handicap Betting (HDP)'];
  return (
    <div className="types-of-football">
      <div className="container">
        <h2 className="main-heading">What Types of Online Football Betting are There?</h2>
        <p className="heading-para">
          Understanding the various types of online football betting is crucial for developing
          effective strategies. Each market offers unique opportunities and risks. Here's a
          breakdown of common betting types:
        </p>

        <div className="row">
          {/* Sidebar */}
          <aside className="col-lg-3 col-md-5">
            <nav className="types-of-football-list" aria-label="Betting types navigation">
              {bettingTypes.map((type, index) => (
                <button
                  key={index}
                  className={`types-of-football-item ${selectedBetting === type ? 'active' : ''}`}
                  onClick={() => handleBettingClick(type)}
                >
                  {type}
                </button>
              ))}
            </nav>
          </aside>
          {/* Main Content */}
          <article className="col-lg-9 col-md-7 types-of-football-content">
            <div className="types-of-football-wrapper">
              <header className="">
                <h3 className="types-of-football-title">{currentContent.title}</h3>
              </header>

              <div className="">
                <p className="types-of-football-description">{currentContent.description}</p>

                {/* Types of Handicap as Accordion */}
                {currentContent.types && (
                  <div className="types-of-football-sections">
                    <div className="types-of-football-expandable-item">
                      <button
                        className={`types-of-football-expandable-header ${expandedSections['Types of Handicap'] ? 'expanded' : ''}`}
                        onClick={() => toggleExpanded('Types of Handicap')}
                        aria-expanded={expandedSections['Types of Handicap'] || false}
                      >
                        <span>Types of Handicap</span>
                        <span className="types-of-football-expand-icon">
                          {expandedSections['Types of Handicap'] ? '−' : '+'}
                        </span>
                      </button>
                      {expandedSections['Types of Handicap'] && (
                        <div className="types-of-football-expandable-content">
                          <p className="home_sec9_types_intro">
                            Handicap betting comes in several forms, each designed to balance the odds and provide more exciting betting opportunities:
                          </p>
                          <ul className="types-of-football-list">
                            {currentContent.types.map((type, index) => (
                              <li key={index} className="types-of-football-scenario-item">
                                <strong className="types-of-football-type-name">{type.name}:</strong>
                                <p className="types-of-football-description">{type.description}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Other Expandable Sections */}
                {currentContent.expandable && (
                  <div className="types-of-football-expandable-sections">
                    {currentContent.expandable.map((section, index) => (
                      <div key={index} className="types-of-football-expandable-item">
                        <button
                          className={`types-of-football-expandable-header ${expandedSections[section.title] ? 'expanded' : ''
                            }`}
                          onClick={() => toggleExpanded(section.title)}
                          aria-expanded={expandedSections[section.title] || false}
                        >
                          <span>{section.title}</span>
                          <span className="types-of-football-expand-icon">
                            {expandedSections[section.title] ? '−' : '+'}
                          </span>
                        </button>
                        {expandedSections[section.title] && (
                          <div className="types-of-football-expandable-content">
                            <p>{section.content}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* When to Use Section */}
                {currentContent.when && (
                  <div className="types-of-football-when-section">
                    <h4 className="types-of-football-when-title">When to Use Handicap Betting</h4>
                    <p className="types-of-football-when-content">{currentContent.when}</p>
                  </div>
                )}

                {/* Example Section */}
                {currentContent.example && (
                  <div className="types-of-football-when-section">
                    <h4 className="types-of-football-when-title">{currentContent.example.title}</h4>
                    <p className="types-of-football-when-content">{currentContent.example.content}</p>
                    {currentContent.example.scenarios && (
                      <ul className="types-of-football-scenario-list">
                        {currentContent.example.scenarios.map((scenario, index) => (
                          <li key={index} className="types-of-football-scenario-item">
                            {scenario}
                          </li>
                        ))}
                      </ul>
                    )}
                    {currentContent.example.explanation && (
                      <p className="types-of-football-when-content">{currentContent.example.explanation}</p>
                    )}
                  </div>
                )}

                {/* Key Takeaway */}
                {currentContent.takeaway && (
                  <div className="types-of-football-when-section">
                    <h4 className="types-of-football-when-title">Key Takeaway</h4>
                    <p className="types-of-football-when-content">{currentContent.takeaway}</p>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TypesOnlineFootball;
