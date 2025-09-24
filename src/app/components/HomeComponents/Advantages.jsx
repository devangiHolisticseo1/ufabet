
import React, { useState } from 'react';
import Image from 'next/image';
// import './home_sec10.css';

const data = [
  {
    id: 1,
    title: 'Fair and transparent แทงบอล service',
    description:
      "Fair and transparent แทงบอล service prioritizes integrity through standardized odds, verifiable outcomes, and unbiased settlement mechanisms, ensuring bettors receive accurate results aligned with real-time football performance. The transparency aspect builds trust by offering clear terms, detailed bet records, and regulated oversight that prevents manipulation or hidden adjustments. Fair play is improved through algorithm-driven systems that calculate odds objectively, reducing the possibility of human error or deliberate interference. The positions and the service as a dependable platform, safeguarding bettors' confidence while maintaining a professional standard in the competitive sports betting landscape.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 2,
    title: 'Fast automated system for แทงบอล',
    description: 'Fast automated system for แทงบอล ensures quick processing of bets, real-time updates on odds, and instant payout settlements. The system efficiently manages large volumes of transactions without delays by utilizing advanced algorithms, offering bettors an experience. Automated calculations of odds, bet acceptance, and result generation occur within seconds, eliminating manual intervention and reducing the potential for human error. The speed improved the user satisfaction, making the betting process smoother and more reliable for participants in the fast-paced world of online football betting.',
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 3,
    title: 'Secure transactions after Betting on Football',
    description: "Secure transactions after betting on Football protect bettors' financial information through advanced encryption and secure payment systems. Each transaction, whether a deposit or withdrawal, is processed through secure channels, ensuring that sensitive data remains protected from unauthorized access. Financial institutions and payment gateways used by the platform adhere to stringent security protocols, including fraud detection systems and identity verification processes. The level of security provides bettors with the confidence that their funds are safeguarded throughout the entire betting process, from placing bets to receiving winnings.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 4,
    title: 'Best Football Betting Odds in the Online Gambling Market',
    description: "Best football betting odds in the online gambling market are defined by competitive pricing, offering bettors higher potential returns compared to industry-standard odds. Platforms that provide the best odds employ advanced algorithms to monitor market trends, ensuring their odds remain in line with the latest developments in football. The platforms feature real-time adjustments, reflecting changes in match conditions, team performance, or market sentiment, which result in more favorable betting opportunities for users. Operators improve the value for bettors by offering superior odds, providing them with better chances to profit from their football betting experience.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 5,
    title: 'Wide bet selection for Football Leagues, Teams and Scores',
    description: "Wide bet selection for football leagues, teams, and scores offers bettors a range of betting options, covering major leagues, global teams, and a variety of match outcomes. Bettors place bets on everything from the traditional match winner, over/under goals, and correct score to more specific propositions (player performance, corner counts, or yellow cards). The inclusion of multiple leagues, from top-tier competitions (English Premier League, lower-profile regional tournaments), ensures diverse betting opportunities. The extensive selection caters to casual bettors and experts, allowing them to customize their bets based on preferred teams, leagues, and match dynamics.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 6,
    title: 'Modern and Stable แทงบอล Direct Platform',
    description: "Modern and stable แทงบอล direct platform offers a reliable betting experience, powered by technology and infrastructure. The site prioritizes user-friendly interfaces, making navigation intuitive for beginners and experienced bettors. Users place bets with confidence, with direct access to real-time data and odds updates, knowing the platform operates without glitches or downtime. The stability is strengthened through continuous system maintenance and advanced security protocols, ensuring that transactions, odds calculations, and payouts are executed flawlessly. The modern design and stability position the site as a top choice for bettors seeking a dependable, fast, and enjoyable betting experience.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 7,
    title: 'Comprehensive betting options for แทงบอล',
    description: "Comprehensive betting options for แทงบอล provide bettors with an extensive range of betting possibilities, covering all aspects of football matches. Options include traditional bets (match winners, handicaps, and over/under goals), with advanced markets (first scorer, total corners, and half-time/full-time outcomes). Platforms integrate live betting features, allowing users to place bets in real time as matches progress, adapting to dynamic game developments. Coverage spans domestic leagues, international tournaments, and lower-tier competitions, offering opportunities for casual bettors. The depth of options ensures flexibility, strategic play, and an engaging betting experience customized to preferences and risk appetites.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 8,
    title: 'Positive Bettor Experience',
    description: "Positive bettor experience in แทงบอล emphasizes convenience, reliability, and engagement throughout the betting journey. Platforms user satisfaction by offering intuitive interfaces, fast bet placements, and responsive customer support, ensuring issues are resolved promptly. Features (real-time updates, personalized notifications, and clear bet histories) create transparency and empower bettors to make informed decisions. Additional elements, including loyalty programs, bonuses, and interactive tools, elevate user interaction, raising long-term trust and enjoyment. The factors create a rewarding and great experience that encourages continued participation in the online football betting ecosystem.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
  {
    id: 9,
    title: 'Profit Generation with แทงบอล',
    description: "Profit generation with แทงบอล involves strategic betting, informed decision-making, and taking advantage of the best odds and market opportunities. Successful bettors leverage detailed analysis of teams, player statistics, and match conditions to place calculated bets in a range of markets. Bettors increase their chances of achieving higher returns by consistently identifying value bets and managing risk through diversification. The sites offering odds, betting options, and live betting features improve profit potential, allowing bettors to adapt to evolving match dynamics in real time. Proper bankroll management and understanding of betting strategies are essential elements in generating consistent profits in the competitive world of football betting.",
    image: '/images/home/sec10/Ellipse 6.png',
  },
];

const Advantages = () => {
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="advantages-wrapper" aria-labelledby="home-sec10-heading">
      <div className="container">
        <h2 className="main-heading">What are the Advantages of แทงบอล?</h2>
        <p className="heading-para">The Advantages of แทงบอล are being fair and transparent, a fast automated system, and secure transactions after betting on Football. The structure of regulated platforms in online football betting delivers credibility by maintaining transparent odds and unbiased outcomes through advanced algorithms, eliminating manipulation in match results or bet settlements. The fast automated system simplifies the entire process from odds calculation to payout, providing efficiency for bettors and reducing operational lag. Secure transactions are built on encrypted gateways and compliance with financial regulations, ensuring data protection, fraud prevention, and reliable fund transfers. The triad of fairness, efficiency, and security elevates the reputation of แทงบอล as a professional betting framework in the sports gambling ecosystem.</p>
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
    </section>
  );
};

export default Advantages;