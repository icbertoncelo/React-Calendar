import { IReminder } from "@utils";

import {
  ADD_REMINDER,
  EDIT_REMINDER,
  REMOVE_REMINDER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from "../actions";

export interface IReminderState {
  [key: string]: IReminder[];
}

type ReminderAction = {
  type: string;
  payload: any;
};

const INITIAL_STATE: IReminderState = {};

export const reminderReducer = (
  state = INITIAL_STATE,
  action: ReminderAction
) => {
  switch (action.type) {
    case ADD_REMINDER:
      const prevReminders = state[action.payload.date] ?? [];
      return {
        ...state,
        [action.payload.date]: [...prevReminders, action.payload],
      };
    case REMOVE_REMINDER:
      const newData = state[action.payload.date]?.filter(
        (reminder) => reminder.id !== action.payload.id
      );

      if (!newData) {
        delete state[action.payload.date];
        return state;
      }

      return {
        ...state,
        [action.payload.date]: newData,
      };
    case EDIT_REMINDER:
      const remindersWithoutEdited = state[action.payload.date].filter(
        (reminder) => reminder.id !== action.payload.id
      );

      return {
        ...state,
        [action.payload.date]: [...remindersWithoutEdited, action.payload],
      };
    case GET_WEATHER_SUCCESS:
      const remindersWithoutSelected = state[action.payload.date].filter(
        (reminder) => reminder.id !== action.payload.id
      );

      return {
        ...state,
        [action.payload.date]: [...remindersWithoutSelected, action.payload],
      };
    case GET_WEATHER_FAILURE:
      return state;
    default:
      return state;
  }
};
