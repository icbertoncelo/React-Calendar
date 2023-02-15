import { Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import { remindersReducer } from "./features/reminders/remindersSlicer";

export const store = configureStore({
  reducer: {
    reminders: remindersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
