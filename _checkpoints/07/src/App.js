import React, { Component } from 'react';

import WeatherCard from './containers/WeatherCard';

import { getWeatherByCity } from './utils/network';

import './App.scss';

class App extends Component {

  componentDidMount() {
    getWeatherByCity('Calgary')
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <WeatherCard></WeatherCard>
      </div>
    );
  }
}

export default App;
