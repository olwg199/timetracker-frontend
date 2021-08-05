import React, { useState } from "react";
import "./accordion.css"

function Accordion({ title, children }) {
    const [isExpended, setIsExpended] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-header">
                <div className="accordion-header_title">{title}</div>
                <div className="accordion-header_close-btn" onClick={() => { setIsExpended(!isExpended) }}>
                    <i className={isExpended ? "fas fa-times" : "fas fa-chevron-down"}></i>
                </div>
            </div>
            <div className={isExpended ? "accordion-content active" : "accordion-content"}>
                {children}
            </div>
        </div >
    );
}

export default Accordion;