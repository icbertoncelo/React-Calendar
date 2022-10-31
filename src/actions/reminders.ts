import { api } from "@services";
import { AppDispatch } from "@store";
import { IReminder } from "@utils";

export const ADD_REMINDER = "ADD_REMINDER";
export const REMOVE_REMINDER = "REMOVE_REMINDER";
export const EDIT_REMINDER = "EDIT_REMINDER";
export const GET_WEATHER = "GET_WEATHER";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

export const addReminder = (reminder: IReminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
});

export const removeReminder = (reminder: IReminder) => ({
  type: REMOVE_REMINDER,
  payload: reminder,
});

interface IGetWeatherProps {
  reminder: IReminder;
}

export const getWeather = ({ reminder }: IGetWeatherProps) => {
  return (dispatch: AppDispatch) => {
    const { city, date } = reminder;

    return api
      .get(`/${city}/${date}`, {
        params: {
          unitGroup: "us",
          key: "ZULYM2QH667UKHHBHSND4SVDS",
          contentType: "json",
        },
      })
      .then(
        ({ data }) => {
          const { conditions, description, tempmin, tempmax } = data.days[0];

          return dispatch({
            type: GET_WEATHER_SUCCESS,
            payload: {
              ...reminder,
              weather: {
                conditions,
                description,
                tempMax: tempmax,
                tempMin: tempmin,
              },
            },
          });
        },
        (error) => dispatch({ type: GET_WEATHER_FAILURE, payload: error })
      );
  };
};
