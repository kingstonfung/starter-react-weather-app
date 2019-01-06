import React from 'react';

import WeatherCardTop from './weatherCardTop';

class WeatherCard extends React.Component {
  render() {
    return (
      <div className="card">
        <WeatherCardTop
          temperature={this.props.temperature}
          currentCondition={this.props.currentCondition}
          city={this.props.city}
          cityImage={this.props.cityImage}>
        </WeatherCardTop>
      </div>
    )
  }
};

export default WeatherCard;
