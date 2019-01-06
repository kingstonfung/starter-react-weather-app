import React, { Component } from 'react';

import WeatherCard from './containers/weatherCard';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherCard
          city="Edmonton"
          temperature="-5"
          currentCondition="Clear"
        >
        </WeatherCard>
      </div>
    );
  }
}

export default App;
