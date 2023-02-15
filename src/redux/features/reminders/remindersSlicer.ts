import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReminder } from "@utils";

import { WeatherApi } from "../../../infra/weather";

export interface IReminderState {
  [key: string]: IReminder[];
}

const initialState: IReminderState = {};
type SliceAction = PayloadAction<IReminder>;

export const getWeather = createAsyncThunk<IReminder, IReminder>(
  "reminders/getWeather",
  async (reminder: IReminder) => {
    const weatherApi = new WeatherApi();

    const weather = await weatherApi.getWeather(reminder);

    return {
      ...reminder,
      weather,
    };
  }
);

export const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    addReminder: (state, action: SliceAction) => {
      const prevReminders = state[action.payload.date] ?? [];

      state[action.payload.date] = [...prevReminders, action.payload];
    },
    removeReminder: (state, action: SliceAction) => {
      const newData = state[action.payload.date]?.filter(
        (reminder) => reminder.id !== action.payload.id
      );

      if (!newData) {
        delete state[action.payload.date];
        return state;
      }

      state[action.payload.date] = newData;
    },
    editReminder: (state, action: SliceAction) => {
      const remindersWithoutEdited = state[action.payload.date].filter(
        (reminder) => reminder.id !== action.payload.id
      );

      state[action.payload.date] = [...remindersWithoutEdited, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state, action) => {
      const remindersWithoutSelected = state[action.meta.arg.date].filter(
        (reminder) => reminder.id !== action.meta.arg.id
      );

      state[action.meta.arg.date] = [
        ...remindersWithoutSelected,
        {
          ...action.meta.arg,
          isLoading: true,
          isError: false,
        },
      ];
    });

    builder.addCase(getWeather.fulfilled, (state, action) => {
      const remindersWithoutSelected = state[action.meta.arg.date].filter(
        (reminder) => reminder.id !== action.meta.arg.id
      );

      state[action.meta.arg.date] = [
        ...remindersWithoutSelected,
        {
          ...action.payload,
          isLoading: false,
          isError: false,
        },
      ];
    });

    builder.addCase(getWeather.rejected, (state, action) => {
      const remindersWithoutSelected = state[action.meta.arg.date].filter(
        (reminder) => reminder.id !== action.meta.arg.id
      );

      state[action.meta.arg.date] = [
        ...remindersWithoutSelected,
        {
          ...action.meta.arg,
          isLoading: false,
          isError: true,
        },
      ];
    });
  },
});

export const { addReminder, removeReminder, editReminder } =
  remindersSlice.actions;
export const remindersReducer = remindersSlice.reducer;
