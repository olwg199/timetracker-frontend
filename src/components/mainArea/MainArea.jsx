import React from "react";
import YearView from "./YearView"

function MainArea(props) {
    const todayDate = new Date();
    const { veiw = todayDate.toLocaleString('en-US', {month: 'long'}) } = props;

    return (
        <section id="main-area">
            <div className="container">
                <div className="main-area-title">
                    <span>{veiw}</span>
                </div>

                <YearView />
            </div>
        </section>
    );
}

export default MainArea;