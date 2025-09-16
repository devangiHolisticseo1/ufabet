'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './HomeNavbar.css';

export default function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar" role="navigation" aria-label="Main navigation">
        {/* <div className="container home_nav_mx">
          <a className="navbar-brand" href="#" aria-label="Homepage">
            <figure className="m-0">
              <Image src="/images/home/ubet-logo 1.png" alt="UBet Logo" width={134} height={22} />
              <figcaption className="visually-hidden">
                <strong>UBet</strong> - Home Logo
              </figcaption>
            </figure>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNavbar}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNavbar}>ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNavbar}>LIVE SCORE</a>
              </li>
            </ul>
          </div>

          <div className="d-flex auth-section">
            <a href="#" className="btn btn-gold" onClick={closeNavbar}>Log In / Sign up</a>
          </div>
        </div> */}
        <div className="container home_nav_mx">
  {/* Hamburger - Left */}
  <button
    className="navbar-toggler"
    type="button"
    onClick={toggleNavbar}
    aria-controls="navbarNav"
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  {/* Logo - Center */}
  <a className="navbar-brand" href="#" aria-label="Homepage">
    <figure className="m-0">
      <Image src="/images/home/ubet-logo 1.png" alt="UBet Logo" width={134} height={22} />
      <figcaption className="visually-hidden">
        <strong>UBet</strong> - Home Logo
      </figcaption>
    </figure>
  </a>

  <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNavbar}>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNavbar}>ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeNavbar}>LIVE SCORE</a>
              </li>
            </ul>
          </div>



  {/* Auth Button - Right */}
  <div className="d-flex auth-section">
    <a href="#" className="btn btn-gold" onClick={closeNavbar}>Log In / Sign up</a>
  </div>
</div>

      </nav>
    </header>
  );
}