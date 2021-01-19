import React from "react";
import Header from "./header/Header";
import MainArea from "./mainArea/MainArea"
import { createStore } from "redux";
import Reducers from "../reducers";
import { Provider } from "react-redux";

const store = createStore(
  Reducers
);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainArea />
    </Provider>
  );
}

export default App;
