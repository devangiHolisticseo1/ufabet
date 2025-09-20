"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from "./components/Navbar/Navbar";
import { Navigation } from 'swiper/modules';
import TheBest from "./components/HomeComponents/TheBest";
import HowApply from "./components/HomeComponents/HowApply";
import HomeClientOld from "./---HomeClient";
import MembershipReq from "./components/HomeComponents/MembershipReq";
import UfabetBetter from "./components/HomeComponents/UfabetBetter";
import SbobetBetter from "./components/HomeComponents/SbobetBetter";
import FootballAccumulator from "./components/HomeComponents/FootballAccumulator";
import WatchVip from "./components/HomeComponents/WatchVip";
import OverUnder from "./components/HomeComponents/OverUnder";
import FootballTournament from "./components/HomeComponents/FootballTournament";
import 'swiper/css';
import 'swiper/css/navigation';
import "./page.css";
import FootballCorners from "./components/HomeComponents/FootballCorners";
import FootballGoals from "./components/HomeComponents/FootballGoals";
import FootballBetting from "./components/HomeComponents/FootballBetting";
import DirectAgent from "./components/HomeComponents/DirectAgent";
import Advantages from "./components/HomeComponents/Advantages";
import TrueWallet from "./components/HomeComponents/TruewAllet";
import HomeSec9 from "./components/sec9/home_sec9";
import TabsSwiperCollapse from "./components/HomeComponents/TabsSwiperCollapse";

export default function HomeClient() {

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="sticky-top-header">
          <div className="container">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper sticky-swiper"
            >
              <SwiperSlide className="swiper-slide-auto">The Best แทงบอล Website UFABET</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">How to Apply for แทงบอล?</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">See แทงบอล Odds...</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">Live Football Accurate...</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">Live Football Betting Odds for...</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">แทงบอล for Football Tournaments...</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">The Best แทงบอล Website UFABET</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">How to Apply for แทงบอล?</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">See แทงบอล Odds...</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">Live Football Accurate...</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">Live Football Betting Odds for...</SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">แทงบอล for Football Tournaments...</SwiperSlide>
            </Swiper>
          </div>
        </div>
        <section className="hero-sec">
          <div className="container">
            <div className="hero-wrap">
              <div className="hero-content">
                <h1 className="hero-title">Online แทงบอล Direct Website</h1>
                <p>
                  Online แทงบอล Direct Websites offer structured access to football
                  betting through regulated platforms. Bets on football include match
                  results, correct scores, over/under goals, first goal scorers, and
                  handicap betting. Each type presents distinct odds and payout
                  structures. For example, correct score betting demands precise
                  prediction of the final score, which increases difficulty but offers
                  higher returns.
                </p>
                <button className="hero-button">
                  Apply for แทงบอล Membership
                </button>
              </div>
            </div>
          </div>
        </section>
        <TheBest />
        <HowApply />
        <MembershipReq />
        <UfabetBetter />
        <SbobetBetter />
        <OverUnder />
        <FootballAccumulator />
        <FootballTournament />
        <FootballGoals />
        <FootballCorners />
        <WatchVip />
        <FootballBetting />
        <DirectAgent />
        <TrueWallet />
        <section className="home_home_sec8_accordion_section">
          <div className="container home_home_sec8_accordion">
            <div className="accordion" id="accordionExample">
              {/* Accordion Item 1 */}
              <article className="accordion-item">
                <header className="accordion-header" id="headingOne">
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${openAccordion === 1 ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleAccordion(1)}
                    aria-expanded={openAccordion === 1}
                    aria-controls="collapseOne"
                  >
                    How to bet on football?
                    <i className={`bi ${openAccordion === 1 ? "bi-dash" : "bi-plus"}`}></i>
                  </button>
                </header>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${openAccordion === 1 ? "show" : ""}`}
                  aria-labelledby="headingOne"
                >
                  <section className="accordion-body">
                    <ol>
                      <li>
                        <strong>Choose a Trusted Bookmaker / Direct Website</strong>
                        <p>Start by selecting a reliable and licensed platform such as UFABET or SBOBET. Always go for the official or direct website instead of third-party agents to ensure:</p>
                        <ul>
                          <li>Secure transactions</li>
                          <li>Fair play and transparent odds</li>
                          <li>Quick withdrawals without hidden fees</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Register and Verify Account</strong>
                        <p>Create a new account by entering your personal details. Some platforms may require ID verification. Once registered, log in with your credentials.</p>
                      </li>
                      <li>
                        <strong>Deposit Funds</strong>
                        <p>Top up your account using safe payment methods:</p>
                        <ul>
                          <li>TrueWallet</li>
                          <li>QR Code Online Banking</li>
                          <li>Bank Transfer / Credit Card</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Select Football Section</strong>
                        <p>Browse through popular options like Premier League, La Liga, Champions League, World Cup Qualifiers.</p>
                      </li>
                      <li>
                        <strong>Compare Odds and Markets</strong>
                        <p>Each bookmaker offers slightly different odds. Compare markets such as:</p>
                        <ul>
                          <li>Match Result (1x2)</li>
                          <li>Over/Under Goals</li>
                          <li>Asian Handicap</li>
                          <li>Half-time/Full-time</li>
                          <li>Special bets (corners, red cards, first goalscorer, etc.)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Choose Bet Type</strong>
                        <ul>
                          <li>1X2 → Home win, draw, or away win.</li>
                          <li>Over/Under → Predict if total goals will be higher or lower than a given number.</li>
                          <li>Handicap → One team starts with a virtual advantage/disadvantage.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Enter Stake Amount</strong>
                        <p>Decide how much money you want to bet. The bet slip shows your potential payout.</p>
                      </li>
                      <li>
                        <strong>Confirm Bet Slip</strong>
                        <p>Double-check your selections and click Confirm Bet. Your wager is now placed and locked in.</p>
                      </li>
                      <li>
                        <strong>Track Match and Outcome</strong>
                        <p>Watch live or follow updates. Live betting allows placing new bets during the match.</p>
                      </li>
                      <li>
                        <strong>Withdraw Winnings</strong>
                        <p>If your prediction is correct, winnings are added to your account. Withdraw via TrueWallet, Online Banking, or other options.</p>
                      </li>
                    </ol>
                  </section>
                </div>
              </article>
              {/* Accordion Item 2 */}
              <article className="accordion-item">
                <header className="accordion-header" id="headingTwo">
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${openAccordion === 2 ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleAccordion(2)}
                    aria-expanded={openAccordion === 2}
                    aria-controls="collapseTwo"
                  >
                    How to perform Team Analysis before playing on Football Betting?
                    <i className={`bi ${openAccordion === 2 ? "bi-dash" : "bi-plus"}`}></i>
                  </button>
                </header>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${openAccordion === 2 ? "show" : ""}`}
                  aria-labelledby="headingTwo"
                >
                  <section className="accordion-body">
                    Content for accordion 2 goes here...
                  </section>
                </div>
              </article>
              {/* Accordion Item 3 */}
              <article className="accordion-item">
                <header className="accordion-header" id="headingThree">
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${openAccordion === 3 ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleAccordion(3)}
                    aria-expanded={openAccordion === 3}
                    aria-controls="collapseThree"
                  >
                    How are Football Betting Odds Calculated on The Direct Football Betting Website?
                    <i className={`bi ${openAccordion === 3 ? "bi-dash" : "bi-plus"}`}></i>
                  </button>
                </header>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${openAccordion === 3 ? "show" : ""}`}
                  aria-labelledby="headingThree"
                >
                  <section className="accordion-body">
                    Content for accordion 3 goes here...
                  </section>
                </div>
              </article>
            </div>
          </div>
        </section>
        <HomeSec9 />
        <Advantages />
        <TabsSwiperCollapse />
        {/* <HomeClientOld /> */}
      </main>
    </div>
  );
}
