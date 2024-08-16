import React, {useState} from "react";

export default function Weather() {
    return (
        <div className="Weather">
            <div class="container">
        <div class="weather-app-wrapper">
            <h1>All Weather</h1>
        <div class="weather-app">
            <form id="search-form" class="mb-3">
                <div class="row">
                    <div class="col-9">
                <input type="search" placeholder="Enter a city..." class="form-control" id="city-input" autocomplete="off"/>
            </div>
            <div class="col-3">
                <input type="submit" value="Search" class="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <div class="overview">
    <h2 id="city"></h2>
    <ul>
        <li>Last updated: <span id="date"></span></li>
        <li id="description"></li>
    </ul>
</div>
    <div class="row">
        <div class="col-6">
            <div class="clearfix weather-temperature">
            <img id="icon" src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" class="float-left" /> <div class="float-left"> <strong id="temperature"></strong>
                <span class="units">°F</span>

            </div>
        </div>
        </div>
        <div class="col-6">
            <ul>
                <li>
                    Precipitation: 1%
                </li>
                <li>
                    Humidity: <span id="humidity"></span>%
                </li>
                <li>
                    Wind: <span id="wind"></span> mph
                </li>
            </ul>
        </div>
    </div>
    <div class="weather-forecast" id="forecast"></div>
    </div>
<small><a href="https://github.com/lorrainethomas-1/Vanilla-Weather-App" target="_blank">Open source code</a> by Lorraine Thomas</small>
</div>
</div>
    <script src="src/app.js"></script>
        </div>
    )
}