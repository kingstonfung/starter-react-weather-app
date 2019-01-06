import axios from 'axios';

import { CITY_WEATHER_URL, CITY_FORECAST_URL } from '../config/endpoints';

export const getWeatherByCity = (city) => {
  const url = CITY_WEATHER_URL + city;
  return axios.get(url)
};

export const getForecastByCity = (city) => {
  const url = CITY_FORECAST_URL + city;
  return axios.get(url);
};
