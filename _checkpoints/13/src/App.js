import React, { Component } from 'react';

import WeatherCard from './containers/WeatherCard';

import { getWeatherByCity, getForecastByCity } from './utils/network';

import './App.scss';

class App extends Component {
  state = {
    city: '',
    temperature: '',
    currentCondition: '',
    cityImage: '',
    forecast: [],
  };

  componentDidMount() {
    getWeatherByCity('Calgary').then((response) => {
      this.setState({
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        currentCondition: response.data.weather[0].description,
        cityImage: response.data.photo
      })
    });

    getForecastByCity('Calgary').then((response) => {
      this.setState({
        forecast: response.data.list
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
          cityImage={this.state.cityImage}
          forecast={this.state.forecast}
        >
        </WeatherCard>
      </div>
    );
  }
}

export default App;
