import React from "react";
import YearView from "./YearView"

function MainArea(props) {
    const { viewTitle } = props;

    return (
        <section id="main-area">
            <div className="container">
                <div className="main-area-title">
                    <span>{viewTitle}</span>
                </div>

                <YearView />
            </div>
        </section>
    );
}

export default MainArea;