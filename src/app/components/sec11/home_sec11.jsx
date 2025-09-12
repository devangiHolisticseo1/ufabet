// components/HomeSec11.jsx
import React, { useState } from 'react';
import './home_sec11.css';
import Image from 'next/image';

const HomeSec11 = () => {
    const [activeTab, setActiveTab] = useState('wallet');

    const tabContent = {
        wallet: {
            label: 'AVAILABLE BALANCE',
            value: '฿120.00',
            icon: 'bi-wallet2',
        },
        deposit: {
            label: 'DEPOSITED AMOUNT',
            value: '฿500.00',
            icon: 'bi-piggy-bank',
        },
        withdraw: {
            label: 'WITHDRAWABLE',
            value: '฿300.00',
            icon: 'bi-bank',
        },
    };

    return (
        <div className="container home_sec11_section py-5">
            <div className="row align-items-start">
                {/* Left Side: Dynamic Wallet Box */}
                <div className="col-md-5">
                    <div className="home_sec11_wallet_card">
                        <ul className="nav nav-tabs home_sec11_tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'wallet' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('wallet')}
                                    type="button"
                                >
                                    กระเป๋าตังค์
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'deposit' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('deposit')}
                                    type="button"
                                >
                                    ฝากเงิน
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'withdraw' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('withdraw')}
                                    type="button"
                                >
                                    ถอนเงิน
                                </button>
                            </li>
                        </ul>

                        <div className="p-3 home_sec11_tab_content">
                            <div className="home_sec11_balance_box">
                                <div className="home_sec11_balance_label">{tabContent[activeTab].label}</div>
                                <div className="home_sec11_balance_value">{tabContent[activeTab].value}</div>
                                <div className="home_sec11_wallet_icon">
                                    <i className={`bi ${tabContent[activeTab].icon}`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Advantages */}
                <div className="col-md-7 mt-4 mt-md-0">
                    <h4 className="home_sec11_advantages_title mb-3"><strong>Advantages :</strong></h4>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <div className="home_sec11_advantage_box">
                                <div className='d-flex home_sec11_advantage_box_gap'>
                                    <Image src="/images/home/sec11/Group 87242.svg" width={28} height={28} className='img-fluid' alt="Transparency" />
                                    <h6><strong>Transparency</strong></h6>
                                </div>
                                <p>Easily track your balance in real time through your betting account dashboard. You’ll know exactly how much credit is available before placing any bets.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="home_sec11_advantage_box">
                                <div className='d-flex home_sec11_advantage_box_gap'>
                                    <Image src="/images/home/sec11/Vector.svg" width={28} height={28} className='img-fluid' alt="Security" />

                                    <h6><strong>Security</strong></h6>
                                </div>
                                <p>Your funds are protected through encrypted platforms, ensuring safe transactions and preventing unauthorized access.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="home_sec11_advantage_box">
                                <div className='d-flex home_sec11_advantage_box_gap'>

                                    <Image src="/images/home/sec11/Vector (1).svg" width={28} height={28} className='img-fluid' alt="24/7 Access" />
                                    <h6><strong>24/7 Access</strong></h6>
                                </div>

                                <p>Check your betting credit anytime, anywhere. Most platforms provide round-the-clock access to your account so you’re never restricted by time.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="home_sec11_advantage_box">
                                <div className='d-flex home_sec11_advantage_box_gap'>

                                    <Image src="/images/home/sec11/Group.svg" width={28} height={28} className='img-fluid' alt="No Agent" />

                                    <h6><strong>No Agent</strong></h6>
                                </div>
                                <p>You don’t need a middleman to verify your credit – simply log in to the platform directly and check your available balance instantly.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeSec11;
