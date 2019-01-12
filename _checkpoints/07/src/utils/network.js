import axios from 'axios';

import { CITY_WEATHER_URL } from '../config/endpoints';

export const getWeatherByCity = (city) => {
  const url = CITY_WEATHER_URL + city;
  return axios.get(url);
};
