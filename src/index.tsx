import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { Main } from "./Main";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
