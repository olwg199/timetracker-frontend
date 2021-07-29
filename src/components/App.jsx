import React from "react";
import Header from "./header/Header";
import MainArea from "./mainArea/MainArea"
import { createStore } from "redux";
import Reducers from "../reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AddTaskView from "./mainArea/AddTaskView";
import AddButton from "./general/AddButton";

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <MainArea />
          <AddTaskView />
          <AddButton />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
