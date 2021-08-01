function getTimeBySeconds(num) {
    const hours = Math.floor(num / 3600);
    const minutes = Math.floor(num % 3600 / 60);
    const seconds = Math.floor(num % 3600 % 60);


    return (hours < 10 ? "0" + hours : hours)
        + ":" +
        (minutes < 10 ? "0" + minutes : minutes)
        + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

const TimeHelper = {
    getTimeBySeconds
}

export default TimeHelper;