'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './Navbar.css';
import Link from 'next/link';

export default function Navbar() {
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
            <span></span>
          </button>

          {/* Logo - Center */}
          <a className="navbar-brand" href="#" aria-label="Homepage">
            <figure className="m-0">
              <Image src="/images/home/ubet-logo 1.png" alt="UBet Logo" width={143} height={30} />
              <figcaption className="visually-hidden">
                <strong>UBet</strong> - Home Logo
              </figcaption>
            </figure>
          </a>

          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link className="nav-link" role="link" href="/" passHref onClick={closeNavbar}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" role="link" href="/about" passHref onClick={closeNavbar}>
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" role="link" href="#" passHref onClick={closeNavbar}>
                  LIVE SCORE
                </Link>
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