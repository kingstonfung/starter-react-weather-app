import React, { Component } from 'react';

import WeatherCard from './containers/WeatherCard';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <WeatherCard></WeatherCard>
      </div>
    );
  }
}

export default App;
