import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.less";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
