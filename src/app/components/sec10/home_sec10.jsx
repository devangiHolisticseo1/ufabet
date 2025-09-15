// // components/HomeSection10.jsx
// import React, { useState } from 'react';
// import './home_sec10.css';
// import Image from 'next/image';

// const data = [
//     {
//         id: 1,
//         title: 'Fair and transparent แทงบอล service',
//         description:
//             'Experience complete fairness and transparency in every aspect of your football betting. Our platform ensures clear rules, verifiable results, and an honest environment for all users, building trust with every wager.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 2,
//         title: 'Fast automated system for แทงบอล',
//         description: 'Enjoy quick and seamless transactions powered by advanced automation, making betting smooth and efficient.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 3,
//         title: 'Secure transactions after Betting on Football',
//         description: 'Your funds and data are protected with bank-level encryption and trusted payment gateways.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 4,
//         title: 'Best Football Betting Odds in the Online Gambling Market',
//         description: 'Get the highest and most competitive odds to maximize your winning potential.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 5,
//         title: 'Wide bet selection for Football Leagues, Teams and Scores',
//         description: 'From Premier League to World Cup, access diverse betting markets across global football competitions.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 6,
//         title: 'Modern and Stable แทงบอล Direct Platform',
//         description: 'A secure, fast, and user-friendly direct betting platform built for reliability.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 7,
//         title: 'Comprehensive betting options for แทงบอล',
//         description: 'Choose from match results, handicaps, over/under, special bets and more.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 8,
//         title: 'Positive Bettor Experience',
//         description: 'Enjoy smooth gameplay, fair rules, and excellent customer support for an enjoyable betting journey.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
//     {
//         id: 9,
//         title: 'Profit Generation with แทงบอล',
//         description: 'Maximize long-term profit with strategic betting options and transparent payout policies.',
//         image: '/images/home/sec10/Ellipse 6.png',
//     },
// ];

// const HomeSec10 = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <div className="home_sec10_wrapper ">
//             <div className="container home_sec_10">
//                   <h2 className="home_sec10_heading  ">
//                             What are the Advantages of  แทงบอล? 
//                         </h2>
//                         <p className="home_sec10_subtext  ">
//                             Discover the benefits of online football betting, offering a secure, transparent, and exciting platform with a wide range of options and competitive odds for every bettor.
//                         </p>

//                 <div className="row align-items-center">

//                     {/* Left Side: Dynamic Image */}
//                     <div className="col-md-5 text-center mb-4 mb-md-0">
//                         <div className="home_sec10_image-wrapper">
//                             <Image
//                                 src={data[activeIndex].image}
//                                 alt={data[activeIndex].title}
//                                 width={400}
//                                 height={400}
//                                 className="home_sec10_image"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Side: Dynamic Content */}
//                     <div className="col-md-7">
                      

//                         <ul className="home_sec10_list list-unstyled m-0">
//                             {data.map((item, index) => (
//                                 <li
//                                     key={item.id}
//                                     className={`home_sec10_item ${activeIndex === index ? 'active' : ''}`}
//                                     onClick={() => setActiveIndex(index)}
//                                     role="button"
//                                 >
//                                     <div className="home_sec10_title">
//                                         <span className="home_sec10_number">{item.id}.</span> {item.title}
//                                     </div>

//                                     <div className={`home_sec10_desc ${activeIndex === index ? 'show' : ''}`}>
//                                         <p>{item.description}</p>
//                                     </div>

//                                 </li>

//                             ))}
//                         </ul>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomeSec10;

// components/HomeSection10.jsx
import React, { useState } from 'react';
import './home_sec10.css';
import Image from 'next/image';

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


const HomeSec10 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="home_sec10_wrapper" aria-labelledby="home-sec10-heading">
      <div className="container home_sec_10">
        <header>
          <h2 id="home-sec10-heading" className="home_sec10_heading">
            What are the Advantages of แทงบอล?
          </h2>
          <p className="home_sec10_subtext">
            Discover the benefits of online football betting, offering a secure, transparent, and exciting platform with a wide range of options and competitive odds for every bettor.
          </p>
        </header>

        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <figure className="home_sec10_image-wrapper">
              <Image
                src={data[activeIndex].image}
                alt={data[activeIndex].title}
                width={400}
                height={400}
                className="home_sec10_image"
              />
            </figure>
          </div>

          {/* Right Side: List of Features */}
          <div className="col-md-7">
            <ul
              className="home_sec10_list list-unstyled m-0"
              role="list"
              aria-label="Advantages list"
            >
              {data.map((item, index) => (
                <li
                  key={item.id}
                  className={`home_sec10_item ${activeIndex === index ? 'active' : ''}`}
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
                  <article>
                    <header className="home_sec10_title">
                      <span className="home_sec10_number">{item.id}.</span> {item.title}
                    </header>

                    <section
                      className={`home_sec10_desc ${activeIndex === index ? 'show' : ''}`}
                      aria-hidden={activeIndex !== index}
                    >
                      <p>{item.description}</p>
                    </section>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSec10;