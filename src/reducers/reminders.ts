import { IReminder } from "src/utils";

import { ADD_REMINDER, EDIT_REMINDER, REMOVE_REMINDER } from "../actions";

export interface IReminderState {
  [key: string]: IReminder[];
}

type CounterAction = {
  type: string;
  payload: any;
};

const INITIAL_STATE: IReminderState = {};

export const reminderReducer = (
  state = INITIAL_STATE,
  action: CounterAction
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
    default:
      return state;
  }
};
