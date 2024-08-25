import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({
        city: "New York",
        temperature: 93,
        description: "sunny",
        humidity: 27,
        windSpeed: 19,
        time: "Friday 15:00",
        iconUrl: ":sunny:",
      });
    
      function refreshWeather(response) {
        const temperatureValue = Math.round(convertTemperature(response.data.main.temperature.current));
        const dayTime = new Date(response.data.main.time * 1000);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const minutes = dayTime.getMinutes() < 10 ? `0${dayTime.getMinutes()}` : dayTime.getMinutes();
        const time = `${days[dayTime.getDay()]} ${dayTime.getHours()}:${minutes}`;
        const speed = Math.round(response.data.main.wind.speed * 1.609344);
        setWeatherData({
          city: response.data.main.city,
          temperature: temperatureValue,
          description: response.data.main.condition.description,
          humidity: response.data.main.temperature.humidity,
          windSpeed: speed,
          time: time,
          iconUrl: response.data.main.condition.icon_url,
        });
        console.log(response);
      }
    
      function searchCity(city) {
        const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(refreshWeather);
      }
    
      function convertTemperature(celsius) {
        return 9 / 5 * celsius + 32;
      }
    
      function handleSearchSubmit(event) {
        event.preventDefault();
        const searchInput = event.target.elements.city.value;
        searchCity(searchInput);
      }
    
      return (
        <div className="Weather">
          <div className="weather-app">
            <header>
              <form className="search-form" id="search-form" onSubmit={handleSearchSubmit}>
                <input
                  className="search-form-input"
                  id="search-form-input"
                  type="search"
                  name="city"
                  placeholder="Enter a city..."
                  required
                />
                <input className="search-form-button" type="submit" value="Search" />
              </form>
            </header>
    
            <main>
              <div className="weather-app-data">
                <div>
                  <h1 className="weather-app-city" id="city">{weatherData.city}</h1>
                  <p className="weather-app-details">
                    <span id="time">{weatherData.time}</span>, <span id="description">{weatherData.description}</span>
                    <br />
                    Humidity: <strong><span id="humidity">{weatherData.humidity}</span>%</strong>, Wind: <strong><span id="wind-speed">{weatherData.windSpeed}</span> mph</strong>
                  </p>
                </div>
                <div className="weather-app-temperature-container">
                  <div className="weather-app-icon" id="icon">
                    <img src={weatherData.iconUrl} alt="Weather Icon" className="weather-app-icon" />
                  </div>
                  <div className="weather-app-temperature-value" id="temperature">{weatherData.temperature}</div>
                  <div className="weather-app-unit">&deg;F</div>
                </div>
              </div>
            </main>
    
            <footer>
              Created by
              <a href="https://github.com/lorraineathomas"> Lorraine Thomas</a>{" "} and is{" "}
              <a href="https://github.com/lorraineathomas/weather-app-project">{" "}hosted on Github{" "}</a>
              and{" "}<a href="https://another-weather-search.netlify.app/">{" "}hosted on Netlify</a>
            </footer>
          </div>
        </div>
      );
}