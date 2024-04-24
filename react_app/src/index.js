import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Provide your Redux store to the Provider */}
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
