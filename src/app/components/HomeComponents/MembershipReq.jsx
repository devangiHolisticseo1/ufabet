"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import MembershipCard from './MembershipCard';

const MembershipReq = () => {
  const membershipData = [
    {
      title: "Account Registration",
      description: "Sign up on the chosen betting platform by providing personal details (full name, contact information, and preferred login credentials). The step ensures that each member has a verified and unique account.",
      imgSrc: "/images/Account-Registration.png"
    },
    {
      title: "Age Requirement",
      description: "A player must be of the legal age of 18 or 21, depending on local regulations. Age verification is carried out through ID submission to prevent underage betting.",
      imgSrc: "/images/Account-Registration.png"
    },
    {
      title: "Valid Identification",
      description: "Upload a government-issued ID or other official documents to confirm the identity. The step is essential for security, fraud prevention, and compliance with gambling regulations.",
      imgSrc: "/images/Account-Registration.png"
    },
    {
      title: "Terms and Conditions",
      description: "Upload a government-issued ID or other official documents to confirm the identity. The step is essential for security, fraud prevention, and compliance with gambling regulations.",
      imgSrc: "/images/Account-Registration.png"
    },
    {
      title: "Deposit Funds",
      description: "A funded account is necessary to place real bets. Make an initial deposit through available payment methods (bank transfer, credit card, or e-wallet).",
      imgSrc: "/images/Account-Registration.png"
    },
    {
      title: "Payment Method Verifications",
      description: "Platforms require proof of payment ownership (bank statement or card verification). It prevents unauthorized transactions and protects the member and the site.",
      imgSrc: "/images/Account-Registration.png"
    },
    {
      title: "Compliance",
      description: "Follow ongoing membership rules (responsible gambling practices and periodic account verification). Failure to comply results in account suspension or termination.",
      imgSrc: "/images/Account-Registration.png"
    }
  ]
  return (
    <section className="memb-requirement">
      <div className="container">
        <h2 className="main-heading">What are the แทงบอล Membership Requirements?</h2>
        <p className="heading-para">The แทงบอล membership requirements are listed below.</p>
        <div className="membership-wrap bottom-left-swiper-nav">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper sticky-swiper"
          >
            {membershipData.map((item, index) => (
              <SwiperSlide key={index}>
                <MembershipCard title={item.title} description={item.description} imgSrc={item.imgSrc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
};

export default MembershipReq;