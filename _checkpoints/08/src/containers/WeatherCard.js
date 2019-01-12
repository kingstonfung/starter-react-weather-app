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
          <CityNameTitle>{this.props.city}</CityNameTitle>
          <div className='cardInfo'>
            <Temperature>{this.props.temperature}</Temperature>
            <CurrentCondition>{this.props.currentCondition}</CurrentCondition>
          </div>
        </div>
        <div className='cardBottomPortion'>
          
        </div>
      </div>
    );
  };
};

export default WeatherCard;
