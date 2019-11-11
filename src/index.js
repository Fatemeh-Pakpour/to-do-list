import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "./components/Context";
import App from "./components/App";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

