"use client";

import { useState, useRef, useEffect } from "react";
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
    const [isTransitioning, setIsTransitioning] = useState(false);
    const tabHeaderRef = useRef(null);
    const hasMountedRef = useRef(false);
    const contentRef = useRef(null);
    
    // Touch/Swipe handling
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const minSwipeDistance = 50;

    // Auto-scroll active tab into view
    useEffect(() => {
        // Avoid triggering any scrolling on the very first paint
        if (!hasMountedRef.current) {
            hasMountedRef.current = true;
            return;
        }

        if (tabHeaderRef.current) {
            const activeTab = tabHeaderRef.current.children[activeIndex];
            if (activeTab) {
                activeTab.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeIndex]);

    const handleTabChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < tabsData.length && newIndex !== activeIndex) {
            setIsTransitioning(true);
            setActiveIndex(newIndex);
            setTimeout(() => setIsTransitioning(false), 300);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            // Swipe left - go to next tab
            handleTabChange(activeIndex + 1);
        } else if (isRightSwipe) {
            // Swipe right - go to previous tab
            handleTabChange(activeIndex - 1);
        }

        // Reset values
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    const goToPrevious = () => {
        handleTabChange(activeIndex - 1);
    };

    const goToNext = () => {
        handleTabChange(activeIndex + 1);
    };

    return (
        <section className="container tabs-swiper-container mb-5">
            {/* Navigation Buttons */}
            <div className="tabs-navigation">
                <button 
                    className="nav-btn nav-btn-prev" 
                    onClick={goToPrevious}
                    disabled={activeIndex === 0}
                    aria-label="Previous tab"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                <button 
                    className="nav-btn nav-btn-next" 
                    onClick={goToNext}
                    disabled={activeIndex === tabsData.length - 1}
                    aria-label="Next tab"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className="tabs-scrollable-header">
                {/* Tab Header */}
                <div className="tab-header-scroll" ref={tabHeaderRef}>
                    {tabsData.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-btn ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleTabChange(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content with Swipe Support */}
            <div 
                className={`tab-content ${isTransitioning ? 'transitioning' : ''}`}
                ref={contentRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="tab-content-inner">
                    <GradientCollapse dataSource={tabsData[activeIndex].items} />
                </div>
            </div>
        </section>
    );
};

export default TabsSwiperCollapse;
