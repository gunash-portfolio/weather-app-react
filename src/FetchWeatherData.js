import React from 'react'

function FetchWeatherData(cityName) {
    let key = "1fad572cd1fa37e88bdd49b077490e89";
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
   return fetch(url) .then((Response) => Response.json())
        
}




export default FetchWeatherData