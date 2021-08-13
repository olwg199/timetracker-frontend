import React, { useState } from "react";
import Header from "components/Header";
import MainArea from "components/MainArea"
import { applyMiddleware, createStore } from "redux";
import Reducers from "reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "components/UI/Modal";
import AddUpdateGoal from "components/UI/AddUpdateGoal";
import AddButton from "components/UI/AddButton";
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
            <AddUpdateGoal setActive={setAddGoalViewActive} />
          </Modal>
          <AddButton active={addGoalViewActive} setActive={setAddGoalViewActive} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
