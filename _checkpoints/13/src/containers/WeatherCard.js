import React from 'react';

import CityNameTitle from '../components/cityNameTitle/cityNameTitle';
import Temperature from '../components/temperature/temperature';
import CurrentCondition from '../components/currentCondition/currentCondition';

import generateForecasts from './helpers/generateForecast';

import './WeatherCard.scss';

class WeatherCard extends React.Component {
  state = {
    backgroundIsActive: false
  };

  onCardClick() {
    this.setState({
      backgroundIsActive: !this.state.backgroundIsActive
    })
  }

  getCardClassNames() {
    let classNames = 'card ';
    if (this.state.backgroundIsActive) {
      classNames += 'isActive';
    }
    return classNames;
  }

  render() {
    return (
      <div className={this.getCardClassNames()} onClick={this.onCardClick.bind(this)}>
        <div className='cardUpperPortion'  style={{"backgroundImage": `url(${this.props.cityImage})`}}>
          <CityNameTitle>{this.props.city}</CityNameTitle>
          <div className='cardInfo'>
            <Temperature>{this.props.temperature}</Temperature>
            <CurrentCondition>{this.props.currentCondition}</CurrentCondition>
          </div>
        </div>
        <div className='cardBottomPortion'>
          <div className='cardDetail'>
            <ul className='forecastsWrapper'>
              {generateForecasts(this.props.forecast)}
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default WeatherCard;
