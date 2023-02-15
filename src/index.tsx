import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { Main } from "./Main";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Main />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
