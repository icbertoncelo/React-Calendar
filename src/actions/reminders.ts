import { IReminder } from "src/utils";

export const ADD_REMINDER = "ADD_REMINDER";
export const REMOVE_REMINDER = "REMOVE_REMINDER";
export const EDIT_REMINDER = "EDIT_REMINDER";

export const addReminder = (reminder: IReminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
});

export const removeReminder = (reminder: IReminder) => ({
  type: REMOVE_REMINDER,
  payload: reminder,
});
