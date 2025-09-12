// components/HomeSec12.jsx
import React, { useState } from 'react';
import './home_sec12.css';

const topics = [
    {
        id: 'history',
        title: 'Origins and History',
        content: {
            heading: 'What is football betting?',
            description: `Football betting is the practice of placing wagers on the outcome of football matches. Bettors can predict a wide variety of results, such as:`,
            types: [
                { label: 'Match Result (1x2)', desc: 'Betting on whether the home team wins, the away team wins, or the match ends in a draw.' },
                { label: 'Over/Under Goals', desc: 'Predicting if the total goals scored in a match will be over or under a set number.' },
                { label: 'Handicap Betting', desc: 'Giving one team a virtual advantage or disadvantage to balance the odds.' },
                { label: 'Correct Score / First Goal', desc: 'Placing bets on the exact scoreline or which team will score first.' }
            ],
            summary: 'Football betting adds excitement for fans by allowing them to test their knowledge and intuition while enjoying the game.',
            faqs: [
                'Which football betting articles are best for beginners to learn from?',
                'What does "fixed match" mean in Online Sports Betting?',
                'What is Online football accumulator betting?',
                'What is the origin of football betting?',
                'What is the first recorded example of football betting?',
                'How did football betting spread internationally?',
                'When did modern football betting regulations first appear?',
                'What role did bookmakers play in the early history of football betting?'
            ]
        }
    },
    {
        id: 'thailand',
        title: 'Football Betting in Thailand',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    },
    {
        id: 'popularity',
        title: 'Popularity and Statistics of Football Betting',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    },
    {
        id: 'regulations',
        title: 'Regulations and Social Impact about Football Betting',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    },
    {
        id: 'perspective',
        title: 'Global and Comparative Perspective for Football Betting',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    },
    {
        id: 'prices',
        title: 'Football Betting Prices',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    },
    {
        id: 'odds',
        title: 'Odds for Football Betting',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    },
    {
        id: 'options',
        title: 'Football Betting and Other Options',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    },
    {
        id: 'support',
        title: 'Customer Support',
        content: {
            heading: 'Coming Soon...',
            description: '',
            types: [],
            summary: '',
            faqs: []
        }
    }
];

const HomeSec12 = () => {
    const [activeTopic, setActiveTopic] = useState(topics[0]);
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(index === openFAQ ? null : index);
    };

    return (
        <div className="container home_sec12_section py-5">
            <div className="row">
                {/* Sidebar Topics */}
                <div className="col-md-4">
                    <div className="home_sec12_sidebar">
                        {topics.map((topic) => (
                            <button
                                key={topic.id}
                                className={`home_sec12_sidebar_item ${activeTopic.id === topic.id ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTopic(topic);
                                    setOpenFAQ(null);
                                }}
                            >
                                {topic.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Panel */}
                {/* Content Panel */}
                <div className="col-md-8 mt-4 mt-md-0">
                    <div className="home_sec12_content p-4">

                        {/* FAQ Accordion */}
                        <div className="accordion">
                            {/* Main Heading Accordion Item */}
                            <div className="accordion-item bg-transparent border-top">
                                <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button d-flex justify-content-between align-items-center ${openFAQ === 'main' ? '' : 'collapsed'
                                            } bg-transparent text-white`}
                                        type="button"
                                        onClick={() => toggleFAQ('main')}
                                    >
                                        <span className="text-warning fw-bold">{activeTopic.content.heading}</span>
                                        <i className={`bi ${openFAQ === 'main' ? 'bi-dash' : 'bi-plus'} text-warning ms-2`}></i>
                                    </button>
                                </h2>
                                <div className={`accordion-collapse collapse ${openFAQ === 'main' ? 'show' : ''}`}>
                                    <div className="accordion-body text-white">
                                        <p>{activeTopic.content.description}</p>
                                        <ul className="home_sec12_list">
                                            {activeTopic.content.types.map((type, index) => (
                                                <li key={index}>
                                                    <strong>{type.label} :</strong> {type.desc}
                                                </li>
                                            ))}
                                        </ul>
                                        {activeTopic.content.summary && (
                                            <p className="mt-3">{activeTopic.content.summary}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Items */}
                            {activeTopic.content.faqs.map((faq, index) => (
                                <div key={index} className="accordion-item bg-transparent border-top">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button d-flex justify-content-between align-items-center ${openFAQ === index ? '' : 'collapsed'
                                                } bg-transparent text-white`}
                                            type="button"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <span>{faq}</span>
                                            <i className={`bi ${openFAQ === index ? 'bi-dash' : 'bi-plus'} text-warning ms-2`}></i>
                                        </button>
                                    </h2>
                                    <div className={`accordion-collapse collapse ${openFAQ === index ? 'show' : ''}`}>
                                        <div className="accordion-body text-white">
                                            This is a sample answer for: <strong>{faq}</strong>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeSec12;
