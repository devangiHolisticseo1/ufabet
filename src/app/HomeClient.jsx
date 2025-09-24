"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./components/Navbar/Navbar";
import { Navigation } from "swiper/modules";
import TheBest from "./components/HomeComponents/TheBest";
import HowApply from "./components/HomeComponents/HowApply";
import MembershipReq from "./components/HomeComponents/MembershipReq";
import UfabetBetter from "./components/HomeComponents/UfabetBetter";
import SbobetBetter from "./components/HomeComponents/SbobetBetter";
import FootballAccumulator from "./components/HomeComponents/FootballAccumulator";
import WatchVip from "./components/HomeComponents/WatchVip";
import OverUnder from "./components/HomeComponents/OverUnder";
import FootballTournament from "./components/HomeComponents/FootballTournament";
import FootballCorners from "./components/HomeComponents/FootballCorners";
import FootballGoals from "./components/HomeComponents/FootballGoals";
import FootballBetting from "./components/HomeComponents/FootballBetting";
import DirectAgent from "./components/HomeComponents/DirectAgent";
import Advantages from "./components/HomeComponents/Advantages";
import TrueWallet from "./components/HomeComponents/TruewAllet";
import TabsSwiperCollapse from "./components/HomeComponents/TabsSwiperCollapse";
import FootballBettingGuide from "./components/HomeComponents/FootballBettingGuide";
import CheckCreditScore from "./components/HomeComponents/CheckCreditScore";
import TypesOnlineFootball from "./components/HomeComponents/TypesOnlineFootball";
import LiveFootballBetting from "./components/HomeComponents/LiveFootballBetting";
import WhatFootball from "./components/HomeComponents/WhatFootball";
import 'swiper/css';
import 'swiper/css/navigation';
import "./page.css";

export default function HomeClient() {
  const [showFullText, setShowFullText] = useState({});

  const toggleReadMore = (id) => {
    setShowFullText((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <Navbar />
      <main>
        <nav className="sticky-top-header" aria-label="Quick navigation">
          <div className="container">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper sticky-swiper"
            >
              <SwiperSlide className="swiper-slide-auto">
                The Best แทงบอล Website UFABET
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                How to Apply for แทงบอล?
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                See แทงบอล Odds...
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                Live Football Accurate...
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                Live Football Betting Odds for...
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                แทงบอล for Football Tournaments...
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                The Best แทงบอล Website UFABET
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                How to Apply for แทงบอล?
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                See แทงบอล Odds...
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                Live Football Accurate...
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                Live Football Betting Odds for...
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-auto">
                แทงบอล for Football Tournaments...
              </SwiperSlide>
            </Swiper>
          </div>
        </nav>
        <article>
          <header className="hero-sec">
            <div className="container">
              <div className="hero-wrap">
                <div className="hero-content">
                  <h1 className="hero-title">Online แทงบอล Direct Website</h1>
                  <p>
                    Online แทงบอล Direct Websites offer structured access to
                    football betting through regulated platforms. Bets on
                    football include match results, correct scores, over/under
                    goals, first goal scorers, and handicap betting. Each type
                    presents distinct odds and payout structures. For example,
                    correct score betting demands precise prediction of the
                    final score, which increases difficulty but offers higher
                    returns.{" "}
                    {!showFullText["1"] && (
                      <span
                        className="read-more-btn"
                        onClick={() => toggleReadMore("1")}
                      >
                        Read More
                      </span>
                    )}
                    {showFullText["1"] && (
                      <>
                        <span>
                          {" "}
                          Additional content for the first card can go here.
                          This is the expanded content that shows when Read More
                          is clicked. You can add more detailed information
                          about minimum bet football betting here.
                        </span>
                        <span
                          className="read-more-btn"
                          onClick={() => toggleReadMore("1")}
                        >
                          Read Less
                        </span>
                      </>
                    )}
                  </p>
                  <button className="hero-button">
                    Apply for แทงบอล Membership
                  </button>
                </div>
              </div>
            </div>
          </header>

          <TheBest />
          <HowApply />
          <MembershipReq />
          <UfabetBetter />
          <SbobetBetter />
          <OverUnder />
          <FootballAccumulator />
          <LiveFootballBetting />
          <FootballTournament />
          <FootballGoals />
          <FootballCorners />
          <WatchVip />
          <FootballBetting />
          <DirectAgent />
          <TrueWallet />
          <FootballBettingGuide />
          <TypesOnlineFootball />
          <Advantages />
          <WhatFootball />
          <CheckCreditScore />
          <TabsSwiperCollapse />
          
          {/* <footer>
            <h2>Related Resources</h2>
            <p>Explore more about football betting strategies and platform features.</p>
            <nav aria-label="Related content navigation">
              <ul>
                <li><a href="/about">About UFABET</a></li>
                <li><a href="/contact">Contact Support</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </nav>
          </footer> */}
        </article>

        {/* <aside>
          <section>
            <h2>Quick Links</h2>
            <p>Access important betting resources and information.</p>
            <nav aria-label="Quick links navigation">
              <ul>
                <li><a href="#membership">Membership Requirements</a></li>
                <li><a href="#betting-guide">Betting Guide</a></li>
                <li><a href="#live-scores">Live Scores</a></li>
              </ul>
            </nav>
          </section>
          
          <section>
            <h2>Publication Information</h2>
            <p>Content last updated: <time dateTime="2024-01-15">January 15, 2024</time></p>
            <p>Author: UFABET Content Team</p>
          </section>
        </aside> */}
      </main>
    </>
  );
}
