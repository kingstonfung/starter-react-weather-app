import React from 'react';

import ForecastItem from '../components/forecastItem/forecastItem'

import './weatherCardBottom.scss';

export default (props) => {
  return (
    <div className='cardBottomPortion'>
      <div className='cardDetail'>
        <ul className='forecastsWrapper'>
          <ForecastItem icon="wi-day-sunny" high="10" low="-10" dayOfWeek="Mon"></ForecastItem>
          <ForecastItem icon="wi-day-sunny" high="10" low="-10" dayOfWeek="Mon"></ForecastItem>
          <ForecastItem icon="wi-day-sunny" high="10" low="-10" dayOfWeek="Mon"></ForecastItem>
          <ForecastItem icon="wi-day-sunny" high="10" low="-10" dayOfWeek="Mon"></ForecastItem>
          <ForecastItem icon="wi-day-sunny" high="10" low="-10" dayOfWeek="Mon"></ForecastItem>
        </ul>
      </div>
    </div>
  );
};
