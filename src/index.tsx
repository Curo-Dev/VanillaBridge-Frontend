import React, {
  Fragment,
} from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {
  App,
} from "./app";
import {
  GlobalStyle,
} from "./globalStyle";

const element = (
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
);
const container = document.getElementById("root");

ReactDOM.render(element, container);
serviceWorker.unregister();