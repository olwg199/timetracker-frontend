import React, { useState } from "react";
import "css/UI/accordion.css"

function Accordion({ title, children }) {
    const [isExpended, setIsExpended] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={() => { setIsExpended(!isExpended) }}>
                <div className="accordion-header_title">{title}</div>
                <div className="accordion-header_close-btn" >
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