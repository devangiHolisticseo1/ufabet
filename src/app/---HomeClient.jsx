"use client";
import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import dynamic from "next/dynamic";
import "./---page.css";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import Sec4P1 from "./components/sec4/home_sec4_p1.jsx";
import HomeSec5P2 from "./components/sec5/home_sec5_p2";
import HomeSec6P1 from "./components/sec6/home_sec6_p1";
import HomeSec6P2 from "./components/sec6/home_sec6_p2";
import HomeSec6P3 from "./components/sec6/home_sec6_p3";
import HomeSec6P4 from "./components/sec6/home_sec6_p4";

import SpinnerLoader from "./components/SpinnerLoader.jsx";

const HomeSec9 = dynamic(() => import("./components/sec9/home_sec9"), {
  ssr: false,
  loading: () => <SpinnerLoader />,
});
const HomeSec10 = dynamic(() => import("./components/sec10/home_sec10"), {
  ssr: false,
  loading: () => <SpinnerLoader />,
});
const HomeSec11 = dynamic(() => import("./components/sec11/home_sec11"), {
  ssr: false,
  loading: () => <SpinnerLoader />,
});
const HomeSec12 = dynamic(() => import("./components/sec12/home_sec12"), {
  ssr: false,
  loading: () => <SpinnerLoader />,
});

const home_sec2_p3_cards = [
  {
    icon: "/images/home/sec2/Group 87008.png",
    title: "Minimum Age 18+",
    description:
      "You must be at least 18 years old (or the legal age in your country) to register and participate in online football betting.",
  },
  {
    icon: "/images/home/sec2/Vector (1).png",
    title: "Valid Contact Information",
    description:
      "A working phone number and email address are required for account verification, password recovery, and secure communication.",
  },
  {
    icon: "/images/home/sec2/Vector.png",
    title: "Bank Account / E-Wallet",
    description:
      "You need a Thai bank account or a supported e-wallet for deposits and withdrawals. This ensures direct, agent-free transactions.",
  },
  {
    icon: "/images/home/sec2/Group 87009.png",
    title: "Identity Verification",
    description:
      "Basic KYC (Know Your Customer) steps may be required, such as ID card or passport confirmation, to prevent fraud and ensure safe play.",
  },
];

export default function HomeClientOld() {
  const [current, setCurrent] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % home_sec2_p3_cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? home_sec2_p3_cards.length - 1 : prev - 1
    );
  };

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 50; // minimum px to consider swipe

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      // swiped left -> next slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // swiped right -> prev slide
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prev) => !prev);
  };

  const [openItem, setOpenItem] = useState("collapseOne"); // First item open by default

  const toggleAccordion2 = (targetId) => {
    setOpenItem(openItem === targetId ? null : targetId);
  };

  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="home_sec1">
          <h1 className="home_sec1_title">Online แทงบอล Direct Website</h1>
          <p>
            Online แทงบอล Direct Websites offer structured access to football
            betting through regulated platforms. Bets on football include match
            results, correct scores, over/under goals, first goal scorers, and
            handicap betting. Each type presents distinct odds and payout
            structures. For example, correct score betting demands precise
            prediction of the final score, which increases difficulty but offers
            higher returns.
          </p>
          {/* <p>
            The \\\Football Betting Direct website\\\\ has effective strategies (statistical analysis, team form evaluation, and historical performance tracking). A bettor who studies head-to-head records and recent injuries gains stronger insight into match outcomes. The \\\แทงบอล\\\ tips (setting a fixed budget, avoiding emotional decisions, and tracking bets in a logbook) help maintain discipline. Tricks of identifying value odds and focusing on niche markets (corner counts or bookings) provide alternative paths to profit.
          </p>
          <p>
            Risks (financial loss, addiction, and exposure) to fraudulent platforms. Unregulated websites are lack encryption and fair play standards, increasing vulnerability to data theft and unfair odds. Steps for safe participation begin with selecting a licensed provider, creating an account with verified identity, and choosing a secure payment method. Requirements include legal age, valid identification, and access to a stable internet connection.
          </p>
          <p>
            Football betting direct websites demand informed decision-making, consistent evaluation of match variables, and adherence to responsible gambling practices. Each factor contributes to a structured and transparent experience when approached with preparation and awareness.
          </p> */}
          <button className="home_sec1_button">
            Apply for แทงบอล Membership
          </button>
        </div>

        {/* Example Feature Section (restore as needed) */}
        <div className="home_sec2 container">
          <h2 className="home_sec2_title fw-medium">The Best แทงบอล Website</h2>
          <p className="home_sec2_p my-3">
            The best แทงบอล website offers unique advantages when evaluated
            through bonuses, security, authenticity, and customer support.
            Bonuses provide direct value to players through cashback offers,
            free credits, and seasonal promotions. For example, daily login
            rewards and referral incentives increase engagement and extend
            playtime without additional deposits. Security measures protect
            personal data and financial transactions through encrypted systems
            and verified payment gateways. Platforms that maintain strict
            protocols reduce risks associated with fraud and unauthorized
            access.
            {!showFullText && (
              <span className="read-more-btn" onClick={toggleReadMore}>
                Read More
              </span>
            )}
          </p>
          {showFullText && (
            <p className="home_sec2_p my-3">
              Authenticity plays a vital role in building trust, with licensed
              operations and transparent odds contributing to fair gameplay.
              Verified providers display clear terms, consistent payout
              structures, and regulated betting environments. Customer support
              ensures smooth resolution of issues through live chat, hotline
              services, and multilingual assistance. Fast response times and
              knowledgeable staff improve user satisfaction and reduce downtime
              during technical or account-related concerns. Each of the elements
              contributes to a stable, rewarding, and trustworthy betting
              experience.
              {showFullText && (
                <span className="read-more-btn" onClick={toggleReadMore}>
                  Read Less
                </span>
              )}
            </p>
          )}
        </div>

        {/* How to Apply Section */}
        <div className="home_sec2_p2">
          <h2 className="home_sec2_title">How to Apply for แทงบอล?</h2>
          <p className="home_sec2_p my-3">
            Registering to play football betting online is quick and simple.
            With direct websites like UFABET or SBOBET, you can start safely
            without an agent in just a few steps.
          </p>
          <div className="home_sec2_p2_container centered-section">
            <div className="home_sec2_p2_text-block">
              <h3 className="home_sec2_p2_heading-yellow">Definition :</h3>
              <p className="home_sec2_p2_description">
                Applying for แทงบอล (football betting) means creating an account
                with a trusted direct website, verifying your details, and
                adding credit to start betting on football matches, odds, and
                live markets.
              </p>
              <h3 className="home_sec2_p2_heading-yellow">Instructions :</h3>
              <ul className="home_sec2_p2_list">
                <li>Choose a licensed website such as UFABET or SBOBET.</li>
                <li>Click Register / Sign Up on the homepage.</li>
                <li>
                  Provide your name, phone number, and bank details for secure
                  transactions.
                </li>
                <li>
                  Deposit funds into your account to activate betting credit.
                </li>
              </ul>
            </div>
            <div className="home_sec2_p2_steps">
              <div className="home_sec2_p2_step-card">
                <h4>
                  <span>Step 1:</span>
                </h4>
                <p>Go to the official website and click Register / Sign Up.</p>
              </div>
              <div className="home_sec2_p2_step-card">
                <h4>
                  <span>Step 2:</span>
                </h4>
                <p>
                  Fill in personal details (name, email, phone number, bank
                  account).
                </p>
              </div>
              <div className="home_sec2_p2_step-card">
                <h4>
                  <span>Step 3 :</span>
                </h4>
                <p>
                  Deposit your first balance through mobile banking, e-wallet,
                  or QR payment.
                </p>
              </div>
              <div className="home_sec2_p2_step-card">
                <h4>
                  <span>Step 4 :</span>
                </h4>
                <p>
                  Log in, check your credit balance, and start betting on
                  football markets like goals, corners, or over/under.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Membership Requirements */}
        <div className="home_sec2_p3">
          <header>
            <h2 className="home_sec2_title">
              What are the แทงบอล Membership Requirements?
            </h2>
            <p className="home_sec2_p my-3">
              While UFABET is popular, SBOBET also has strong advantages that
              make it a preferred choice for many bettors, especially those
              looking for international coverage and diverse sports options.
            </p>
          </header>

          <div className="home_sec2_p3_container centered-section">
            <div className="home_sec2_p3_slider-wrapper">
              <div
                className="home_sec2_p3_slider"
                style={{ transform: `translateX(-${current * 23}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {home_sec2_p3_cards.map((card, index) => (
                  <article key={index} className="home_sec2_p3_card">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      className="home_sec2_p3_icon img-fluid"
                      width={44}
                      height={44}
                    />
                    <h3 className="home_sec2_p3_title">{card.title}</h3>
                    <p className="home_sec2_p3_description">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <nav
              className="home_sec2_p3_controls"
              aria-label="Slider navigation"
            >
              <button onClick={prevSlide} className="home_sec2_p3_btn">
                <FaAngleLeft />
              </button>
              <button onClick={nextSlide} className="home_sec2_p3_btn">
                <FaAngleRight />
              </button>
              <hr className="home_sec2_p3_divider" />
            </nav>
          </div>
        </div>
        <section>
          <div className="home_sec3 container">
            {/* UFABET Section */}
            <header>
              <h2 className="home_sec2_title">
                Why is Ufabet Better than SBOBET for แทงบอล?
              </h2>
              <p className="home_sec2_p my-3">
                Both UFABET and SBOBET are trusted platforms for football
                betting, but UFABET offers unique advantages that make it the
                top choice for many players.
              </p>
            </header>

            <section className="d-flex justify-content-center home_sec3__features-wrapper mobile_d_flex">
              {[
                {
                  title: "Higher Odds",
                  text: "UFABET consistently provides better payout odds compared to SBOBET, meaning you can maximize your winnings on the same bets.",
                },
                {
                  title: "Faster Transactions",
                  text: "With UFABET, deposits and withdrawals are almost instant. SBOBET often takes longer, especially during peak hours.",
                },
                {
                  title: "User Experience",
                  text: "UFABET has a simple interface, mobile-friendly design, and easy navigation, making betting smooth for both beginners and professionals.",
                },
                {
                  title: "Stability",
                  text: "The UFABET system is known for strong servers and fewer downtimes, ensuring uninterrupted play during live matches.",
                },
              ].map((item, i) => (
                <article key={i} className="card home_sec3__card">
                  <div className="card-body">
                    <h3 className="home_sec3__title">{item.title}</h3>
                    <p className="home_sec3__text">{item.text}</p>
                  </div>
                </article>
              ))}
            </section>
            <section className="container my-5">
              <div className="row align-items-start gx-5 gy-4">
                {/* Left Content */}
                <div className="col-12 col-lg-7">
                  <div className="home_sec3_content">
                    <h3 className="home_sec3_title">Newest UFABET Log in</h3>
                    <p className="home_sec3_text">
                      The latest UFABET login system gives players fast, secure,
                      and direct access to all football betting markets. No
                      agents are required — you connect directly to the platform
                      for the best odds, real-time updates, and safe
                      transactions.
                    </p>
                    <p className="home_sec3_subtitle">
                      With this login, you can :
                    </p>
                    <ul className="home_sec3_list">
                      <li>Enter instantly with your username and password.</li>
                      <li>
                        Access แทงบอล markets like goals, corners, assists, and
                        over/under.
                      </li>
                      <li>
                        Use mobile, tablet, or desktop without extra apps.
                      </li>
                      <li>
                        Enjoy 24/7 secure connections with encrypted protection.
                      </li>
                    </ul>
                    <p className="home_sec3_text">
                      Whether you are a new member or an experienced bettor, the
                      newest UFABET login makes แทงบอล simple, direct, and
                      reliable.
                    </p>
                  </div>
                </div>

                {/* Right Login Card */}
                <div className="col-12 col-lg-5">
                  <form className="home_sec3_login-card mx-auto">
                    <Image
                      src="/images/home/ubet-logo 1.png"
                      alt="logo"
                      className="img-fluid mx-auto home_sec3_logo_img"
                      width={116}
                      height={27}
                    />

                    <div className="home_sec3_input-group">
                      <span className="home_sec3_input-icon">
                        <Image
                          className="img-fluid"
                          alt="username"
                          src="/images/home/sec3/Group 8727.png"
                          width={23}
                          height={23}
                        />
                      </span>
                      <input
                        type="text"
                        placeholder="username"
                        className="home_sec3_input"
                      />
                    </div>

                    <div className="home_sec3_input-group">
                      <span className="home_sec3_input-icon">
                        <Image
                          className="img-fluid"
                          alt="password"
                          src="/images/home/sec3/Group 8728.png"
                          width={23}
                          height={23}
                        />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        className="home_sec3_input"
                      />
                      <span
                        className="home_sec3_eye-icon"
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                        role="button"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        <Image
                          src="/images/home/eye.svg"
                          alt="password"
                          width={24}
                          height={24}
                        />
                      </span>
                    </div>

                    <button type="submit" className="home_sec3_login-btn">
                      Login
                    </button>

                    <nav
                      className="home_sec3_links"
                      aria-label="Login navigation"
                    >
                      <a href="#" className="home_sec3_join">
                        Join Now
                      </a>
                      <a href="#" className="home_sec3_forgot_pw">
                        Forgot Password?
                      </a>
                    </nav>
                  </form>
                </div>
              </div>
            </section>

            {/* SBOBET Section */}
            <header>
              <h3 className="home_sec2_title">
                Why is SBOBET Better than Ufabet for แทงบอล?
              </h3>
              <p className="home_sec2_p my-3">
                While UFABET is popular, SBOBET also has strong advantages that
                make it a preferred choice for many bettors, especially those
                looking for international coverage and diverse sports options.
              </p>
            </header>

            <section className="d-flex justify-content-center home_sec3__features-wrapper mobile_d_flex">
              {[
                {
                  title: "Wider Sports Coverage",
                  text: "SBOBET offers betting not only on football but also on basketball, tennis, e-sports, and more, making it a top choice for multi-sport bettors.",
                },
                {
                  title: "Faster International Access",
                  text: "SBOBET is well-established globally, allowing international users to log in and play seamlessly, often with quicker access in some regions compared to UFABET.",
                },
                {
                  title: "User Experience",
                  text: "UFABET has a simple interface, mobile-friendly design, and easy navigation, making betting smooth for both beginners and professionals.",
                },
                {
                  title: "Professional Betting Interface",
                  text: "The platform provides a detailed betting slip, customizable views, and professional layouts that appeal to advanced bettors.",
                },
              ].map((item, i) => (
                <article key={i} className="card home_sec3__card">
                  <div className="card-body">
                    <h3 className="home_sec3__title">{item.title}</h3>
                    <p className="home_sec3__text">{item.text}</p>
                  </div>
                </article>
              ))}
            </section>

            <section className="home_sec3_divide d-flex flex-wrap justify-content-between align-items-start">
              <div className="home_sec3_content">
                <h3 className="home_sec3_title">Newest SBOBET Log in</h3>
                <p className="home_sec3_text">
                  The newest SBOBET login system gives users faster access to
                  football betting and a wide range of sports markets. Designed
                  for international players, SBOBET ensures smooth connections,
                  stable performance, and secure transactions.
                </p>
                <p className="home_sec3_subtitle">With this login, you can :</p>
                <ul className="home_sec3_list">
                  <li>Enter quickly with your username and password.</li>
                  <li>
                    Access football odds, live betting, and multi-sport markets
                    instantly.
                  </li>
                  <li>Use mobile, tablet, or desktop without extra apps.</li>
                  <li>
                    Benefit from SBOBET’s strong global reputation for safety
                    and fair play.
                  </li>
                </ul>
                <p className="home_sec3_text">
                  The newest SBOBET login makes แทงบอล and other sports betting
                  faster, safer, and globally accessible.
                </p>
              </div>

              <form className="home_sec3_login-card">
                <Image
                  src="/images/home/ubet-logo 1.png"
                  alt="logo"
                  className="img-fluid mx-auto home_sec3_logo_img"
                  width={116}
                  height={27}
                />
                <div className="home_sec3_input-group">
                  <span className="home_sec3_input-icon">
                    <Image
                      className="img-fluid"
                      alt="username"
                      src="/images/home/sec3/Group 8727.png"
                      width={23}
                      height={23}
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="username"
                    className="home_sec3_input"
                  />
                </div>
                {/* <div className="home_sec3_input-group">
                  <span className="home_sec3_input-icon">
                    <Image className="img-fluid" alt="password" src="/images/home/sec3/Group 8728.png" width={23} height={23} />
                  </span>
                  <input type="password" placeholder="password" className="home_sec3_input" />
                  <span className="home_sec3_eye-icon">👁️</span>
                </div> */}
                <div className="home_sec3_input-group">
                  <span className="home_sec3_input-icon">
                    <Image
                      className="img-fluid"
                      alt="password"
                      src="/images/home/sec3/Group 8728.png"
                      width={23}
                      height={23}
                    />
                  </span>

                  <input
                    type={showPassword2 ? "text" : "password"}
                    placeholder="password"
                    className="home_sec3_input"
                  />

                  <span
                    className="home_sec3_eye-icon"
                    onClick={togglePasswordVisibility2}
                    style={{ cursor: "pointer" }}
                    role="button"
                    aria-label={
                      showPassword2 ? "Hide password" : "Show password"
                    }
                  >
                    <Image
                      src="/images/home/eye.svg"
                      alt="password"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>

                <button type="submit" className="home_sec3_login-btn">
                  Login
                </button>
                <nav className="home_sec3_links" aria-label="Login navigation">
                  <a href="#" className="home_sec3_join">
                    Join Now
                  </a>
                  <a href="#" className="home_sec3_forgot_pw">
                    Forgot Password?
                  </a>
                </nav>
              </form>
            </section>
          </div>
        </section>
        {/* Add more restored sections/components as needed */}
        {/* <Sec4P1 /> */}
        <section className="home_sec2_sec">
          <div className="container">
            <header>
              <h2 className="home_sec2_title">
                See แทงบอล Odds for Over/Under
              </h2>
              <p className="home_sec2_p">
                Over/Under betting is one of the most popular ways to แทงบอล. It
                lets you predict whether the total goals in a match will be
                above or below a set number. Here’s how it works:
              </p>
            </header>

            <div className="row g-4 justify-content-center home_sec2_row_div">
              <article className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h3 className="home_sec4_title">
                      <u>ODDS</u>
                    </h3>
                    <p className="home_sec4_text">
                      Odds show the potential payout of your bet. For example,
                      1.90 means you win 190 for every 100 wagered. Direct
                      websites like UFABET and SBOBET always display odds in
                      real time.
                    </p>
                  </div>
                </div>
              </article>

              <article className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h3 className="home_sec4_title">
                      <u>OVER</u>
                    </h3>
                    <p className="home_sec4_text">
                      If you bet Over, you are predicting the total number of
                      goals in the match will be higher than the set line (e.g.,
                      Over 2.5 means 3 or more goals are needed).
                    </p>
                  </div>
                </div>
              </article>

              <article className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h3 className="home_sec4_title">
                      <u>UNDER</u>
                    </h3>
                    <p className="home_sec4_text">
                      If you bet Under, you are predicting the total goals
                      scored will be lower than the set line (e.g., Under 2.5
                      means 2 or fewer goals).
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <section aria-labelledby="advantage-title">
              <h3
                id="advantage-title"
                className="home_sec3_take_advantage fw-medium"
              >
                How to take advantage?
              </h3>
              <ul className="home_sec3_list">
                <li>
                  Use direct football betting websites like UFABET or SBOBET for
                  accurate, real-time odds.
                </li>
                <li>Compare Over/Under odds across leagues and teams.</li>
                <li>Use mobile, tablet, or desktop without extra apps.</li>
                <li>
                  Focus on recent scoring trends, match stats, and betting
                  lines.
                </li>
              </ul>
            </section>

            <section aria-labelledby="odds-title">
              <header>
                <h2 id="odds-title" className="home_sec3_h1">
                  Football Betting ODDS
                </h2>
                <p className="home_sec3_p_24_hour">
                  24-Hour Over/Under Markets
                </p>
              </header>
              <div>
                <Sec4P1 />
              </div>
            </section>
          </div>
        </section>
        {/* <HomeSec5P2 /> */}
        <section>
          <div className="container home_sec5">
            <header>
              <h2 className="home_sec2_title fw-medium">Today's Football Accumulator</h2>
              <p className="home_sec2_p">
                Boost your chances of winning by combining multiple bets into one! An accumulator (or "acca")
                links several selections together, with all results needing to win for you to land a payout.
              </p>
            </header>

            <article className="home_sec5_p1">
              <h3 className="home_sec5_title_h3">What is an Accumulator?</h3>
              <p style={{ color: '#FFFFFF' }}>
                An accumulator is a single bet that combines two or more selections. The odds multiply together,
                giving you the chance for higher returns from a small stake. However, every selection must win
                for your bet to be successful.
              </p>

              <h3 className="home_sec5_title_h3">Example :</h3>
              <ul style={{ color: '#FFFFFF', listStyle: 'none', paddingLeft: 0 }}>
                <li>Match 1 : Liverpool to Win – Odds 1.80</li>
                <li>Match 2 : Barcelona Over 2.5 Goals – Odds 1.90</li>
                <li>Match 3 : Bayern Munich Both Teams to Score – Odds 1.70</li>
              </ul>

              <h3 className="home_sec5_title_h3 fw-medium">How to Use It :</h3>

              <ol className="row g-3 justify-content-center" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box   rounded">
                    <h4 className="home_sec5_step_title mb-2">Step 1:</h4>
                    <p className="home_sec5_step_desc mb-0">
                      Select your favorite matches and betting markets (e.g., win, goals, both teams to score).
                    </p>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box   rounded">
                    <h4 className="home_sec5_step_title mb-2">Step 2:</h4>
                    <p className="home_sec5_step_desc mb-0">Add them to your accumulator slip.</p>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box  rounded">
                    <h4 className="home_sec5_step_title mb-2">Step 3:</h4>
                    <p className="home_sec5_step_desc mb-0">
                      View the combined odds and your potential payout.
                    </p>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box   rounded">
                    <h4 className="home_sec5_step_title mb-2">Step 4:</h4>
                    <p className="home_sec5_step_desc mb-0">
                      Place your bet on the bookmaker’s platform and watch the action unfold!
                    </p>
                  </div>
                </li>
              </ol>
            </article>

            <section>
              <HomeSec5P2 />
            </section>
          </div>
        </section>

        <HomeSec6P1 />
        <HomeSec6P2 />
        <HomeSec6P3 />
        <HomeSec6P4 />
        <HomeSec9 />
        <HomeSec10 />
        <HomeSec11 />
        <HomeSec12 />
      </main>
    </div>
  );
}
