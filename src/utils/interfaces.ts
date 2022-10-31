export interface IWeather {
  conditions: string;
  description: string;
  tempMax: number;
  tempMin: number;
  humidity: number;
  precip: number;
}

export interface IReminder {
  id: string;
  description: string;
  city: string;
  date: string;
  weather?: IWeather;
}

export interface IFormData {
  id: string;
  datePicker: string;
  description: string;
  city: string;
}
