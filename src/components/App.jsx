import React, { useState } from "react";
import Header from "./header/Header";
import MainArea from "./mainArea/MainArea"
import { applyMiddleware, createStore } from "redux";
import Reducers from "../reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./general/Modal";
import AddUpdateGoalView from "./mainArea/AddUpdateGoalView";
import AddButton from "./general/AddButton";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  Reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

function App() {
  const [addGoalViewActive, setAddGoalViewActive] = useState(false);


  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <MainArea />
          <Modal active={addGoalViewActive} setActive={setAddGoalViewActive} title="Add goal">
            <AddUpdateGoalView setActive={setAddGoalViewActive} />
          </Modal>
          <AddButton active={addGoalViewActive} setActive={setAddGoalViewActive} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
