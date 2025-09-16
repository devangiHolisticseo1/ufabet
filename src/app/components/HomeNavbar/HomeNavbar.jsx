// // 'use client';
// // import React from 'react';
// // import Image from 'next/image';
// // import './homeNavbar.css';

// // export default function HomeNavbar() {
// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
// //       <div className="container  home_nav_mx"> {/* Bootstrap container for responsive padding */}
// //         <a className="navbar-brand" href="#">
// //           <Image src="/images/home/ubet-logo 1.png" alt="logo" width={134} height={22} />
// //         </a>

// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarNav"
// //           aria-controls="navbarNav"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
// //           <ul className="navbar-nav gap-4">
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">HOME</a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">ABOUT US</a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">LIVE SCORE</a>
// //             </li>
// //           </ul>
// //         </div>

// //         <div className="d-flex">
// //           <a href="#" className="btn btn-gold">Log In / Sign up</a>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }



// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import './homeNavbar.css';

// export default function HomeNavbar() {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-dark custom-navbar" role="navigation" aria-label="Main navigation">
//         <div className="container home_nav_mx">
//           <a className="navbar-brand" href="#" aria-label="Homepage">
//             <figure className="m-0">
//               <Image src="/images/home/ubet-logo 1.png" alt="UBet Logo" width={134} height={22} />
//               <figcaption className="visually-hidden">
//                 <strong>UBet</strong> - Home Logo
//               </figcaption>
//             </figure>
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//             <ul className="navbar-nav gap-4">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">HOME</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">ABOUT US</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">LIVE SCORE</a>
//               </li>
//             </ul>
//           </div>

//           <div className="d-flex">
//             <a href="#" className="btn btn-gold">Log In / Sign up</a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }




'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './homeNavbar.css';

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
        <div className="container home_nav_mx">
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
        </div>
      </nav>
    </header>
  );
}