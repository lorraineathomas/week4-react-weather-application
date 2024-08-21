import React, {useState} from "react";
import "./Weather.css";

export default function Weather() {
        return (
            <div className="Weather">
                 <header>
                <form class="search-form" id="search-form">
                    <input class="search-form-input" id="search-form-input" type="search" placeholder="Enter a city..." required />
                    <input class="search-form-button" type="submit" value="Search"/>
                </form>
                </header>

                <main>

                <div class="weather-app-data">
                <div>
                <h1 class="weather-app-city" id="city">New York</h1>
                <p class="weather-app-details">
                <span id="time">Friday 15:00</span>, <span id="description">sunny</span>
                <br />
                Humidity: <strong><span id="humidity">27</span>%</strong>, Wind: <strong><span id="wind-speed">19</span>mph</strong>
                </p>
                </div>
                <div class="weather-app-temperature-container">
                <div class="weather-app-icon" id="icon">☀️</div>
                <div class="weather-app-temperature-value" id="temperature">93</div>
                <div class="weather-app-unit">&deg;F</div>
                </div>
                </div> 
                </main>

                <footer>
                Created by 
                <a href="https://github.com/lorraineathomas"> Lorraine Thomas</a> and is 
                <a href="https://github.com/lorraineathomas/weather-app-project">hosted on Github</a>
                and <a href="https://another-weather-search.netlify.app/">hosted on Netlify</a>
                </footer>
            </div>
        )
}