"use client"
import React, { useState } from 'react';
import "./page.css";
import HomeNavbar from "./components/HomeNavbar/HomeNavbar";
import Image from "next/image";
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa6";

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
        <section>
          <div className="home_sec2">
            <h2 className="home_sec2_title">The Best แทงบอล Website</h2>
            <p className="home_sec2_p my-3">Choose a trusted platform for football betting that offers secure transactions, real-time odds, and 24/7 customer support. Play safely on direct websites like UFABET or SBOBET without an agent.</p>



            <div className="home_sec2_features-section">
              <div className="home_sec2_feature-card">
                <Image src="/images/home/vectors/Group 87006.png" alt="Safe & Secure" width={48} height={48} />
                <h3>Safe & Secure</h3>
                <p>Your money and personal data are protected with top-level encryption and official licensing.</p>
              </div>

              <div className="home_sec2_feature-card">
                <Image src="/images/home/vectors/Group 87007.png" alt="Fast Deposits" width={48} height={48} />
                <h3>
                  Fast Deposits &<br />Withdrawals
                </h3>
                <p>Deposit instantly and withdraw winnings quickly through direct banking or mobile apps.</p>
              </div>

              <div className="home_sec2_feature-card">
                <Image src="/images/home/vectors/Vector (1).png" alt="Real-Time Odds" width={48} height={48} />
                <h3>Real-Time Odds</h3>
                <p>Access live odds and in-play betting for goals, corners, and more. Get the latest market updates.</p>
              </div>

              <div className="home_sec2_feature-card">
                <Image src="/images/home/vectors/Vector.png" alt="24/7 Support" width={48} height={48} />
                <h3>24/7 Support</h3>
                <p>Our team is available around the clock to help you with any questions or payments.</p>
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


              {/* <div className="home_sec2_p3_container">
                <div className="home_sec2_p3_cards">
                  {home_sec2_p3_cards.map((card, index) => (
                    <div
                      key={index}
                      className={`home_sec2_p3_card ${index === current ? 'active' : 'inactive'}`}
                      style={{ display: index === current ? 'block' : 'none' }}
                    >
                      <img src={card.icon} alt={card.title} className="home_sec2_p3_icon" />
                      <h3 className="home_sec2_p3_title">{card.title}</h3>
                      <p className="home_sec2_p3_description">{card.description}</p>
                    </div>
                  ))}
                </div>

                <div className="home_sec2_p3_controls">
                  <button onClick={prevSlide} className="home_sec2_p3_btn">&#8592;</button>
                  <button onClick={nextSlide} className="home_sec2_p3_btn">&#8594;</button>
                </div>

                <hr className="home_sec2_p3_divider" />
              </div> */}
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
  </div>

  <hr className="home_sec2_p3_divider" />
</div>



            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
