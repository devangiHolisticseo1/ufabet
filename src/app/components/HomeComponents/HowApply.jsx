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
    description: 'Select a licensed and reliable football betting website to ensure safe transactions and fair gameplay. A trusted platform offers better customer support and secure payment options.',
  },
  {
    id: 3,
    title: 'Confirm the identity',
    description: 'Select a licensed and reliable football betting website to ensure safe transactions and fair gameplay. A trusted platform offers better customer support and secure payment options.',
  },
  {
    id: 4,
    title: 'Set up a payment method',
    description: 'Select a licensed and reliable football betting website to ensure safe transactions and fair gameplay. A trusted platform offers better customer support and secure payment options.',
  },
  {
    id: 5,
    title: 'Deposit initial funds',
    description: 'Select a licensed and reliable football betting website to ensure safe transactions and fair gameplay. A trusted platform offers better customer support and secure payment options.',
  },
  {
    id: 6,
    title: 'Accept the terms and conditions',
    description: 'Select a licensed and reliable football betting website to ensure safe transactions and fair gameplay. A trusted platform offers better customer support and secure payment options.',
  },
  {
    id: 7,
    title: 'Start placing the bets',
    description: 'Select a licensed and reliable football betting website to ensure safe transactions and fair gameplay. A trusted platform offers better customer support and secure payment options.',
  },
];

const HowApply = () => {

  const [activeIndex, setActiveIndex] = useState(0);

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