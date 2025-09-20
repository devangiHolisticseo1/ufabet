"use client";

import { useState } from "react";

const TrueWallet = () => {
    const [showFullText, setShowFullText] = useState(false);
    const toggleReadMore = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="the-best-sec">
            <div className="container">
                <h2 className="main-heading">Football betting website with TrueWallet</h2>
                <p>
                    A football betting website with TrueWallet refers to an online platform that allows users to place wagers on football matches while using TrueWallet as a payment method. TrueWallet functions as a digital wallet service that supports fast and secure financial transactions. The integration of TrueWallet into a betting website provides several practical benefits. One benefit includes immediate deposit processing, which allows bettors to fund their accounts without delay. Another benefit involves simplified withdrawals, where winnings are transferred directly to the TrueWallet account without requiring bank intermediaries.
                    {!showFullText && (
                        <span className="read-more-btn" onClick={toggleReadMore}>
                            Read More
                        </span>
                    )}
                </p>
                <h3 className="sub-heading golden-text">Use QR Code Online Banking for Ufabet</h3>
                <p>
                    Using QR Code online banking for Ufabet refers to a payment method that allows direct financial transactions through a scannable digital code. The system connects a bettor’s bank account to the UFABET platform without requiring manual entry of account details. The QR code method supports fast deposits and withdrawals by linking the banking app to the betting site through a secure scan.
                    {!showFullText && (
                        <span className="read-more-btn" onClick={toggleReadMore}>
                            Read More
                        </span>
                    )}
                </p>
            </div>
        </div>
    )
};

export default TrueWallet;