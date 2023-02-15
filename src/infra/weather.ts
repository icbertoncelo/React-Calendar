import { api } from "@services";
import { IReminder, IWeather } from "@utils";

export class WeatherApi {
  async getWeather(reminder: IReminder): Promise<IWeather> {
    try {
      const { city, date } = reminder;
      const { data } = await api.get(`/${city}/${date}`, {
        params: {
          unitGroup: "us",
          key: process.env.REACT_APP_WEATHER_KEY,
          contentType: "json",
        },
      });

      const { conditions, description, tempmin, tempmax } = data.days[0];

      return {
        conditions,
        description,
        tempMax: tempmax,
        tempMin: tempmin,
      };
    } catch (error) {
      throw error;
    }
  }
}
