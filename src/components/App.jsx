import React, { useState } from "react";
import Header from "./header/Header";
import MainArea from "./mainArea/MainArea"
import { createStore } from "redux";
import Reducers from "../reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./general/Modal";
import AddTaskView from "./mainArea/AddTaskView";
import AddButton from "./general/AddButton";

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
            <AddTaskView />
          </Modal>
          <AddButton active={addTaskViewActive} setActive={setAddTaskViewActive} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
