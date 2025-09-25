"use client";

import { useState, useRef, useEffect } from "react";

const tabsData = [
  {
    label: "The Best แทงบอล Website UFABET",
    title: "The Best แทงบอล Website UFABET",
    slug: "the-best-แทงบอล-website-ufabet",
  },
  {
    label: "How to Apply for แทงบอล?",
    title: "How to Apply for แทงบอล?",
    slug: "how-to-apply-for-แทงบอล",
  },
  {
    label: "What are the แทงบอล Membership Requirements?",
    title: "What are the แทงบอล Membership Requirements?",
    slug: "what-are-the-แทงบอล-membership-requirements",
  },
  {
    label: "Why is Ufabet Better than SBOBET for แทงบอล?",
    title: "Why is Ufabet Better than SBOBET for แทงบอล?",
    slug: "why-is-ufabet-better-than-sbobet-for-แทงบอล",
  },
  {
    label: "How to Sign up for football betting with Ufabet?",
    title: "How to Sign up for football betting with Ufabet?",
    slug: "how-to-sign-up-for-football-betting-with-ufabet",
  },
  {
    label: "Why is SBOBET Better than Ufabet for แทงบอล?",
    title: "Why is SBOBET Better than Ufabet for แทงบอล?",
    slug: "why-is-sbobet-better-than-ufabet-for-แทงบอล",
  },
  {
    label: "How to Sign up for football betting with SBOBET?",
    title: "How to Sign up for football betting with SBOBET?",
    slug: "how-to-sign-up-for-football-betting-with-sbobet",
  },
  {
    label: "See แทงบอล Odds for Over/Under",
    title: "See แทงบอล Odds for Over/Under",
    slug: "see-แทงบอล-odds-for-over-under",
  },
  {
    label: "Over/Under Football Betting Odds for 24 Hours (Today)",
    title: "Over/Under Football Betting Odds for 24 Hours (Today)",
    slug: "over-under-football-betting-odds-for-24-hours-today",
  },
  {
    label: "Today's Football Accumulator",
    title: "Today's Football Accumulator",
    slug: "todays-football-accumulator",
  },
  {
    label: "Live Football Accurate Scores and Results",
    title: "Live Football Accurate Scores and Results",
    slug: "live-football-accurate-scores-and-results",
  },
  {
    label: "Live Football Betting Odds for Leagues and Team Matches",
    title: "Live Football Betting Odds for Leagues and Team Matches",
    slug: "live-football-betting-odds-for-leagues-and-team-matches",
  },
  {
    label: "แทงบอล for Football Tournaments",
    title: "แทงบอล for Football Tournaments",
    slug: "แทงบอล-for-football-tournaments",
  },
  {
    label: "แทงบอล for Goals, Assists and Scores",
    title: "แทงบอล for Goals, Assists and Scores",
    slug: "แทงบอล-for-goals-assists-and-scores",
  },
  {
    label: "แทงบอล for Corners, Posessions, Cleansheets",
    title: "แทงบอล for Corners, Posessions, Cleansheets",
    slug: "แทงบอล-for-corners-posessions-cleansheets",
  },
  {
    label: "Watch VIP Football for Accurate แทงบอล",
    title: "Watch VIP Football for Accurate แทงบอล",
    slug: "watch-vip-football-for-accurate-แทงบอล",
  },
  {
    label: "แทงบอล Direct Website without Agent",
    title: "แทงบอล Direct Website without Agent",
    slug: "แทงบอล-direct-website-without-agent",
  },
  {
    label: "Football betting website with TrueWallet",
    title: "Football betting website with TrueWallet",
    slug: "football-betting-website-with-truewallet",
  },
  {
    label: "What Types of Online Football Betting are There?",
    title: "What Types of Online Football Betting are There?",
    slug: "what-types-of-online-football-betting-are-there",
  },
  {
    label: "What are the Advantages of แทงบอล?",
    title: "What are the Advantages of แทงบอล?",
    slug: "what-are-the-advantages-of-แทงบอล",
  },
  {
    label: "What is football betting?",
    title: "What is football betting?",
    slug: "what-is-football-betting",
  },
  {
    label: "How to Check your credit score online for แทงบอล?",
    title: "How to Check your credit score online for แทงบอล?",
    slug: "how-to-check-your-credit-score-online-for-แทงบอล",
  },
];

const NavTabsSwiperCollapse = () => {
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
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  const handleTabChange = (newIndex) => {
    if (
      newIndex >= 0 &&
      newIndex < tabsData.length &&
      newIndex !== activeIndex
    ) {
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
    <div className="container nav-tabs-swiper-container">
      {/* Navigation Buttons */}
      <div className="tabs-navigation nav-tabs-navigation">
        <button
          className="nav-btn nav-btn-prev"
          onClick={goToPrevious}
          aria-label="Previous tab"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="nav-btn nav-btn-next"
          onClick={goToNext}
          aria-label="Next tab"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="tabs-scrollable-header">
        {/* Tab Header */}
        <div className="tab-header-scroll" ref={tabHeaderRef}>
          {tabsData.map((tab, index) => (
            <button
              key={index}
              className={`nav-tab-btn ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavTabsSwiperCollapse;
