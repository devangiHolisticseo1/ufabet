"use client";

import React, { useEffect, useRef, useState } from "react";

const CheckCreditScore = () => {
  const walletRef = useRef(null);

  const [activeTab, setActiveTab] = useState("wallet");
  const [height, setHeight] = useState(0);

  const tabContent = {
    wallet: {
      label: "AVAILABLE BALANCE",
      value: "฿120.00",
      icon: "bi-wallet2",
    },
    deposit: {
      label: "DEPOSITED AMOUNT",
      value: "฿500.00",
      icon: "bi-piggy-bank",
    },
    withdraw: {
      label: "WITHDRAWABLE",
      value: "฿300.00",
      icon: "bi-bank",
    },
  };

  useEffect(() => {
    if (walletRef.current) {
      const element = walletRef.current;
      const elementHeight = element.offsetHeight; // or clientHeight / scrollHeight
      setHeight(elementHeight);
    }
  }, []);

  return (
    <section  className="wallet-sec">
      <div className="container">
        {/* ✅ Section Heading */}
        <header>
          <h2 className="main-heading">
            How to Check your credit score online for แทงบอล?
          </h2>
        </header>

        <div className="row align-items-start">
          {/* ✅ Wallet Tabs Section */}
          <aside className="col-md-6 col-lg-5">
            <article className="wallet-card" ref={walletRef}>
              <nav>
                <ul className="nav nav-tabs wallet-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "wallet" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("wallet")}
                      type="button"
                      aria-selected={activeTab === "wallet"}
                    >
                      กระเป๋าตังค์
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "deposit" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("deposit")}
                      type="button"
                      aria-selected={activeTab === "deposit"}
                    >
                      ฝากเงิน
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "withdraw" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("withdraw")}
                      type="button"
                      aria-selected={activeTab === "withdraw"}
                    >
                      ถอนเงิน
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="wallet-tab-content">
                <div className="wallet-balance-box">
                  <span className="wallet-balance-label">
                    {tabContent[activeTab].label}
                  </span>
                  <strong className="wallet-balance-value">
                    {tabContent[activeTab].value}
                  </strong>
                </div>

                <div className="home_sec11_icon_box text-start mt-3">
                  <i
                    className={`bi ${tabContent[activeTab].icon} wallet-icon`}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </article>
          </aside>

          {/* ✅ Advantages Section */}
          <div className="col-md-6 col-lg-7">
            <div className="wallet-content">
              <h3 className="wallet-title">Advantages :</h3>
              <ol className="golden-list" style={{ height: height + 50 }}>
                <li>
                  <span className="index">1.&nbsp;&nbsp;</span>
                  <strong className="golden-text">Go to the official Ufabet website :</strong> Access the platform through its verified domain to ensure safe registration and prevent the risk of fake sites.
                </li>
                <li>
                  <span className="index">2.&nbsp;&nbsp;</span>
                  <strong className="golden-text">Select the sign-up option :</strong> Enter accurate details (full name, phone number, and preferred account credentials) to create a secure profile.
                </li>
                <li>
                  <span className="index">3.&nbsp;&nbsp;</span>
                  <strong className="golden-text">Confirm account settings :</strong> Set a strong password, select the preferred currency, and review information to avoid errors before finalizing the setup.
                </li>
                <li>
                  <span className="index">4.&nbsp;&nbsp;</span>
                  <strong className="golden-text">Complete verification :</strong> Provide identification or required documents to meet platform requirements and activate the account successfully.
                </li>
                <li>
                  <span className="index">5.&nbsp;&nbsp;</span>
                  <strong className="golden-text">Deposit funds :</strong> Choose a trusted payment method, add the first balance, and unlock access to football betting markets.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckCreditScore;
