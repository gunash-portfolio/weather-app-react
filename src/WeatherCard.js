import React from 'react';
import './App.css';

const WeatherCard = ({ weatherData,cityName }) => {
    return (
      <div className="weather-card">
        <h2>{weatherData.name}</h2>
        <h1>Temperature of {cityName}:{weatherData&&weatherData.main&&weatherData.main.temp}°C</h1>
      </div>
    );
  };
  
  export default WeatherCard