import React from "react";
import Header from "./header/Header";
import TimeRangeArea from "./timeRangeArea/TimeRangeArea"
import MainArea from "./mainArea/MainArea"

function App() {
  const todayDate = new Date();

  return (
    <div>
      <Header />
      <TimeRangeArea />
      <MainArea viewTitle={todayDate.getFullYear()}/>
    </div>
  );
}

export default App;
