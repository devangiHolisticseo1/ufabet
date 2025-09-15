// import React, { useState } from 'react';
// import './home_sec9.css'

// const bettingTypes = [
//     'Handicap Betting (HDP)',
//     'Over/Under (O/U)',
//     '1X2 Football Betting (Money Line)',
//     'Odd/Even (O/E) Betting',
//     'Mix Parlay',
//     'Correct Score',
//     'Half Time/Full Time (HT/FT)',
//     'Double Chance',
//     'Draw No Bet (DNB)',
//     'Both Teams to Score (BTTS)',
//     'Asian Handicap',
//     'Total Goals',
//     'First Goal/Last Goal',
//     'Clean Sheet Betting',
//     'Exact Goals Betting',
//     'Winning Margin',
//     'Scorecast',
//     'Wincast',
//     'Live/In-Play Betting',
//     'Outright/Futures Betting',
//     'Cards Betting (Yellow/Red)',
//     'Corners Betting',
//     'Player Specials (Goals, Assists, Shots)',
//     'Team Specials (Possession, Shots, Fouls)',
//     'Penalty Taken/Scored',
//     'First Half Betting',
//     'Second Half Betting',
//     'Accumulators',
//     'System Bets',
//     'Online football accumulator betting'
// ];

// const bettingContent = {
//     'Handicap Betting (HDP)': {
//         title: 'Handicap Betting (HDP)',
//         description: 'Handicap betting is popular for evening out the playing field between two teams of different strengths. A virtual advantage or disadvantage is given to a team to adjust the odds.',
//         types: [
//             {
//                 name: 'Level Handicap',
//                 description: 'No team is given a head start. If you bet on a team, they simply need to win the match outright for your bet to succeed.'
//             },
//             {
//                 name: 'Single Handicap',
//                 description: 'One team is given a positive or negative goal advantage (e.g. +1 or -1). For instance, if Team A has -1 handicap, they must win by 2 or more goals for the bet to win.'
//             },
//             {
//                 name: 'Split Handicap (Quarter Handicap)',
//                 description: 'Your stake is divided across two handicaps (e.g. -0.5 and -1.0). This helps reduce risk as part of your bet may still win or be refunded if the result is close.'
//             },
//             {
//                 name: 'Asian Handicap',
//                 description: 'Eliminates the possibility of a draw by using half or quarter goal handicaps. This type is popular in football betting, ensuring more clarity on win/lose outcomes.'
//             }
//         ],
//         expandable: [
//             {
//                 title: 'Understanding Odds',
//                 content: 'Odds represent the probability of an outcome and determine your potential winnings. Higher odds mean lower probability but greater rewards.'
//             },
//             {
//                 title: 'Strategic Consideration',
//                 content: 'Consider team form, injuries, head-to-head records, and home advantage when making handicap bets.'
//             }
//         ],
//         when: 'Handicap betting is ideal when there\'s a clear favorite, but their win odds are too low to be attractive. By giving the favorite a handicap, you can get better odds. Conversely, betting on an underdog with a positive handicap can offer a safety net.',
//         example: {
//             title: 'Example Scenario',
//             content: 'Consider a match between Manchester City (strong favorite) and Fulham (underdog). The odds for a straight Man City win might be very low (e.g. 1.30). A bookmaker might offer a handicap like:',
//             scenarios: [
//                 'Manchester City: -1.5 goals (odds: 1.80)',
//                 'Fulham: +1.5 goals (odds: 1.95)'
//             ],
//             explanation: 'If you bet on Man City -1.5, they need to win by 2 or more goals (e.g. 2-0, 3-1). If you bet on Fulham +1.5, Fulham can lose by only 1 goal, draw, or win and your bet wins.'
//         },
//         takeaway: 'Handicap betting requires a good understanding of team strengths and weaknesses to predict how a team will perform relative to a virtual head start or deficit.'
//     },
//     'Over/Under (O/U)': {
//         title: 'Over/Under (O/U) Betting',
//         description: 'Over/Under betting involves predicting whether the total number of goals, points, or other statistics will be above (over) or below (under) a specified number set by the bookmaker.',
//         types: [
//             {
//                 name: 'Total Goals',
//                 description: 'Bet on whether the total goals scored by both teams will be over or under a specific number (e.g., Over 2.5 goals).'
//             },
//             {
//                 name: 'Team Total Goals',
//                 description: 'Bet on whether a specific team will score over or under a certain number of goals.'
//             },
//             {
//                 name: 'Half-Time Over/Under',
//                 description: 'Predict the number of goals scored in just the first half of the match.'
//             }
//         ],
//         when: 'Over/Under betting works well when you have insights into team playing styles, defensive strength, and attacking capabilities.',
//         takeaway: 'Analyze team statistics, recent form, and head-to-head records to make informed Over/Under predictions.'
//     }
// };

// const HomeSec9 = () => {
//     const [selectedBetting, setSelectedBetting] = useState('Handicap Betting (HDP)');
//     const [expandedSections, setExpandedSections] = useState({});

//     const handleBettingClick = (bettingType) => {
//         setSelectedBetting(bettingType);
//         setExpandedSections({});
//     };

//     const toggleExpanded = (section) => {
//         setExpandedSections(prev => ({
//             ...prev,
//             [section]: !prev[section]
//         }));
//     };

//     const currentContent = bettingContent[selectedBetting] || bettingContent['Handicap Betting (HDP)'];

//     return (
//         <div>
//             <div className='home_sec9_upper_div'>
//                 <h2 className='home_sec9_upper_div_title'>Online Football Betting Strategies</h2>
//             </div>


//             <div className="container home_sec9_container">
//                 <h2 className='home_sec9_title'>What Types of Online Football Betting are There?</h2>
//                 <p className='home_sec9_title_p'>Understanding the various types of online football betting is crucial for developing effective strategies. Each market offers unique opportunities and risks. Here's a breakdown of common betting types:</p>

//                 <div className="row">
//                     {/* Sidebar */}
//                     <div className="col-md-3 home_sec9_sidebar">
//                         <div className="home_sec9_betting_list">
//                             {bettingTypes.map((type, index) => (
//                                 <button
//                                     key={index}
//                                     className={`home_sec9_betting_item ${selectedBetting === type ? 'home_sec9_active' : ''}`}
//                                     onClick={() => handleBettingClick(type)}
//                                 >
//                                     {type}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Main Content */}
//                     <div className="col-md-9 home_sec9_main_content">
//                         <div className="home_sec9_content_wrapper">
//                             <div className="home_sec9_header">
//                                 <h4 className="home_sec9_content_title">{currentContent.title}</h4>
//                             </div>

//                             <div className="home_sec9_content_body">
//                                 <p className="home_sec9_description">{currentContent.description}</p>

//                                 {/* Types of Handicap as Accordion */}
//                                 {currentContent.types && (
//                                     <div className="home_sec9_expandable_sections">
//                                         <div className="home_sec9_expandable_item">
//                                             <button
//                                                 className={`home_sec9_expandable_header ${expandedSections['Types of Handicap'] ? 'home_sec9_expanded' : ''}`}
//                                                 onClick={() => toggleExpanded('Types of Handicap')}
//                                             >
//                                                 <span>Types of Handicap</span>
//                                                 <span className="home_sec9_expand_icon">
//                                                     {expandedSections['Types of Handicap'] ? '−' : '+'}
//                                                 </span>
//                                             </button>
//                                             {expandedSections['Types of Handicap'] && (
//                                                 <div className="home_sec9_expandable_content">
//                                                     <p className="home_sec9_types_intro">
//                                                         Handicap betting comes in several forms, each designed to balance the odds and provide more exciting betting opportunities:
//                                                     </p>
//                                                     <ul className="home_sec9_types_list">
//                                                         {currentContent.types.map((type, index) => (
//                                                             <li key={index} className="home_sec9_type_item">
//                                                                 <span className="home_sec9_type_name">{type.name}:</span>
//                                                                 <p className="home_sec9_type_description">{type.description}</p>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Other Expandable Sections */}
//                                 {currentContent.expandable && (
//                                     <div className="home_sec9_expandable_sections">
//                                         {currentContent.expandable.map((section, index) => (
//                                             <div key={index} className="home_sec9_expandable_item">
//                                                 <button
//                                                     className={`home_sec9_expandable_header ${expandedSections[section.title] ? 'home_sec9_expanded' : ''}`}
//                                                     onClick={() => toggleExpanded(section.title)}
//                                                 >
//                                                     <span>{section.title}</span>
//                                                     <span className="home_sec9_expand_icon">
//                                                         {expandedSections[section.title] ? '−' : '+'}
//                                                     </span>
//                                                 </button>
//                                                 {expandedSections[section.title] && (
//                                                     <div className="home_sec9_expandable_content">
//                                                         <p>{section.content}</p>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}

//                                 {/* When to Use Section */}
//                                 {currentContent.when && (
//                                     <div className="home_sec9_when_section">
//                                         <h5 className="home_sec9_when_title">When to Use Handicap Betting</h5>
//                                         <p className="home_sec9_when_content">{currentContent.when}</p>
//                                     </div>
//                                 )}

//                                 {/* Example Section */}
//                                 {currentContent.example && (
//                                     <div className="home_sec9_example_section">
//                                         <h5 className="home_sec9_example_title">{currentContent.example.title}</h5>
//                                         <p className="home_sec9_example_content">{currentContent.example.content}</p>
//                                         {currentContent.example.scenarios && (
//                                             <ul className="home_sec9_scenario_list">
//                                                 {currentContent.example.scenarios.map((scenario, index) => (
//                                                     <li key={index} className="home_sec9_scenario_item">{scenario}</li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                         {currentContent.example.explanation && (
//                                             <p className="home_sec9_explanation">{currentContent.example.explanation}</p>
//                                         )}
//                                     </div>
//                                 )}

//                                 {/* Key Takeaway */}
//                                 {currentContent.takeaway && (
//                                     <div className="home_sec9_takeaway_section">
//                                         <h5 className="home_sec9_takeaway_title">Key Takeaway</h5>
//                                         <p className="home_sec9_takeaway_content">{currentContent.takeaway}</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default HomeSec9;





import React, { useState } from 'react';
import './home_sec9.css';

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
        description:
          'Bet on whether the total goals scored by both teams will be over or under a specific number (e.g., Over 2.5 goals).'
      },
      {
        name: 'Team Total Goals',
        description:
          'Bet on whether a specific team will score over or under a certain number of goals.'
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

const HomeSec9 = () => {
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
    <div>
      <header className="home_sec9_upper_div">
        <h2 className="home_sec9_upper_div_title">Online Football Betting Strategies</h2>
      </header>

      <div className="container home_sec9_container">
        <h2 className="home_sec9_title">What Types of Online Football Betting are There?</h2>
        <p className="home_sec9_title_p">
          Understanding the various types of online football betting is crucial for developing
          effective strategies. Each market offers unique opportunities and risks. Here's a
          breakdown of common betting types:
        </p>

        <div className="row">
          {/* Sidebar */}
          <aside className="col-md-3 home_sec9_sidebar">
            <nav className="home_sec9_betting_list" aria-label="Betting types navigation">
              {bettingTypes.map((type, index) => (
                <button
                  key={index}
                  className={`home_sec9_betting_item ${
                    selectedBetting === type ? 'home_sec9_active' : ''
                  }`}
                  onClick={() => handleBettingClick(type)}
                >
                  {type}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <article className="col-md-9 home_sec9_main_content">
            <div className="home_sec9_content_wrapper">
              <header className="home_sec9_header">
                <h3 className="home_sec9_content_title">{currentContent.title}</h3>
              </header>

              <div className="home_sec9_content_body">
                <p className="home_sec9_description">{currentContent.description}</p>

                {/* Types of Handicap as Accordion */}
                {currentContent.types && (
                  <section className="home_sec9_expandable_sections">
                    <div className="home_sec9_expandable_item">
                      <button
                        className={`home_sec9_expandable_header ${
                          expandedSections['Types of Handicap'] ? 'home_sec9_expanded' : ''
                        }`}
                        onClick={() => toggleExpanded('Types of Handicap')}
                        aria-expanded={expandedSections['Types of Handicap'] || false}
                      >
                        <span>Types of Handicap</span>
                        <span className="home_sec9_expand_icon">
                          {expandedSections['Types of Handicap'] ? '−' : '+'}
                        </span>
                      </button>
                      {expandedSections['Types of Handicap'] && (
                        <div className="home_sec9_expandable_content">
                          <p className="home_sec9_types_intro">
                            Handicap betting comes in several forms, each designed to balance the
                            odds and provide more exciting betting opportunities:
                          </p>
                          <ul className="home_sec9_types_list">
                            {currentContent.types.map((type, index) => (
                              <li key={index} className="home_sec9_type_item">
                                <strong className="home_sec9_type_name">{type.name}:</strong>
                                <p className="home_sec9_type_description">{type.description}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Other Expandable Sections */}
                {currentContent.expandable && (
                  <section className="home_sec9_expandable_sections">
                    {currentContent.expandable.map((section, index) => (
                      <div key={index} className="home_sec9_expandable_item">
                        <button
                          className={`home_sec9_expandable_header ${
                            expandedSections[section.title] ? 'home_sec9_expanded' : ''
                          }`}
                          onClick={() => toggleExpanded(section.title)}
                          aria-expanded={expandedSections[section.title] || false}
                        >
                          <span>{section.title}</span>
                          <span className="home_sec9_expand_icon">
                            {expandedSections[section.title] ? '−' : '+'}
                          </span>
                        </button>
                        {expandedSections[section.title] && (
                          <div className="home_sec9_expandable_content">
                            <p>{section.content}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </section>
                )}

                {/* When to Use Section */}
                {currentContent.when && (
                  <section className="home_sec9_when_section">
                    <h4 className="home_sec9_when_title">When to Use Handicap Betting</h4>
                    <p className="home_sec9_when_content">{currentContent.when}</p>
                  </section>
                )}

                {/* Example Section */}
                {currentContent.example && (
                  <section className="home_sec9_example_section">
                    <h4 className="home_sec9_example_title">{currentContent.example.title}</h4>
                    <p className="home_sec9_example_content">{currentContent.example.content}</p>
                    {currentContent.example.scenarios && (
                      <ul className="home_sec9_scenario_list">
                        {currentContent.example.scenarios.map((scenario, index) => (
                          <li key={index} className="home_sec9_scenario_item">
                            {scenario}
                          </li>
                        ))}
                      </ul>
                    )}
                    {currentContent.example.explanation && (
                      <p className="home_sec9_explanation">{currentContent.example.explanation}</p>
                    )}
                  </section>
                )}

                {/* Key Takeaway */}
                {currentContent.takeaway && (
                  <section className="home_sec9_takeaway_section">
                    <h4 className="home_sec9_takeaway_title">Key Takeaway</h4>
                    <p className="home_sec9_takeaway_content">{currentContent.takeaway}</p>
                  </section>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default HomeSec9;
