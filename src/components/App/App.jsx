import React from "react";
import Header from "components/Header";
import MainArea from "components/MainArea";
import { applyMiddleware, createStore } from "redux";
import Reducers from "reducers";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <MainArea />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
