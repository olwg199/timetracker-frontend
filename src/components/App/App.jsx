import React from "react";
import { applyMiddleware, createStore } from "redux";
import Reducers from "reducers";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import MainContainer from "components/UI/MainContainer/MainContainer";
import Dashboard from "components/Dashboard/Dashboard";
import MainContent from "components/MainContent/MainContent";

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainContainer>
          <Dashboard>
          </Dashboard>
          <MainContent />
        </MainContainer>
      </Router>
    </Provider>
  );
}

export default App;
