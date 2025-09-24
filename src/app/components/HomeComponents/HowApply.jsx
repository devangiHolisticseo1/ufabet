"use client";

import { useState } from "react";

const data = [
  {
    id: 1,
    title: 'Choose a trusted platform',
    description: 'Select a licensed and reliable football betting website to ensure safe transactions and fair gameplay. A trusted platform offers better customer support and secure payment options.',
  },
  {
    id: 2,
    title: 'Complete the registration',
    description: 'Fill out the sign-up form with accurate personal details (name, email, and password). The step creates the official betting profile on the platform.',
  },
  {
    id: 3,
    title: 'Confirm the identity',
    description: 'Upload a valid ID or supporting documents to pass the verification process. It protects against fraud and ensures compliance with gambling regulations.',
  },
  {
    id: 4,
    title: 'Set up a payment method',
    description: 'Link a secure payment option (bank account, credit card, or e-wallet). A verified method allows smooth deposits and withdrawals.',
  },
  {
    id: 5,
    title: 'Deposit initial funds',
    description: 'Add money to the account using the available payment channels. Football betting sites set a minimum deposit requirement to start betting.',
  },
  {
    id: 6,
    title: 'Accept the terms and conditions',
    description: 'Review and agree to the platform’s rules, betting conditions, and responsible gambling guidelines.',
  },
  {
    id: 7,
    title: 'Start placing the bets',
    description: 'Exploring football matches and placing wagers once the account is active and funded. Bet responsibly to manage risks effectively.',
  },
];

const HowApply = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (idx) => {
    setActiveIndex(prev => prev === idx ? -1 : idx);
  };

  return (
    <section className="how-apply">
      <div className="container">
        <h2 className="main-heading">How to Apply for แทงบอล?</h2>
        <p className="heading-para">To apply for แทงบอล, follow the seven steps listed below.</p>
        <div className="betting-steps">
          <div className="row">
            <div className="col-md-6">
              <div className="steps-img">
                IMAGE
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-collapse">
                {data.map((item, index) => (
                  <details
                    key={item.id}
                    className={`collapse-item ${activeIndex === index ? 'active' : ''}`}
                    open={activeIndex === index}
                  >
                    <summary
                      className="text-heading"
                      onClick={(e) => { e.preventDefault(); handleToggle(index); }}
                      aria-expanded={activeIndex === index}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleToggle(index);
                        }
                      }}
                    >
                      <strong>{item.id}.&nbsp;{item.title}</strong>
                    </summary>
                    <p className="text-content">{item.description}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HowApply;