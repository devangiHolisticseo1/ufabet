// "use client"
// import React from 'react';
// import './home_sec6_p4.css';

// export default function HomeSec6P4() {
//   return (
//     <div className="home_sec6_p4_container ">
//       <div className="text-center text-white">
//         <h2 className="home_sec6_p4_heading">
//          Watch VIP Football for Accurate<span> แทงบอล</span>
//         </h2>
//         <p className="home_sec6_p4_subheading">
//        Watch Live Matches for Football Betting as HD
//         </p>
//         <button className="btn btn-light home_sec6_p4_button">
//           Watch Live Now
//         </button>
//       </div>
//     </div>
//   );
// }



"use client"
import React from "react";
import "./home_sec6_p4.css";

export default function HomeSec6P4() {
  return (
    <div className="home_sec6_p4_container">
      <div className="text-center text-white">
        {/* ✅ Heading should remain inside <h2> */}
        <h2 className="home_sec6_p4_heading">
          Watch VIP Football for Accurate <span>แทงบอล</span>
        </h2>

        {/* ✅ Use <p> for subtitle/description */}
        <p className="home_sec6_p4_subheading">
          Watch Live Matches for Football Betting as HD
        </p>

        {/* ✅ Use <button> with aria-label for accessibility */}
        <button
          className="btn btn-light home_sec6_p4_button"
          aria-label="Watch live football matches now"
        >
          Watch Live Now
        </button>
      </div>
    </div>
  );
}

