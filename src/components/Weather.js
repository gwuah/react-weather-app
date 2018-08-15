import React, { Component } from 'react';

const WeatherCard = ({ description, temperature, city}) => {
  console.log('name, temp', description, temperature)
  return (
    <div>
      {city}<br/>
      {description}<br/>
      {temperature} degrees celcius
    </div>
  )
};

export default WeatherCard;