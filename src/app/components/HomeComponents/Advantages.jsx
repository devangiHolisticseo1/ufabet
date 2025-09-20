
import React, { useState } from 'react';
import Image from 'next/image';
// import './home_sec10.css';

const data = [
  {
    id: 1,
    title: 'Fair and transparent แทงบอล service',
    description:
      'Experience complete fairness and transparency in every aspect of your football betting. Our platform ensures clear rules, verifiable results, and an honest environment for all users, building trust with every wager.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 2,
    title: 'Fast automated system for แทงบอล',
    description: 'Enjoy quick and seamless transactions powered by advanced automation, making betting smooth and efficient.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 3,
    title: 'Secure transactions after Betting on Football',
    description: 'Your funds and data are protected with bank-level encryption and trusted payment gateways.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 4,
    title: 'Best Football Betting Odds in the Online Gambling Market',
    description: 'Get the highest and most competitive odds to maximize your winning potential.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 5,
    title: 'Wide bet selection for Football Leagues, Teams and Scores',
    description: 'From Premier League to World Cup, access diverse betting markets across global football competitions.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 6,
    title: 'Modern and Stable แทงบอล Direct Platform',
    description: 'A secure, fast, and user-friendly direct betting platform built for reliability.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 7,
    title: 'Comprehensive betting options for แทงบอล',
    description: 'Choose from match results, handicaps, over/under, special bets and more.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 8,
    title: 'Positive Bettor Experience',
    description: 'Enjoy smooth gameplay, fair rules, and excellent customer support for an enjoyable betting journey.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 9,
    title: 'Profit Generation with แทงบอล',
    description: 'Maximize long-term profit with strategic betting options and transparent payout policies.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
];

const Advantages = () => {
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="advantages-wrapper" aria-labelledby="home-sec10-heading">
      <div className="container">
        <h2 className="main-heading">What are the Advantages of แทงบอล?</h2>
        <p className="heading-para">Discover the benefits of online football betting, offering a secure, transparent, and exciting platform with a wide range of options and competitive odds for every bettor.</p>
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <figure>
              <Image
                src={data[activeIndex].image}
                alt={data[activeIndex].title}
                width={400}
                height={400}
                className="advantages-image img-fluid"
              />
            </figure>
          </div>
          <div className="col-md-7">
            <div className="text-collapse">
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className={`collapse-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={activeIndex === index}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <h3 className="text-heading">{item.id}.&nbsp;{item.title}</h3>
                    <p className="text-content">{item.description}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;