import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();
