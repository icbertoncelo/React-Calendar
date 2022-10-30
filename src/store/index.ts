import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "src/reducers";

const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(reducers, initialState, composedEnhancers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
