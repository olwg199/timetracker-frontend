import React, { useState } from "react";
import Header from "./header/Header";
import MainArea from "./mainArea/MainArea"
import { applyMiddleware, createStore } from "redux";
import Reducers from "../reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./general/Modal";
import AddUpdateTaskView from "./mainArea/AddUpdateTaskView";
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
  const [addTaskViewActive, setAddTaskViewActive] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <MainArea />
          <Modal active={addTaskViewActive} setActive={setAddTaskViewActive} title="Add Task">
            <AddUpdateTaskView setActive={setAddTaskViewActive} />
          </Modal>
          <AddButton active={addTaskViewActive} setActive={setAddTaskViewActive} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
