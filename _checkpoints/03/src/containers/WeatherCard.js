import React from 'react';

import './WeatherCard.scss';

class WeatherCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='cardUpperPortion'>
          <h2 className='cityNameTitle'>Edmonton</h2>
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
