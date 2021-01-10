import React from "react";
import Header from "./header/Header";
import TimeRangeArea from "./timeRangeArea/TimeRangeArea"
import MainArea from "./mainArea/MainArea"
import { createStore } from "redux";
import Reducers from "../reducers";
import { Provider } from "react-redux";

const store = createStore(
  Reducers
);

function App() {
  const todayDate = new Date();

  return (
    <Provider store={store}>
      <Header />
      <TimeRangeArea />
      <MainArea viewTitle={todayDate.getFullYear()} />
    </Provider>
  );
}

export default App;
