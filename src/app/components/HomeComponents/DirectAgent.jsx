"use client";

import MembershipCard from './MembershipCard';

const DirectAgent = () => {
  const membershipData = [
    {
      title: "Transparency in Transactions",
      description: "When you bet through a direct website, every deposit, withdrawal, and payout is automated. There are no hidden fees or deductions that agents might take.",
    },
    {
      title: "Faster Deposits & Withdrawals",
      description: "Agents often delay withdrawals or set limits. Direct sites process transactions instantly through secure banking systems or e-wallets.",
    },
    {
      title: "Better Security & Reliability",
      description: "Agents sometimes disappear or manipulate accounts. Betting without an agent means your funds are protected by the platform’s official license and encrypted systems.",
    },
    {
      title: "Real-Time Odds & Updates",
      description: "Direct platforms provide live odds and instant updates from global markets, while agents may alter odds or limit options.",
    },
    {
      title: "24/7 Customer Support",
      description: "Instead of relying on an unreliable agent, you get official support from the platform itself, available anytime.",
    }
  ]
  return (
    <div className="direct-agent">
      <div className="container">
        <h2 className="main-heading">แทงบอล Direct Website without Agent</h2>
        <p className="heading-para">“แทงบอล without Agent” (Football Betting Without Agent) means placing bets directly with an official, licensed betting website (เช่น UFABET หรือ SBOBET) instead of using a middleman (agent) to handle registration, deposits, withdrawals, and payouts.</p>
        <p className="Advantages-heading">What does "แทงบอล without Agent" mean?</p>
        <div className="direct-agent-wrap row justify-content-center">
          {membershipData.map((item) => (
            <div className='col-md-4' key={item.title}>
              <MembershipCard title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default DirectAgent;