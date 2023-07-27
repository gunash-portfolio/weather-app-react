import React from 'react';
import './App.css';

const WeatherCard = ({ weatherData,cityName }) => {
    return (
        <div class="weather-container">
        <div class="weather-card">
        <div class="weather-info">
          <div class="temperature">{weatherData&&weatherData.main&&weatherData.main.temp}°C</div>
          <div class="description">Partly Cloudy</div>
        </div>
        <div class="location">New York</div>
      </div>
      </div>




        
    );
  };
  
  export default WeatherCard