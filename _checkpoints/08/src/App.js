import React, { Component } from 'react';

import WeatherCard from './containers/WeatherCard';

import { getWeatherByCity } from './utils/network';

import './App.scss';

class App extends Component {
  state = {
    city: '',
    temperature: '',
    currentCondition: '',
  };

  componentDidMount() {
    getWeatherByCity('Montreal').then((response) => {
      console.log(response)
      this.setState({
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        currentCondition: response.data.weather[0].description,
      })
    });
  }

  render() {
    return (
      <div>
        <WeatherCard
          city={this.state.city}
          temperature={this.state.temperature}
          currentCondition={this.state.currentCondition}
        >
        </WeatherCard>
      </div>
    );
  }
}

export default App;
