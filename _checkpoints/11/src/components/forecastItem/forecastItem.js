import React from 'react';

import Temperature from '../temperature/temperature';

import './forecastItem.scss';

export default () => {
  return (
    <li className='forecastItem'>
      <span className='forecastIcon wi wi-wu-sunny'></span>
      <Temperature>10</Temperature>
      <Temperature>-10</Temperature>
      <p className='forecastDay'>Mon</p>
    </li>
  );
};
