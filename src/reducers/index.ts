import { combineReducers } from "redux";

import { reminderReducer } from "./reminders";

const reducers = {
  reminders: reminderReducer,
};

export default combineReducers(reducers);
