import React, { useRef, useState } from "react";
import TimeHelper from "../../helpers/TimeHelper";

function Stopwatch(props) {
    const timer = useRef({});
    const [stopwatch, updateStopwatch] = useState({ time: 0, isStarted: false });
    const start = () => {
        updateStopwatch({ ...stopwatch, isStarted: true });
        timer.current = setInterval(() => { updateStopwatch({ isStarted: true, time: stopwatch.time += 1 }) }, 1000);
    };

    const stop = () => {
        updateStopwatch({ ...stopwatch, isStarted: false });
        clearInterval(timer.current);
    };

    return (
        <div className="stopwatch">
            <i className="far fa-stopwatch"></i>{TimeHelper.getTimeBySeconds(stopwatch.time)}

            {
                !stopwatch.isStarted ?
                    <div className="stopwatch_control" onClick={start}>
                        <i className="fas fa-play"></i>
                    </div>
                    :
                    <div className="stopwatch_control" onClick={stop}>
                        <i className="fas fa-pause"></i>
                    </div>
            }
        </div>
    );
}

export default Stopwatch;