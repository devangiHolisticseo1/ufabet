"use client";

import { useState } from "react";
import GradientCollapse from "./GradientCollapse"; // Adjust as needed

const tabsData = [
    {
        label: "Origins and History",
        items: [
            { title: "Instant Processing", description: "Deposits are processed instantly." },
            { title: "No Fees", description: "We don't charge fees on deposits." },
        ]
    },
    {
        label: "Football Betting in Thailand",
        items: [
            { title: "Fast Payouts", description: "Withdrawals within 24 hours." },
            { title: "Min Amount", description: "Minimum withdrawal is $10." },
        ]
    },
    {
        label: "Popularity and Statistics...",
        items: [
            { title: "Welcome Bonus", description: "Get 100% on first deposit." },
        ]
    },
    {
        label: "Regulations and Social...",
        items: [
            { title: "Encryption", description: "All data is encrypted end-to-end." },
            { title: "KYC", description: "Verification helps us protect users." },
        ]
    },
    {
        label: "GlobaL..",
        items: [
            { title: "24/7 Chat", description: "Live support around the clock." },
            { title: "Multilingual", description: "Support in 5+ languages." },
        ]
    },
    {
        label: "Deposits",
        items: [
            { title: "Instant Processing", description: "Deposits are processed instantly." },
            { title: "No Fees", description: "We don't charge fees on deposits." },
        ]
    },
    {
        label: "Withdrawals",
        items: [
            { title: "Fast Payouts", description: "Withdrawals within 24 hours." },
            { title: "Min Amount", description: "Minimum withdrawal is $10." },
        ]
    },
    {
        label: "Bonuses",
        items: [
            { title: "Welcome Bonus", description: "Get 100% on first deposit." },
        ]
    },
    {
        label: "Security",
        items: [
            { title: "Encryption", description: "All data is encrypted end-to-end." },
            { title: "KYC", description: "Verification helps us protect users." },
        ]
    },
    {
        label: "Support",
        items: [
            { title: "24/7 Chat", description: "Live support around the clock." },
            { title: "Multilingual", description: "Support in 5+ languages." },
        ]
    },
];

const TabsSwiperCollapse = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="container">
            <div className="tabs-scrollable-header">
            {/* Tab Header */}
                <div className="tab-header-scroll">
                    {tabsData.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-btn ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                <GradientCollapse dataSource={tabsData[activeIndex].items} />
            </div>
        </div>
    );
};

export default TabsSwiperCollapse;
