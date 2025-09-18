"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./page.css";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import Sec4P1 from "./components/sec4/home_sec4_p1.jsx";
import HomeSec5P2 from "./components/sec5/home_sec5_p2";
import HomeSec6P1 from "./components/sec6/home_sec6_p1";
import HomeSec6P2 from "./components/sec6/home_sec6_p2";
import HomeSec6P3 from "./components/sec6/home_sec6_p3";
import HomeSec6P4 from "./components/sec6/home_sec6_p4";

import SpinnerLoader from "./components/SpinnerLoader.jsx";

const HomeSec9 = dynamic(() => import("./components/sec9/home_sec9"), { ssr: false, loading: () => <SpinnerLoader /> });
const HomeSec10 = dynamic(() => import("./components/sec10/home_sec10"), { ssr: false, loading: () => <SpinnerLoader /> });
const HomeSec11 = dynamic(() => import("./components/sec11/home_sec11"), { ssr: false, loading: () => <SpinnerLoader /> });
const HomeSec12 = dynamic(() => import("./components/sec12/home_sec12"), { ssr: false, loading: () => <SpinnerLoader /> });

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

export default function HomeClient() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % home_sec2_p3_cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? home_sec2_p3_cards.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="home_sec1">
          <h1 className="home_sec1_title">Online แทงบอล Direct Website</h1>
          <p>
            Always keep the subject on the "direct football betting website
            login without agent", and act like the website's name and brand's
            name is "football betting direct website".
          </p>
          <button className="home_sec1_button">
            Apply for แทงบอล Membership
          </button>
        </div>

        {/* Example Feature Section (restore as needed) */}
        <div className="home_sec2 container">
          <h2 className="home_sec2_title fw-medium">The Best แทงบอล Website</h2>
          <p className="home_sec2_p my-3">
            Choose a trusted platform for football betting that offers secure
            transactions, real-time odds, and 24/7 customer support. Play safely
            on direct websites like UFABET or SBOBET without an agent.
          </p>
          <div className="feature-section py-5">
            <div className="container">
              <div className="row justify-content-center g-4">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card feature-card text-center">
                    <Image
                      src="/images/home/vectors/Group 87006.png"
                      alt="Safe & Secure"
                      width={48}
                      height={48}
                      className="img-fluid mx-auto"
                    />
                    <div className="card-body">
                      <h3 className="card-title">Safe & Secure</h3>
                      <p className="card-text">
                        Your money and personal data are protected with
                        top-level encryption and official licensing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card feature-card text-center">
                    <Image
                      src="/images/home/vectors/Group 87007.png"
                      alt="Fast Deposits"
                      width={48}
                      height={48}
                      className="img-fluid mx-auto"
                    />
                    <div className="card-body">
                      <h3 className="card-title">
                        Fast Deposits & Withdrawals
                      </h3>
                      <p className="card-text">
                        Deposit instantly and withdraw winnings quickly through
                        direct banking or mobile apps.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card feature-card text-center">
                    <Image
                      src="/images/home/vectors/Vector (1).png"
                      alt="Real-Time Odds"
                      width={48}
                      height={48}
                      className="img-fluid mx-auto"
                    />
                    <div className="card-body">
                      <h3 className="card-title">Real-Time Odds</h3>
                      <p className="card-text">
                        Access live odds and in-play betting for goals, corners,
                        and more. Get the latest market updates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card feature-card text-center">
                    <Image
                      src="/images/home/vectors/Vector.png"
                      alt="24/7 Support"
                      width={48}
                      height={48}
                      className="img-fluid mx-auto"
                    />
                    <div className="card-body">
                      <h3 className="card-title">24/7 Support</h3>
                      <p className="card-text">
                        Our team is available around the clock to help you with
                        any questions or payments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        {/* Add more restored sections/components as needed */}
        <Sec4P1 />
        <HomeSec5P2 />
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
