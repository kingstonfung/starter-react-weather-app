import React from 'react';

import CityNameTitle from '../components/cityNameTitle/cityNameTitle';
import Temperature from '../components/temperature/temperature';
import CurrentCondition from '../components/currentCondition/currentCondition';

import './WeatherCard.scss';

class WeatherCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='cardUpperPortion'>
          <CityNameTitle></CityNameTitle>
          <div className='cardTemperature'>-2</div>
          <div className='currentCondition'>Clear</div>
        </div>
        <div className='cardBottomPortion'>
          
        </div>
      </div>
    );
  };
};

export default WeatherCard;
