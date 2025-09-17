/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import "./page.css";
import HomeNavbar from "./components/HomeNavbar/HomeNavbar";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import Sec4P1 from './components/sec4/home_sec4_p1.jsx';
import HomeSec5P2 from './components/sec5/home_sec5_p2';
import HomeSec6P1 from './components/sec6/home_sec6_p1';
import HomeSec6P2 from './components/sec6/home_sec6_p2';
import HomeSec6P3 from './components/sec6/home_sec6_p3';
import HomeSec6P4 from './components/sec6/home_sec6_p4';
import HomeSec10 from './components/sec10/home_sec10';
import HomeSec11 from './components/sec11/home_sec11';
import HomeSec12 from './components/sec12/home_sec12';
import HomeSec9 from './components/sec9/home_sec9';

const home_sec2_p3_cards = [
  {
    icon: '/images/home/sec2/Group 87008.png',
    title: 'Minimum Age 18+',
    description: 'You must be at least 18 years old (or the legal age in your country) to register and participate in online football betting.'
  },
  {
    icon: '/images/home/sec2/Vector (1).png',
    title: 'Valid Contact Information',
    description: 'A working phone number and email address are required for account verification, password recovery, and secure communication.'
  },
  {
    icon: '/images/home/sec2/Vector.png',
    title: 'Bank Account / E-Wallet',
    description: 'You need a Thai bank account or a supported e-wallet for deposits and withdrawals. This ensures direct, agent-free transactions.'
  },
  {
    icon: '/images/home/sec2/Group 87009.png',
    title: 'Identity Verification',
    description: 'Basic KYC (Know Your Customer) steps may be required, such as ID card or passport confirmation, to prevent fraud and ensure safe play.'
  }
];


export default function Home() {

  const [current, setCurrent] = useState(0);

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

  const [openItem, setOpenItem] = useState('collapseOne'); // First item open by default

  const toggleAccordion2 = (targetId) => {
    setOpenItem(openItem === targetId ? null : targetId);
  };



  return (
    <div>
      <HomeNavbar />
      <main>
        {/* sec-1 */}
        <section>
          <div className="home_sec1">
            <h1 className="home_sec1_title">
              Online แทงบอล Direct Website
            </h1>

            <p>
              - Always keep the subject on the "direct football betting website login without agent",
              and act like the website's name and brand's name is "football betting direct website".
            
            </p>

            <button className="home_sec1_button">Apply for แทงบอล Membership</button>
          </div>
        </section>

        {/* sec-2 */}
        {/* <section>
          <div className="home_sec2 container">
            <h2 className="home_sec2_title fw-medium">The Best แทงบอล Website</h2>
            <p className="home_sec2_p my-3">Choose a trusted platform for football betting that offers secure transactions, real-time odds, and 24/7 customer support. Play safely on direct websites like UFABET or SBOBET without an agent.</p>





            <div className="feature-section py-5">
              <div className="container">
                <div className="row justify-content-center g-4">

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Group 87006.png" alt="Safe & Secure" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body">
                        <h3 className="card-title">Safe & Secure</h3>
                        <p className="card-text">Your money and personal data are protected with top-level encryption and official licensing.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Group 87007.png" alt="Fast Deposits" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body">
                        <h3 className="card-title">
                          Fast Deposits &<br />Withdrawals
                        </h3>
                        <p className="card-text">Deposit instantly and withdraw winnings quickly through direct banking or mobile apps.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Vector (1).png" alt="Real-Time Odds" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body">
                        <h3 className="card-title">Real-Time Odds</h3>
                        <p className="card-text">Access live odds and in-play betting for goals, corners, and more. Get the latest market updates.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Vector.png" alt="24/7 Support" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body">
                        <h3 className="card-title">24/7 Support</h3>
                        <p className="card-text">Our team is available around the clock to help you with any questions or payments.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>



            <div className="home_sec2_p2">


              <h2 className="home_sec2_title">How to Apply for แทงบอล?</h2>

              <p className="home_sec2_p my-3">Registering to play football betting online is quick and simple. With direct websites like UFABET or SBOBET, you can start safely without an agent in just a few steps.</p>



              <div className="home_sec2_p2_container">
                <div className="home_sec2_p2_text-block">
                  <h3 className="home_sec2_p2_heading-yellow">Definition :</h3>
                  <p className="home_sec2_p2_description">
                    Applying for แทงบอล (football betting) means creating an account with a trusted direct website, verifying your details, and adding credit to start betting on football matches, odds, and live markets.
                  </p>

                  <h3 className="home_sec2_p2_heading-yellow">Instructions :</h3>
                  <ul className="home_sec2_p2_list">
                    <li>Choose a licensed website such as UFABET or SBOBET.</li>
                    <li>Click Register / Sign Up on the homepage.</li>
                    <li>Provide your name, phone number, and bank details for secure transactions.</li>
                    <li>Deposit funds into your account to activate betting credit.</li>
                  </ul>
                </div>

                <div className="home_sec2_p2_steps">
                  <div className="home_sec2_p2_step-card">
                    <h4><span>Step 1:</span></h4>
                    <p>Go to the official website and click Register / Sign Up.</p>
                  </div>
                  <div className="home_sec2_p2_step-card">
                    <h4><span>Step 2:</span></h4>
                    <p>Fill in personal details (name, email, phone number, bank account).</p>
                  </div>
                  <div className="home_sec2_p2_step-card">
                    <h4><span>Step 3 :</span></h4>
                    <p>Deposit your first balance through mobile banking, e-wallet, or QR payment.</p>
                  </div>
                  <div className="home_sec2_p2_step-card">
                    <h4><span>Step 4 :</span></h4>
                    <p>Log in, check your credit balance, and start betting on football markets like goals, corners, or over/under.</p>
                  </div>
                </div>
              </div>

            </div>



            <div className="home_sec2_p3">
              <h2 className="home_sec2_title">What are the แทงบอล Membership Requirements?</h2>
              <p className="home_sec2_p my-3">While UFABET is popular, SBOBET also has strong advantages that make it a preferred choice for many bettors, especially those looking for international coverage and diverse sports options.</p>



              <div className="home_sec2_p3_container">
                <div className="home_sec2_p3_slider-wrapper">
                  <div
                    className="home_sec2_p3_slider"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {home_sec2_p3_cards.map((card, index) => (
                      <div key={index} className="home_sec2_p3_card">
                        <img src={card.icon} alt={card.title} className="home_sec2_p3_icon" />
                        <h3 className="home_sec2_p3_title">{card.title}</h3>
                        <p className="home_sec2_p3_description">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="home_sec2_p3_controls">
                  <button onClick={prevSlide} className="home_sec2_p3_btn"><FaAngleLeft /></button>
                  <button onClick={nextSlide} className="home_sec2_p3_btn"><FaAngleRight /></button>
                  <hr className="home_sec2_p3_divider" />
                </div>

              </div>

            </div>

          </div>
        </section> */}

        <section>
          <div className="home_sec2 container">
            <header>
              <h2 className="home_sec2_title fw-medium">The Best แทงบอล Website</h2>
              <p className="home_sec2_p my-3">
                Choose a trusted platform for football betting that offers secure transactions,
                real-time odds, and 24/7 customer support. Play safely on direct websites like
                UFABET or SBOBET without an agent.
              </p>
            </header>

            {/* Feature Section */}
            <section className="feature-section py-5">
              <div className="container">
                <div className="row justify-content-center g-4">

                  <article className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Group 87006.png" alt="Safe & Secure" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body home_sec2_card_body">
                        <h3 className="card-title home_sec2_card_body_title">Safe & Secure</h3>
                        <p className="card-text home_sec2_card_body_text">Your money and personal data are protected with top-level encryption and official licensing.</p>
                      </div>
                    </div>
                  </article>

                  <article className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Group 87007.png" alt="Fast Deposits" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body home_sec2_card_body">
                        <h3 className="card-title home_sec2_card_body_title">
                          Fast Deposits &<br />Withdrawals
                        </h3>
                        <p className="card-text home_sec2_card_body_text">Deposit instantly and withdraw winnings quickly through direct banking or mobile apps.</p>
                      </div>
                    </div>
                  </article>

                  <article className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Vector (1).png" alt="Real-Time Odds" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body home_sec2_card_body">
                        <h3 className="card-title home_sec2_card_body_title">Real-Time Odds</h3>
                        <p className="card-text home_sec2_card_body_text">Access live odds and in-play betting for goals, corners, and more. Get the latest market updates.</p>
                      </div>
                    </div>
                  </article>

                  <article className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card feature-card text-center">
                      <Image src="/images/home/vectors/Vector.png" alt="24/7 Support" width={48} height={48} className="img-fluid mx-auto" />
                      <div className="card-body home_sec2_card_body">
                        <h3 className="card-title home_sec2_card_body_title">24/7 Support</h3>
                        <p className="card-text home_sec2_card_body_text">Our team is available around the clock to help you with any questions or payments.</p>
                      </div>
                    </div>
                  </article>

                </div>
              </div>
            </section>

            {/* How to Apply Section */}
            <section className="home_sec2_p2">
              <header>
                <h2 className="home_sec2_title">How to Apply for แทงบอล?</h2>
                <p className="home_sec2_p  ">
                  Registering to play football betting online is quick and simple. With direct websites like UFABET or SBOBET,
                  you can start safely without an agent in just a few steps.
                </p>
              </header>

              <div className="home_sec2_p2_container">
                <article className="home_sec2_p2_text-block">
                  <h3 className="home_sec2_p2_heading-yellow">Definition :</h3>
                  <p className="home_sec2_p2_description">
                    Applying for แทงบอล (football betting) means creating an account with a trusted direct website, verifying your details,
                    and adding credit to start betting on football matches, odds, and live markets.
                  </p>

                  <h3 className="home_sec2_p2_heading-yellow">Instructions :</h3>
                  <ul className="home_sec2_p2_list">
                    <li>Choose a licensed website such as UFABET or SBOBET.</li>
                    <li>Click Register / Sign Up on the homepage.</li>
                    <li>Provide your name, phone number, and bank details for secure transactions.</li>
                    <li>Deposit funds into your account to activate betting credit.</li>
                  </ul>
                </article>

                <div className="home_sec2_p2_steps">
                  <article className="home_sec2_p2_step-card">
                    <h4><span>Step 1:</span></h4>
                    <p>Go to the official website and click Register / Sign Up.</p>
                  </article>
                  <article className="home_sec2_p2_step-card">
                    <h4><span>Step 2:</span></h4>
                    <p>Fill in personal details (name, email, phone number, bank account).</p>
                  </article>
                  <article className="home_sec2_p2_step-card">
                    <h4><span>Step 3 :</span></h4>
                    <p>Deposit your first balance through mobile banking, e-wallet, or QR payment.</p>
                  </article>
                  <article className="home_sec2_p2_step-card">
                    <h4><span>Step 4 :</span></h4>
                    <p>Log in, check your credit balance, and start betting on football markets like goals, corners, or over/under.</p>
                  </article>
                </div>
              </div>
            </section>

            {/* Membership Requirements */}
            <section className="home_sec2_p3">
              <header>
                <h2 className="home_sec2_title">What are the แทงบอล Membership Requirements?</h2>
                <p className="home_sec2_p my-3">
                  While UFABET is popular, SBOBET also has strong advantages that make it a preferred choice for many bettors,
                  especially those looking for international coverage and diverse sports options.
                </p>
              </header>

              <div className="home_sec2_p3_container">
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
                        <Image src={card.icon} alt={card.title} className="home_sec2_p3_icon img-fluid" width={44} height={44} />
                        <h3 className="home_sec2_p3_title">{card.title}</h3>
                        <p className="home_sec2_p3_description">{card.description}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <nav className="home_sec2_p3_controls" aria-label="Slider navigation">
                  <button onClick={prevSlide} className="home_sec2_p3_btn"><FaAngleLeft /></button>
                  <button onClick={nextSlide} className="home_sec2_p3_btn"><FaAngleRight /></button>
                  <hr className="home_sec2_p3_divider" />
                </nav>
              </div>
            </section>
          </div>
        </section>


        <section>
          <div className="home_sec3 container">

            {/* UFABET Section */}
            <header>
              <h2 className="home_sec2_title">Why is Ufabet Better than SBOBET for แทงบอล?</h2>
              <p className="home_sec2_p my-3">
                Both UFABET and SBOBET are trusted platforms for football betting, but UFABET offers unique advantages that make it the top choice for many players.
              </p>
            </header>

            <section className="d-flex justify-content-center home_sec3__features-wrapper mobile_d_flex">
              {[
                { title: "Higher Odds", text: "UFABET consistently provides better payout odds compared to SBOBET, meaning you can maximize your winnings on the same bets." },
                { title: "Faster Transactions", text: "With UFABET, deposits and withdrawals are almost instant. SBOBET often takes longer, especially during peak hours." },
                { title: "User Experience", text: "UFABET has a simple interface, mobile-friendly design, and easy navigation, making betting smooth for both beginners and professionals." },
                { title: "Stability", text: "The UFABET system is known for strong servers and fewer downtimes, ensuring uninterrupted play during live matches." }
              ].map((item, i) => (
                <article key={i} className="card home_sec3__card">
                  <div className="card-body">
                    <h3 className="home_sec3__title">{item.title}</h3>
                    <p className="home_sec3__text">{item.text}</p>
                  </div>
                </article>
              ))}
            </section>

            {/* <section className="home_sec3_divide d-flex flex-wrap justify-content-between align-items-start">
              <div className="home_sec3_content">
                <h3 className="home_sec3_title">Newest UFABET Log in</h3>
                <p className="home_sec3_text">
                  The latest UFABET login system gives players fast, secure, and direct access to all football betting markets. No agents are required — you connect directly to the platform for the best odds, real-time updates, and safe transactions.
                </p>
                <p className="home_sec3_subtitle">With this login, you can :</p>
                <ul className="home_sec3_list">
                  <li>Enter instantly with your username and password.</li>
                  <li>Access แทงบอล markets like goals, corners, assists, and over/under.</li>
                  <li>Use mobile, tablet, or desktop without extra apps.</li>
                  <li>Enjoy 24/7 secure connections with encrypted protection.</li>
                </ul>
                <p className="home_sec3_text">
                  Whether you are a new member or an experienced bettor, the newest UFABET login makes แทงบอล simple, direct, and reliable.
                </p>
              </div>

              <form className="home_sec3_login-card">
                <Image src="/images/home/ubet-logo 1.png" alt="logo" className="img-fluid mx-auto home_sec3_logo_img" width={116} height={27} />
                <div className="home_sec3_input-group">
                  <span className="home_sec3_input-icon">
                    <Image className="img-fluid" alt="username" src="/images/home/sec3/Group 8727.png" width={23} height={23} />
                  </span>
                  <input type="text" placeholder="username" className="home_sec3_input" />
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
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <Image

                      src='/images/home/eye.svg'
                      alt="password"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>

                <button type="submit" className="home_sec3_login-btn">Login</button>
                <nav className="home_sec3_links" aria-label="Login navigation">
                  <a href="#" className="home_sec3_join">Join Now</a>
                  <a href="#" className="home_sec3_forgot_pw">Forgot Password?</a>
                </nav>
              </form>


            </section> */}
            <section className="container my-5">
  <div className="row align-items-start gx-5 gy-4">
    {/* Left Content */}
    <div className="col-12 col-lg-7">
      <div className="home_sec3_content">
        <h3 className="home_sec3_title">Newest UFABET Log in</h3>
        <p className="home_sec3_text">
          The latest UFABET login system gives players fast, secure, and direct access to all football betting markets. No agents are required — you connect directly to the platform for the best odds, real-time updates, and safe transactions.
        </p>
        <p className="home_sec3_subtitle">With this login, you can :</p>
        <ul className="home_sec3_list">
          <li>Enter instantly with your username and password.</li>
          <li>Access แทงบอล markets like goals, corners, assists, and over/under.</li>
          <li>Use mobile, tablet, or desktop without extra apps.</li>
          <li>Enjoy 24/7 secure connections with encrypted protection.</li>
        </ul>
        <p className="home_sec3_text">
          Whether you are a new member or an experienced bettor, the newest UFABET login makes แทงบอล simple, direct, and reliable.
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
            <Image className="img-fluid" alt="username" src="/images/home/sec3/Group 8727.png" width={23} height={23} />
          </span>
          <input type="text" placeholder="username" className="home_sec3_input" />
        </div>

        <div className="home_sec3_input-group">
          <span className="home_sec3_input-icon">
            <Image className="img-fluid" alt="password" src="/images/home/sec3/Group 8728.png" width={23} height={23} />
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
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <Image src="/images/home/eye.svg" alt="password" width={24} height={24} />
          </span>
        </div>

        <button type="submit" className="home_sec3_login-btn">Login</button>

        <nav className="home_sec3_links" aria-label="Login navigation">
          <a href="#" className="home_sec3_join">Join Now</a>
          <a href="#" className="home_sec3_forgot_pw">Forgot Password?</a>
        </nav>
      </form>
    </div>
  </div>
</section>


            {/* SBOBET Section */}
            <header>
              <h3 className="home_sec2_title">Why is SBOBET Better than Ufabet for แทงบอล?</h3>
              <p className="home_sec2_p my-3">
                While UFABET is popular, SBOBET also has strong advantages that make it a preferred choice for many bettors, especially those looking for international coverage and diverse sports options.
              </p>
            </header>

            <section className="d-flex justify-content-center home_sec3__features-wrapper mobile_d_flex">
              {[
                { title: "Wider Sports Coverage", text: "SBOBET offers betting not only on football but also on basketball, tennis, e-sports, and more, making it a top choice for multi-sport bettors." },
                { title: "Faster International Access", text: "SBOBET is well-established globally, allowing international users to log in and play seamlessly, often with quicker access in some regions compared to UFABET." },
                { title: "User Experience", text: "UFABET has a simple interface, mobile-friendly design, and easy navigation, making betting smooth for both beginners and professionals." },
                { title: "Professional Betting Interface", text: "The platform provides a detailed betting slip, customizable views, and professional layouts that appeal to advanced bettors." }
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
                  The newest SBOBET login system gives users faster access to football betting and a wide range of sports markets. Designed for international players, SBOBET ensures smooth connections, stable performance, and secure transactions.
                </p>
                <p className="home_sec3_subtitle">With this login, you can :</p>
                <ul className="home_sec3_list">
                  <li>Enter quickly with your username and password.</li>
                  <li>Access football odds, live betting, and multi-sport markets instantly.</li>
                  <li>Use mobile, tablet, or desktop without extra apps.</li>
                  <li>Benefit from SBOBET’s strong global reputation for safety and fair play.</li>
                </ul>
                <p className="home_sec3_text">
                  The newest SBOBET login makes แทงบอล and other sports betting faster, safer, and globally accessible.
                </p>
              </div>

              <form className="home_sec3_login-card">
                <Image src="/images/home/ubet-logo 1.png" alt="logo" className="img-fluid mx-auto home_sec3_logo_img" width={116} height={27} />
                <div className="home_sec3_input-group">
                  <span className="home_sec3_input-icon">
                    <Image className="img-fluid" alt="username" src="/images/home/sec3/Group 8727.png" width={23} height={23} />
                  </span>
                  <input type="text" placeholder="username" className="home_sec3_input" />
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
                    aria-label={showPassword2 ? "Hide password" : "Show password"}
                  >
                    <Image

                      src='/images/home/eye.svg'
                      alt="password"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>


                <button type="submit" className="home_sec3_login-btn">Login</button>
                <nav className="home_sec3_links" aria-label="Login navigation">
                  <a href="#" className="home_sec3_join">Join Now</a>
                  <a href="#" className="home_sec3_forgot_pw">Forgot Password?</a>
                </nav>
              </form>
            </section>

          </div>
        </section>





        {/* sec-4 */}
        {/* <section style={{ background: '#313131' }} className='home_sec2_sec'>
          <div className='container'>
            <h2 className='home_sec2_title'>See แทงบอล Odds for Over/Under</h2>
            <p className='home_sec2_p'>Over/Under betting is one of the most popular ways to แทงบอล. It lets you predict whether the total goals in a match will be above or below a set number. Here’s how it works:</p>


            <div className="row g-4 justify-content-center home_sec2_row_div">

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h5 className="home_sec4_title"><u>ODDS</u></h5>
                    <p className="home_sec4_text">
                      Odds show the potential payout of your bet. For example, 1.90 means you win 190 for every 100 wagered. Direct websites like UFABET and SBOBET always display odds in real time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h5 className="home_sec4_title"><u>OVER</u></h5>
                    <p className="home_sec4_text">
                      If you bet Over, you are predicting the total number of goals in the match will be higher than the set line (e.g., Over 2.5 means 3 or more goals are needed).
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h5 className="home_sec4_title"><u>UNDER</u></h5>
                    <p className="home_sec4_text">
                      If you bet Under, you are predicting the total goals scored will be lower than the set line (e.g., Under 2.5 means 2 or fewer goals).
                    </p>
                  </div>
                </div>
              </div>

            </div>


            <p className='home_sec3_take_advantage fw-medium'>How to take advantage?</p>
            <ul className='home_sec3_list'>
              <li>Use direct football betting websites like UFABET or SBOBET for accurate, real-time odds.</li>
              <li>Compare Over/Under odds across leagues and teams.</li>
              <li>Use mobile, tablet, or desktop without extra apps.</li>
              <li>Focus on recent scoring trends, match stats, and betting lines.</li>
            </ul>


            <div>

              <h2 className='home_sec3_h1'>Football Betting ODDS</h2>
              <p className='home_sec3_p_24_hour'>24-Hour Over/Under Markets</p>
              <div>

                <Sec4P1 />
              </div>
            </div>

 
          </div>
        </section> */}

        <section className="home_sec2_sec">
          <div className="container">
            <header>
              <h2 className="home_sec2_title">See แทงบอล Odds for Over/Under</h2>
              <p className="home_sec2_p">
                Over/Under betting is one of the most popular ways to แทงบอล. It lets you predict whether
                the total goals in a match will be above or below a set number. Here’s how it works:
              </p>
            </header>

            <div className="row g-4 justify-content-center home_sec2_row_div">
              <article className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h3 className="home_sec4_title"><u>ODDS</u></h3>
                    <p className="home_sec4_text">
                      Odds show the potential payout of your bet. For example, 1.90 means you win 190 for
                      every 100 wagered. Direct websites like UFABET and SBOBET always display odds in real time.
                    </p>
                  </div>
                </div>
              </article>

              <article className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h3 className="home_sec4_title"><u>OVER</u></h3>
                    <p className="home_sec4_text">
                      If you bet Over, you are predicting the total number of goals in the match will be higher
                      than the set line (e.g., Over 2.5 means 3 or more goals are needed).
                    </p>
                  </div>
                </div>
              </article>

              <article className="col-12 col-md-6 col-lg-4">
                <div className="card home_sec4_card h-100">
                  <div className="card-body">
                    <h3 className="home_sec4_title"><u>UNDER</u></h3>
                    <p className="home_sec4_text">
                      If you bet Under, you are predicting the total goals scored will be lower than the
                      set line (e.g., Under 2.5 means 2 or fewer goals).
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <section aria-labelledby="advantage-title">
              <h3 id="advantage-title" className="home_sec3_take_advantage fw-medium">How to take advantage?</h3>
              <ul className="home_sec3_list">
                <li>Use direct football betting websites like UFABET or SBOBET for accurate, real-time odds.</li>
                <li>Compare Over/Under odds across leagues and teams.</li>
                <li>Use mobile, tablet, or desktop without extra apps.</li>
                <li>Focus on recent scoring trends, match stats, and betting lines.</li>
              </ul>
            </section>

            <section aria-labelledby="odds-title">
              <header>
                <h2 id="odds-title" className="home_sec3_h1">Football Betting ODDS</h2>
                <p className="home_sec3_p_24_hour">24-Hour Over/Under Markets</p>
              </header>
              <div>
                <Sec4P1 />
              </div>
            </section>
          </div>
        </section>




        {/* sec-5 */}
        {/* <section>

          <div className='container home_sec5'>
            <h2 className='home_sec2_title fw-medium'>Today's Football Accumulator</h2>
            <p className='home_sec2_p'>Boost your chances of winning by combining multiple bets into one! An accumulator (or "acca") links several selections together, with all results needing to win for you to land a payout.</p>

            <div className='home_sec5_p1'>
              <h3 className='home_sec5_title_h3'>What is an Accumulator?</h3>
              <p style={{ color: '#FFFFFF' }}>An accumulator is a single bet that combines two or more selections. The odds multiply together, giving you the chance for higher returns from a small stake. However, every selection must win for your bet to be successful.</p>

              <h3 className='home_sec5_title_h3'>Example :</h3>
              <p style={{ color: '#FFFFFF' }}>Match 1 : Liverpool to Win – Odds 1.80</p>
              <p style={{ color: '#FFFFFF' }}>Match 2 : Barcelona Over 2.5 Goals – Odds 1.90</p>
              <p style={{ color: '#FFFFFF' }}>Match 3 : Bayern Munich Both Teams to Score – Odds 1.70</p>

              <h3 className='home_sec5_title_h3 fw-medium'>How to Use It :</h3>



              <div className="row g-3 justify-content-center">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box p-3 rounded">
                    <h6 className="home_sec5_step_title mb-2">Step 1:</h6>
                    <p className="home_sec5_step_desc mb-0">
                      Select your favorite matches and betting markets (e.g., win, goals, both teams to score).
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box p-3 rounded">
                    <h6 className="home_sec5_step_title mb-2">Step 2:</h6>
                    <p className="home_sec5_step_desc mb-0">
                      Add them to your accumulator slip.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box p-3 rounded">
                    <h6 className="home_sec5_step_title mb-2">Step 3 :</h6>
                    <p className="home_sec5_step_desc mb-0">
                      View the combined odds and your potential payout.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="home_sec5_step_box p-3 rounded">
                    <h6 className="home_sec5_step_title mb-2">Step 4 :</h6>
                    <p className="home_sec5_step_desc mb-0">
                      Place your bet on the bookmaker’s platform and watch the action unfold!
                    </p>
                  </div>
                </div>
              </div>
 


            </div>
            <div>

              <HomeSec5P2 />
            </div>

          </div>
        </section> */}

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




        {/* sect-6 */}
        <section>
          <div className='HomeSec6P1_my'>
            <HomeSec6P1 />
          </div>
          <div className='HomeSec6P1_my'>
            <HomeSec6P2 />
          </div>
          <div className='HomeSec6P1_my'>
            <HomeSec6P3 />
          </div>
          <div  >
            <HomeSec6P4 />
          </div>


        </section>

        {/* sec-7 */}
        
        <section>
          <div className="container home_sec7">
            <div className="row g-4 justify-content-center home_sec7_row_gap">
              <article className="col-md-6">
                <div className="home_sec7_card text-center text-white ">
                  <h2 className="home_sec7_title">
                    Football Betting Website with A Minimum Bet of 10 Baht
                  </h2>
                  <p className="home_sec7_text">
                    Start your betting journey with as little as 10 Baht. Accessible for everyone!
                  </p>
                </div>
              </article>
              <article className="col-md-6">
                <div className="home_sec7_card text-center text-white ">
                  <h2 className="home_sec7_title">
                    Football Betting Website with No Minimum Deposit or Withdrawal
                  </h2>
                  <p className="home_sec7_text">
                    Enjoy the freedom of managing your funds with no restrictions on deposit or withdrawal amounts.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Accordion FAQ Section */}
        
          <section className="container home_sec7_accordion_container" aria-label="FAQs">
            <div className="accordion home_sec7_accordion" id="homeSec7Accordion">

              {/* Accordion Item 1 */}
              <article className="accordion-item home_sec7_item">
                <h3 className="accordion-header" id="headingOne">
                  <button
                    className={`accordion-button home_sec7_button ${openItem === 'collapseOne' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion2('collapseOne')}
                    aria-expanded={openItem === 'collapseOne'}
                    aria-controls="collapseOne"
                  >
                    What are the Deposit Conditions for แทงบอล?
                    <span className="home_sec7_triangle"></span>
                  </button>
                </h3>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${openItem === 'collapseOne' ? 'show' : ''}`}
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body home_sec7_body text-white">
                    <p>Our deposit conditions are designed for your convenience:</p>
                    <ul className="home_sec7_list">
                      <li><strong>Instant Processing</strong>: Deposits are processed instantly, so you can start betting without delay.</li>
                      <li><strong>Multiple Payment Gateways</strong>: We support various payment methods including bank transfers, e-wallets, and QR payments.</li>
                      <li><strong>No Hidden Fees</strong>: We believe in transparency; there are no hidden fees on deposits.</li>
                      <li><strong>24/7 Support</strong>: Our customer service is available around the clock to assist with any deposit-related queries.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Accordion Item 2 */}
              <article className="accordion-item home_sec7_item">
                <h3 className="accordion-header" id="headingTwo">
                  <button
                    className={`accordion-button home_sec7_button ${openItem === 'collapseTwo' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion2('collapseTwo')}
                    aria-expanded={openItem === 'collapseTwo'}
                    aria-controls="collapseTwo"
                  >
                    What are the Withdrawal Conditions for แทงบอล?
                    <span className="home_sec7_triangle"></span>
                  </button>
                </h3>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${openItem === 'collapseTwo' ? 'show' : ''}`}
                  aria-labelledby="headingTwo"
                >
                  <div className="accordion-body home_sec7_body text-white">
                    <p>Our withdrawal process is secure and efficient:</p>
                    <ul className="home_sec7_list">
                      <li><strong>Fast Processing</strong>: Withdrawals are processed within 24 hours on business days.</li>
                      <li><strong>Secure Verification</strong>: We use advanced security measures to protect your transactions.</li>
                      <li><strong>Multiple Options</strong>: Choose from various withdrawal methods that suit your needs.</li>
                      <li><strong>Minimum Amount</strong>: Low minimum withdrawal amounts for your convenience.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Accordion Item 3 */}
              <article className="accordion-item home_sec7_item">
                <h3 className="accordion-header" id="headingThree">
                  <button
                    className={`accordion-button home_sec7_button ${openItem === 'collapseThree' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion2('collapseThree')}
                    aria-expanded={openItem === 'collapseThree'}
                    aria-controls="collapseThree"
                  >
                    What are the Payment Options for แทงบอล?
                    <span className="home_sec7_triangle"></span>
                  </button>
                </h3>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${openItem === 'collapseThree' ? 'show' : ''}`}
                  aria-labelledby="headingThree"
                >
                  <div className="accordion-body home_sec7_body text-white">
                    <p>We offer a wide range of payment options:</p>
                    <ul className="home_sec7_list">
                      <li><strong>Bank Transfer</strong>: Direct bank transfers from major Thai banks.</li>
                      <li><strong>E-Wallets</strong>: Popular e-wallet services like TrueMoney, Rabbit LINE Pay.</li>
                      <li><strong>QR Code</strong>: Quick and easy QR code payments via mobile banking apps.</li>
                      <li><strong>Credit/Debit Cards</strong>: Secure card payments with instant processing.</li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Accordion Item 4 */}
              <article className="accordion-item home_sec7_item">
                <h3 className="accordion-header" id="headingFour">
                  <button
                    className={`accordion-button home_sec7_button ${openItem === 'collapseFour' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion2('collapseFour')}
                    aria-expanded={openItem === 'collapseFour'}
                    aria-controls="collapseFour"
                  >
                    What is the Payment Duration for แทงบอล?
                    <span className="home_sec7_triangle"></span>
                  </button>
                </h3>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse ${openItem === 'collapseFour' ? 'show' : ''}`}
                  aria-labelledby="headingFour"
                >
                  <div className="accordion-body home_sec7_body text-white">
                    <p>Our payment processing times are industry-leading:</p>
                    <ul className="home_sec7_list">
                      <li><strong>Instant Deposits</strong>: All deposits are processed immediately and reflected in your account.</li>
                      <li><strong>Quick Withdrawals</strong>: Withdrawals processed within 1-24 hours depending on the method.</li>
                      <li><strong>Real-time Updates</strong>: Get instant notifications for all transaction updates.</li>
                      <li><strong>Business Hours</strong>: Support available 24/7 for any payment-related queries.</li>
                    </ul>
                  </div>
                </div>
              </article>

            </div>
          </section>



          {/* Direct Website Explanation */}
          <section className="home_sec7_p2_section container text-center">
            <h2 className="home_sec7_p2_title">
              แทงบอล <strong>Direct Website without Agent</strong>
            </h2>
            <p className="home_sec7_p2_subtitle">
              “แทงบอล without Agent” (Football Betting Without Agent) means placing bets directly with an official,
              licensed betting website (เช่น UFABET หรือ SBOBET) instead of using a middleman (agent) to handle registration,
              deposits, withdrawals, and payouts.
            </p>

            <h3 className="home_sec7_p2_question">What does "แทงบอล without Agent" mean?</h3>

            <div className="row g-4 justify-content-center">
              {[...Array(5)].map((_, index) => (
                <article key={index} className="col-md-4">
                  <div className="home_sec7_p2_card">
                    <h4>
                      <span className="home_sec7_p2_number">{index + 1}.</span> {
                        [
                          "Transparency in Transactions",
                          "Faster Deposits & Withdrawals",
                          "Better Security & Reliability",
                          "Real-Time Odds & Updates",
                          "24/7 Customer Support"
                        ][index]
                      }
                    </h4>
                    <p>
                      {
                        [
                          "When you bet through a direct website, every deposit, withdrawal, and payout is automated. There are no hidden fees or deductions that agents might take.",
                          "Agents often delay withdrawals or set limits. Direct sites process transactions instantly through secure banking systems or e-wallets.",
                          "Agents sometimes disappear or manipulate accounts. Betting without an agent means your funds are protected by the platform’s official license and encrypted systems.",
                          "Direct platforms provide live odds and instant updates from global markets, while agents may alter odds or limit options.",
                          "Instead of relying on an unreliable agent, you get official support from the platform itself, available anytime."
                        ][index]
                      }
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Advantages Section */}
          <section className="container">
            <div className="home_sec7_p3_main_wrapper">
              <div className="row">
                <div className="col-lg-5 col-md-12">
                  <div className="home_sec7_p3_content_wrapper">
                    <h2 className="home_sec7_p3_main_title">
                      What is the advantage of betting without Agent on Football?
                    </h2>
                    <p className="home_sec7_p3_description">
                      The advantage of betting without an agent on football (แทงบอล เว็บตรง ไม่ผ่านเอเย่นต์) is that you place bets directly with the platform (UFABET, SBOBET, etc.), which guarantees safety, fairness, and faster transactions, without middleman risks or hidden costs.
                    </p>
                  </div>
                </div>
                <aside className="col-lg-7 col-md-12">
                  <div className="home_sec7_p3_advantages_wrapper">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="home_sec7_p3_advantage_item">
                         

                          <span className="home_sec7_p3_advantage_number">{index + 1}.</span>
                          <span className="home_sec7_p3_advantage_title">
                            {
                              [
                                "Transparency :",
                                "Faster Transactions :",
                                "Better Security :",
                                "Real-Time Odds :",
                                "Higher Trust :"
                              ][index]
                            }
                          </span>
                      
                        <span className="home_sec7_p3_advantage_text">
                          {
                            [
                              "No commissions or hidden charges from agents.",
                              "Instant deposits and withdrawals directly with the website.",
                              "Funds and data protected by official licensing and encryption.",
                              "Direct access to live markets with updated odds.",
                              "Eliminates fraud risks, your account is under your full control."
                            ][index]
                          }
                        </span>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* Payment Methods Section */}
          <section className="home_sec7_p4">
            <div className="container home_sec7_p4_inner">
              <article className="home_sec7_p4_box">
                <h3>Football betting website with TrueWallet</h3>
                <p>
                  A football betting website with TrueWallet means players can deposit and withdraw money directly using the TrueMoney Wallet app, instead of only using traditional banking.
                </p>
                <ul>
                  <li>TrueWallet is one of Thailand’s most widely used e-wallets.</li>
                  <li>It allows instant deposits 24/7, even without a bank account.</li>
                  <li>Many direct websites like UFABET now accept TrueWallet to make แทงบอล faster, safer, and more accessible for all users.</li>
                  <li>Especially popular for younger users who prefer digital wallets over bank transfers.</li>
                </ul>
              </article>

              <article className="home_sec7_p4_box">
                <h3>Use QR Code Online Banking for UFABET</h3>
                <p>
                  Using QR Code Online Banking for UFABET means players can scan a QR code with their mobile banking app to make fast deposits or withdrawals.
                </p>
                <ul>
                  <li>This removes the need to copy long account numbers.</li>
                  <li>Transactions are instant and auto-updated in your UFABET betting balance.</li>
                  <li>Secure, as it uses verified bank apps like Krungthai NEXT, SCB Easy, or KBank.</li>
                  <li>Great for players who prefer banking apps over wallets like TrueWallet.</li>
                </ul>
              </article>
            </div>
          </section>
        </section>






        {/* sec-8 */}
        {/* <section>
          <div className="container home_home_sec8_accordion">
            <div className="accordion" id="accordionExample">
            
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${openAccordion === 1 ? "" : "collapsed"
                      }`}
                    type="button"
                    onClick={() => toggleAccordion(1)}
                  >
                    How to bet on football?
                    <i className={`bi ${openAccordion === 1 ? "bi-dash" : "bi-plus"}`}></i>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${openAccordion === 1 ? "show" : ""
                    }`}
                >
                  <div className="accordion-body">
                    <p>
                      <strong>1. Choose a Trusted Bookmaker / Direct Website</strong>
                      Start by selecting a reliable and licensed platform such as UFABET
                      or SBOBET. Always go for the official or direct website instead of
                      third-party agents to ensure:
                    </p>
                    <ul>
                      <li>Secure transactions</li>
                      <li>Fair play and transparent odds</li>
                      <li>Quick withdrawals without hidden fees</li>
                    </ul>

                    <p>
                      <strong>2. Register and Verify Account</strong>
                      Create a new account by entering your personal details (name, phone
                      number, email). Some platforms may require ID verification to
                      ensure safety and prevent fraud. Once registered, log in with your
                      credentials.
                    </p>

                    <p>
                      <strong>3. Deposit Funds</strong>
                      Top up your account using safe payment methods such as:
                    </p>
                    <ul>
                      <li>TrueWallet</li>
                      <li>QR Code Online Banking</li>
                      <li>Bank Transfer / Credit Card</li>
                    </ul>
                    <p>
                      Deposits usually reflect instantly, letting you start betting right
                      away.
                    </p>

                    <p>
                      <strong>4. Select Football Section</strong>
                      Browse through popular options like:
                    </p>
                    <ul>
                      <li>Premier League</li>
                      <li>La Liga</li>
                      <li>Champions League</li>
                      <li>World Cup Qualifiers</li>
                    </ul>
                    <p>Select the exact match or competition you want to bet on.</p>

                    <p>
                      <strong>6. Compare Odds and Markets</strong>
                      Each bookmaker offers slightly different odds. Higher odds mean
                      higher potential payouts. Compare markets such as:
                    </p>
                    <ul>
                      <li>Match Result (1x2)</li>
                      <li>Over/Under Goals</li>
                      <li>Asian Handicap</li>
                      <li>Half-time/Full-time</li>
                      <li>Special bets (corners, red cards, first goalscorer, etc.)</li>
                    </ul>

                    <p>
                      <strong>7. Choose Bet Type</strong>
                      Pick the betting format that suits your strategy:
                    </p>
                    <ul>
                      <li>1X2 → Home win, draw, or away win.</li>
                      <li>
                        Over/Under → Predict if total goals will be higher or lower than
                        a given number.
                      </li>
                      <li>
                        Handicap → One team starts with a virtual advantage/disadvantage.
                      </li>
                    </ul>

                    <p>
                      <strong>8. Enter Stake Amount</strong>
                      Decide how much money you want to bet. The bet slip will
                      automatically show your potential payout based on the odds.
                    </p>

                    <p>
                      <strong>9. Confirm Bet Slip</strong>
                      Double-check your selections (team, odds, bet type, stake). Once
                      you’re satisfied, click Confirm Bet. Your wager is now placed and
                      locked in.
                    </p>

                    <p>
                      <strong>10. Track Match and Outcome</strong>
                      Watch the game live or follow updates. Many platforms also provide
                      live betting options, allowing you to place new bets during the
                      match.
                    </p>

                    <p>
                      <strong>11. Withdraw Winnings</strong>
                      If your prediction is correct, winnings will be added to your
                      account. You can withdraw instantly via:
                    </p>
                    <ul>
                      <li>TrueWallet</li>
                      <li>Online Banking</li>
                      <li>Other payment options offered by the bookmaker</li>
                    </ul>
                  </div>
                </div>
              </div>

         
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${openAccordion === 2 ? "" : "collapsed"
                      }`}
                    type="button"
                    onClick={() => toggleAccordion(2)}
                  >
                    How to perform Team Analysis before playing on Football Betting?
                    <i className={`bi ${openAccordion === 2 ? "bi-dash" : "bi-plus"}`}></i>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${openAccordion === 2 ? "show" : ""
                    }`}
                >
                  <div className="accordion-body">
                    Content for accordion 2 goes here...
                  </div>
                </div>
              </div>

          
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${openAccordion === 3 ? "" : "collapsed"
                      }`}
                    type="button"
                    onClick={() => toggleAccordion(3)}
                  >
                    How are Football Betting Odds Calculated on The Direct Football Betting Website?
                    <i className={`bi ${openAccordion === 3 ? "bi-dash" : "bi-plus"}`}></i>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${openAccordion === 3 ? "show" : ""
                    }`}
                >
                  <div className="accordion-body">
                    Content for accordion 3 goes here...
                  </div>
                </div>
              </div>


            </div>
          </div>

        </section> */}


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



        {/* sec-9 */}
        <section>
          <HomeSec9 />
        </section>

        {/* sec-10 */}

        <HomeSec10 />


        {/* sec-11 */}
        <section>
          <HomeSec11 />
        </section>

        {/* sec-12 */}
        <section>
          <HomeSec12 />
        </section>
      </main>
    </div>
  );
}