import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Provider
import { Provider } from "react-redux";
// createStore
import { createStore } from "redux";
// import reducer
import reducer from "./reducer";

// createStore calls reducer
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
