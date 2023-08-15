# Weather App

The Weather App is a simple React application that allows users to fetch and display weather information for multiple cities using the OpenWeatherMap API. Users can also delete weather cards for specific cities.

## Features

- Fetch weather data for multiple cities using the OpenWeatherMap API.
- Display city names and temperatures in Celsius.
- Delete weather cards for specific cities.

## Getting Started

To run the Weather App locally on your machine, follow the steps below:

1. Clone this repository to your local machine using Git:

```bash
git clone https://github.com/your-username/weather-app.git
```
2.Navigate to the project directory:

```bash
cd weather-app
```
3. Install the required dependencies using npm:
```bash
npm install
```
4. Get your OpenWeatherMap API key:

5. Sign up for a free account on OpenWeatherMap (https://openweathermap.org/).
6. Obtain your API key from the dashboard.

7. Replace YOUR_OPENWEATHERMAP_API_KEY in src/api.js and src/App.js with your actual API key.
8. Run the development server:
npm start.
9. Open your web browser and visit http://localhost:3000 to access the Weather App.

## Usage
1.Enter the name of a city in the input field.
2.Click the "Get Weather" button to fetch weather information for the specified city.
3. The app will display the city name and temperature in Celsius.

## Components

# App
The `App` component is the main component of the Weather App. It handles fetching weather data, displaying weather cards, and managing delete functionality.

# API
The `fetchWeatherData` function in the `api.js` file is responsible for making API requests to OpenWeatherMap to retrieve weather data.

## Technologies Used
- React (Create React App),
- HTML/CSS,
- OpenWeatherMap API,

