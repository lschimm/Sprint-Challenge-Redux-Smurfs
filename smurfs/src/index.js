import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import { rootReducer } from "./reducers";

// const store = createStore(
//   rootReducer => {}, // this is the most basic reducer. A function that returns and object. Replace it.
//   applyMiddleware(thunk,logger)
// );
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
