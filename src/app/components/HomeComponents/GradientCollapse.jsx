"use client";

import { useRef, useState } from "react";

const GradientCollapse = ({ dataSource }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleCollapse = (index) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className="gradient-collapse">
            {dataSource.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div className="collapse-wrap" key={index}>
                        <button className="collapse-header" onClick={() => toggleCollapse(index)}>
                            <span className="collapse-index">{index + 1}.</span>
                            {item.title}
                            <span className={`arrow ${isOpen ? 'open' : ''}`}>▾</span>
                        </button>
                        <div
                            className="collapse-content"
                            ref={el => contentRefs.current[index] = el}
                            style={{
                                height: isOpen
                                    ? `${contentRefs.current[index]?.scrollHeight}px`
                                    : "0px"
                            }}
                        >
                            <div className="collapse-inner">
                                {item.description}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default GradientCollapse;
