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
import FootballBettingGuide from "./components/HomeComponents/FootballBettingGuide";

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
        <FootballBettingGuide />
        <HomeSec9 />
        <Advantages />
        <TabsSwiperCollapse />
        {/* <HomeClientOld /> */}
      </main>
    </div>
  );
}
