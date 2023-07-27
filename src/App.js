import { useState } from 'react';
import './App.css';
import FetchWeatherData from './FetchWeatherData';
import WeatherCard from './WeatherCard';
function App() {
 const [weatherData, setWeatherData]= useState(null);
 const [cityName,setCityName] = useState('')

 const handleSubmit = (event) =>{
  event.preventDefault();
  FetchWeatherData(cityName)
  .then((data) =>{
    setWeatherData(data);
    
  })
  .catch((error) =>{
    console.error('Api is not working', error);
  })
 }

 const handleInputChange = (event) =>{
  setCityName(event.target.value)
 }




  return (
    <div className="App">
     <h1>Weather App</h1>
     <form onSubmit={handleSubmit}>
     <input placeholder='What is your country' type='text' onChange={handleInputChange} value={cityName}/>
     <button type='submit'>Submit</button>
     </form>
     <h1>Temperature of {cityName}:{weatherData&&weatherData.main&&weatherData.main.temp}°C</h1>
     <WeatherCard></WeatherCard>
    </div>
  );
}

export default App;
